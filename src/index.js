import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
/* import { createStore } from 'redux'; */ /* , applyMiddleware */
/* import createSagaMiddleware from 'redux-saga'; */
import store from './store/store'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
/* import setupSocket from './sockets'; */
/* import chatReducers from './reducers'; */
/* import handleNewMessage from './sagas';
import userName from './utils/name'; */


/* import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { tokenUrl, instanceLocator } from './config';
import { addMessage } from './actions/index'; */


//const sagaMiddleware = createSagaMiddleware();
/* const store = createStore(
    chatReducers,
    applyMiddleware(sagaMiddleware) //TODO. Разобраться со вторым парамметром
); */
/* const store = createStore(
    chatReducers
); */

/* const socket = setupSocket(store.dispatch, userName); */
/* sagaMiddleware.run(handleNewMessage, {socket, userName}); */




/* const chatManager = new ChatManager({
    instanceLocator,
    userId: 'gambit-admin',
    tokenProvider: new TokenProvider({
      url: tokenUrl
    })
  });

  chatManager.connect()
    .then(currentUser => {
      currentUser.subscribeToRoomMultipart({
        roomId: '19660160',
        messageLimit: 20,
        hooks: {
          onMessage: message => {
            store.dispatch(addMessage(message.senderId, message.parts[0].payload.content));
            //TODO. https://docs.pusher.com/chatkit/reference/javascript#messages
            //TODO. Есть разные типы, вначале проверить нужно
          }
        }
      })
    }); */



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
