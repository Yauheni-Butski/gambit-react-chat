import React, { Component } from 'react';
import { connect } from 'react-redux'

import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import { tokenUrl, instanceLocator } from '../constants/ChatKitConfig';
import { updateCurrentUser, fetchRoomList } from '../actions/index';

import RoomList from "../containers/RoomList";
import MessageList from "../containers/MessageList";
import SendMessageForm from "../containers/SendMessageForm";
import NewRoomForm from "../containers/NewRoomForm";

class Chat extends Component {

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
      this.props.updateCurrentUser(currentUser);
      this.props.getRoomList();
    })
    .catch(err => console.log('error on connecting: ', err));
  }

  componentWillUnmount() {
    let currentUser = this.props.currentUser;
    if (currentUser){
      currentUser.disconnect();
    }
  }

  render() {
    return (
      <div className="app">
        <RoomList />
        <MessageList />
        <SendMessageForm />
        <NewRoomForm />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUserState
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
