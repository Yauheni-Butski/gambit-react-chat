import * as types from '../constants/ActionTypes';

/* const DUMMY_DATA = [
    {
        senderId: 'perborgen',
        text: 'Hey, how is it going?'
    },
    {
        senderId: 'janedoe',
        text: 'Great! How about you?'
    },
    {
        senderId: 'perborgen',
        text: 'Good to hear! I am great as well'
    }
] */

const messagesReducer = (state = [], action) => {
    switch (action.type) {
        case types.ADD_MESSAGE:
        case types.MESSAGE_RECEIVED:
            return state.concat([
                {
                    senderId: action.senderId,
                    text: action.text
                }
            ]);
        default:
            return state;
    }
};

export default messagesReducer;