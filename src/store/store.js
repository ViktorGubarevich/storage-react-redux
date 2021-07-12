import { applyMiddleware, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "../_reducers/reducers";
import rootSaga from '../_actions/sagas';
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

sagaMiddleware.run(rootSaga);

export default store;
