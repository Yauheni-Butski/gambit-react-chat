import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import chatReducers from '../reducers';
import chatSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    chatReducers,
    applyMiddleware(sagaMiddleware)
);
sagaMiddleware.run(chatSaga);

export default store;