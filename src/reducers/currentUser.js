import * as types from '../constants/ActionTypes';

const currentUserReducer = (state = {}, action) => {
    switch (action.type) {
        case types.UPD_CURR_USER:
            //as I need to store the whole object once and will not update their property, I set directly
            return state = action.currentUser;
        default:
            return state;
    }
};

export default currentUserReducer;