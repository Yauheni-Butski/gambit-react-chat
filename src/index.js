import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore/* , applyMiddleware */ } from 'redux';
/* import createSagaMiddleware from 'redux-saga'; */

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/* import setupSocket from './sockets'; */
import chatReducers from './reducers';
/* import handleNewMessage from './sagas';
import userName from './utils/name'; */

//const sagaMiddleware = createSagaMiddleware();
/* const store = createStore(
    chatReducers,
    applyMiddleware(sagaMiddleware) //TODO. Разобраться со вторым парамметром
); */
const store = createStore(
    chatReducers
);

/* const socket = setupSocket(store.dispatch, userName); */
/* sagaMiddleware.run(handleNewMessage, {socket, userName}); */

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
