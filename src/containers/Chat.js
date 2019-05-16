import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";

import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { tokenUrl, instanceLocator } from '../constants/ChatKitConfig';
import actions from '../actions';

import RoomList from "../containers/RoomList";
import MessageList from "../containers/MessageList";
import SendMessageForm from "../containers/SendMessageForm";
import NewRoomForm from "../containers/NewRoomForm";
import UserList from "../containers/UserList";
import Logout from "../containers/Logout";

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
        if(!this.props.currentRoomId){
          this.props.getRoomList();
        }else{
          this.props.enterToRoom(this.props.currentRoomId);
        }
      })
      .catch(err => console.log('error on connecting: ', err));
    }
  }

  componentWillUnmount() {
    let currentUser = this.props.currentUser;
    if (currentUser.id){
      currentUser.disconnect();
    }

    //send one actions for all reducers for clearing own state
    this.props.clearState();
  }

  render() {

    if (!this.props.loginUserName){
      return <Redirect to={"/"} />
    }

    const active = this.props.currentRoomId !== undefined ? "active" : "";
    return (
      <div className={"app " + active}>
        <RoomList />
        <MessageList />
        <SendMessageForm />
        <NewRoomForm />
        <UserList />
        <Logout />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUserState,
  currentRoomId: state.currentRoomState.roomId,
  loginUserName: state.loginState.userName
});

const mapDispatchToProps = dispatch => ({
  updateCurrentUser: user => {
    dispatch(actions.users.updateCurrentUser(user))
  },
  getRoomList: () => {
    dispatch(actions.rooms.fetchRoomList());
  },
  clearState: () => {
    dispatch(actions.login.userLogout())
  },
  enterToRoom: roomId => {
    dispatch(actions.rooms.enterToRoom(roomId))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
