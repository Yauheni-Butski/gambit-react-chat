import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { tokenUrl, instanceLocator } from '../constants/ChatKitConfig';
import { updateCurrentUser, fetchRoomList } from '../actions/index';

import RoomList from "../containers/RoomList";
import MessageList from "../containers/MessageList";
import SendMessageForm from "../containers/SendMessageForm";
import NewRoomForm from "../containers/NewRoomForm";
import UserList from '../containers/UserList';

class Chat extends Component {

  componentDidMount() {
    if (this.props.loginUserName){
      const chatManager = new ChatManager({
        instanceLocator,
        userId: this.props.loginUserName,
        tokenProvider: new TokenProvider({
          url: tokenUrl
        })
      });
  
      chatManager.connect()
      .then(currentUser => {
        this.props.updateCurrentUser(currentUser);
        this.props.getRoomList();
      })
      .catch(err => console.log('error on connecting: ', err));
    }
  }

  componentWillUnmount() {
    let currentUser = this.props.currentUser;
    if (currentUser.id){
      currentUser.disconnect();
    }
  }

  render() {

    const active = this.props.currentRoomId !== undefined ? "active" : "";
    if (!this.props.loginUserName){
      return <Redirect to={"/"} />
    }
    
    return (
      <div className={"app " + active}>
        <RoomList />
        <MessageList />
        <SendMessageForm />
        <NewRoomForm />
        <UserList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUserState,
  currentRoomId: state.currentRoomState.id,
  loginUserName: state.loginState.userName
});

const mapDispatchToProps = dispatch => ({
  updateCurrentUser: user => {
    dispatch(updateCurrentUser(user))
  },
  getRoomList: () => {
    dispatch(fetchRoomList());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
