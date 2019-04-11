import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewRoomFormComponent from '../components/NewRoomForm';
import { updateCurrentRoom, updateRoomList, clearMessages, messageReceived } from '../actions/index';

class NewRoomForm extends Component{

    constructor(){
        super();
        this.sendNewRoomToServer = this.sendNewRoomToServer.bind(this);
    }

    sendNewRoomToServer(roomName){
        let currentUser = this.props.currentUser;

        currentUser.createRoom({
            name: roomName
        })
        .then(room => {
            /* TODO. Одно и тоже действие в NewRoomForm и RoomList. Как можно улучшить? */
            this.props.clearMessages();

            currentUser.subscribeToRoomMultipart({
              roomId: room.id,
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
        })
        .catch(err => console.log('error with createRoom'));
    }

    render(){
        return (
            <NewRoomFormComponent 
                addNewRoom={this.sendNewRoomToServer}/>
        )
    }
}

const mapStateToProps = state => ({
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

export default connect(mapStateToProps, mapDispatchToProps)(NewRoomForm)