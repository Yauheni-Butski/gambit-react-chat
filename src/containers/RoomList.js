import React, { Component } from 'react';
import { connect } from 'react-redux'
import { messageReceived, clearMessages, updateRoomList, updateCurrentRoom } from '../actions/index';
import RoomListComponent from '../components/RoomList'

class RoomList extends Component{
    constructor(){
        super()
        this.subscribeToRoom = this.subscribeToRoom.bind(this);
    }

    subscribeToRoom(roomId){
        //clear messages state, for new room
        this.props.clearMessages();

        let currentUser = this.props.currentUser;
        currentUser.subscribeToRoomMultipart({
          roomId: roomId,
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

                this.props.onMessageReceived(message.senderId, text);
              });
            }
          }
        })
        .then(room => {
            this.props.updateCurrentRoom(room);

            //after we subscribe to room, our collections 'joinableRooms' and 'joinedRooms' will changed
            //one room from 'joinable' goes to 'joined'. So we should update our state
            currentUser.getJoinableRooms()
            .then(joinableRooms => {
              let joinedRooms = currentUser.rooms;
              this.props.populateRooms(joinableRooms, joinedRooms);
            })
            .catch(err => console.log('error on joinableRooms: ', err));
        })
        .catch(err => console.log('error on subscribing to room: ', err));
    }

    render(){
        return (
            <RoomListComponent 
                subscribeToRoom={this.subscribeToRoom}
                rooms={this.props.rooms}/>
        )
    }
}

const mapStateToProps = state => ({
    rooms: state.roomsState,
    currentUser: state.currentUserState
});

const mapDispatchToProps = dispatch => ({
    onMessageReceived: (senderId, text) => {
       dispatch(messageReceived(senderId, text));
    },
    clearMessages: () => {
        dispatch(clearMessages());
    },
    populateRooms: (joinableRooms, joinedRooms) => {
        dispatch(updateRoomList(joinableRooms, joinedRooms));
    },
    updateCurrentRoom: (currentRoom) => {
        dispatch(updateCurrentRoom(currentRoom));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomList)