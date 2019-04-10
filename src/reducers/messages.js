import * as types from '../constants/ActionTypes';

const messagesReducer = (state = [], action) => {
    switch (action.type) {
        case types.CLEAR_MESSAGES:
            return state = [];
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