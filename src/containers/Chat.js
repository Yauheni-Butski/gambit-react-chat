import React, { Component } from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router';

import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { tokenUrl, instanceLocator } from '../constants/ChatKitConfig';
import actions from '../actions';

import ChatComponent from "../components/Chat";

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
    else{
      this.props.goToRoute('/');
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
    const active = this.props.currentRoomId !== undefined;
    return (
      <ChatComponent 
          isActive={active}/>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUserState,
  currentRoomId: state.currentRoomState.roomId,
  loginUserName: state.loginState.userName
});

const mapDispatchToProps = dispatch => ({
  updateCurrentUser: user => {
    dispatch(actions.users.updateCurrentUser(user));
  },
  getRoomList: () => {
    dispatch(actions.rooms.fetchRoomList());
  },
  clearState: () => {
    dispatch(actions.login.userLogout());
  },
  enterToRoom: roomId => {
    dispatch(actions.rooms.enterToRoom(roomId));
  },
  goToRoute: url => {
    dispatch(push(url));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
