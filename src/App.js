import React, { Component } from 'react';
import './App.css';

import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { tokenUrl, instanceLocator } from './config';
import { addMessage } from './actions/index';

import { RoomList } from "./containers/RoomList";
import { MessagesList } from "./containers/MessagesList";
import { SendMessageForm } from "./containers/SendMessageForm";
import { NewRoomForm } from "./containers/NewRoomForm";

import store from './store/store';

class App extends Component {

  componentDidMount() {
    const chatManager = new ChatManager({
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
      });
  }

  render() {
    return (
      <div className="app">
        <RoomList />
        <MessagesList />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}


export default App;
