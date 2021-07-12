import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../_reducers/reducers";
import sagas from "./sagas";
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

sagaMiddleware.run(sagas);

export default store;
