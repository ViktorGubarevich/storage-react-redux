import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";
import storageApi from "../actions/storageApi";
import { loadState, saveState } from "./localStorage";

const sagaMiddleware = createSagaMiddleware();
const initialState = loadState();

const createStoreWithMiddleware = compose(applyMiddleware(sagaMiddleware))(
  createStore
);

const store = createStoreWithMiddleware(reducers, initialState);

store.subscribe(() => {
  saveState({
    username: store.getState().username,
  });
});

sagaMiddleware.run(storageApi);

export default store;
