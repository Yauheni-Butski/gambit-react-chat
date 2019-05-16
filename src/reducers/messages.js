import * as types from '../constants/ActionTypes';

const messagesReducer = (state = [], action) => {
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
};

export default messagesReducer;