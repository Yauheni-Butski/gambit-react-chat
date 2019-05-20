/* import * as types from '../constants/ActionTypes'; */
import { handleActions, combineActions } from 'redux-actions';
import actions from '../actions';

/* const messagesReducer = (state = [], action) => {
    switch (action.type) {
        case types.CLEAR_MESSAGES:
            return state = [];
        case types.MESSAGE_RECEIVED:
            return state.concat([
                {
                    senderId: action.payload.senderId,
                    text: action.payload.text
                }
            ]);
        case types.USER_LOGOUT:
            return state = [];
        default:
            return state;
    }
}; */

const messagesReducer = handleActions(
    {
        [actions.messages.messageReceived]: (state, action) => (state.concat([
            {
                senderId: action.payload.senderId,
                text: action.payload.text
            }
        ])),

        [combineActions(actions.messages.clearMessages, actions.login.userLogout)]: () => []
    },
    []
);

export default messagesReducer;