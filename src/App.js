import React, { Component } from 'react';
import './App.css';

import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { tokenUrl, instanceLocator } from './config';
import { messageReceived, updateCurrentUser } from './actions/index';

import { RoomList } from "./containers/RoomList";
import { MessagesList } from "./containers/MessagesList";
import SendMessageForm from "./containers/SendMessageForm";
import { NewRoomForm } from "./containers/NewRoomForm";

import store from './store/store';

//TODO. 1. Упрощаем App.js, всё спускаем ниже в новый Chat.js, в котором будет подключение к ChatManager.
//В App только store, provider и другая настройка
class App extends Component {

  //TODO. 2. Отписываемся на WillUnMount от ChatManager
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
        store.dispatch(updateCurrentUser(currentUser));

        currentUser.subscribeToRoomMultipart({
          roomId: '19660160',
          messageLimit: 20,
          hooks: {
            onMessage: message => {
              message.parts.forEach(messagePart => {
                //TODO. 3. Всё передаём в Reducer или в State. View логика уже должна будет сама решать как что отрисовывать
                //TODO. Обрабатывать 3 типа сообщения
                //TODO. https://docs.pusher.com/chatkit/reference/javascript#messages
                let text = '';
                switch(messagePart.partType){
                  case "url":
                    text = messagePart.payload.url;
                    break;
                  case "attachment":
                    // temporary send only name
                    text = messagePart.payload.name;
                    break;
                  case "inline":
                  default:
                    text = messagePart.payload.content;
                    break;
                }

                store.dispatch(messageReceived(message.senderId, text));
              });
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
