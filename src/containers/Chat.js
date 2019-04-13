import React, { Component } from 'react';

import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { tokenUrl, instanceLocator } from '../config';
import { updateCurrentUser, updateRoomList } from '../actions/index';

import RoomList from "../containers/RoomList";
import MessagesList from "../containers/MessagesList";
import SendMessageForm from "../containers/SendMessageForm";
import NewRoomForm from "../containers/NewRoomForm";

import store from '../store/store';

//TODO. 1. Упрощаем App.js, всё спускаем ниже в новый Chat.js, в котором будет подключение к ChatManager.
//В App только store, provider и другая настройка
class Chat extends Component {

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

      //TODO. Move to method getRooms(). We call the same from here and RoomList
      //TODO. Этот кусок можно в Saga тоже вынести. Уже из Саги будет вызов updateRoomList
      currentUser.getJoinableRooms()
      .then(joinableRooms => {
        let joinedRooms = currentUser.rooms;
        store.dispatch(updateRoomList(joinableRooms, joinedRooms))
      })
      .catch(err => console.log('error on joinableRooms: ', err));
    })
    .catch(err => console.log('error on connecting: ', err));
  }

  //TODO. 2. Отписываемся на WillUnMount от ChatManager
  componentWillUnmount() {
    //disconect from ChatManager
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

export default Chat;
