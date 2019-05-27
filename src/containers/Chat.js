import React, { Component } from 'react';
import { connect } from 'react-redux'
import { push } from 'connected-react-router';

import actions from '../actions';
import ChatComponent from "../components/Chat";

class Chat extends Component {

  componentDidMount() {
    if (this.props.loginUserName){
      this.props.connectToChatServer(this.props.loginUserName, this.props.currentRoomId);
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
  connectToChatServer: (userName, currentRoomId) => {
    dispatch(actions.chatServer.connectToChatServer(userName, currentRoomId));
  },
  clearState: () => {
    dispatch(actions.login.userLogout());
  },
  goToRoute: url => {
    dispatch(push(url));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);