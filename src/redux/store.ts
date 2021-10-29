import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import loggerMiddleware from "redux-logger";

import reducer from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware, loggerMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
