import { handleActions, combineActions } from 'redux-actions';
import actions from '../actions';

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