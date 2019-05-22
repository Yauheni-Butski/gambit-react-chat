/* import * as types from '../constants/ActionTypes'; */
import { handleActions } from 'redux-actions';
import actions from '../actions';

const currentUserReducer = handleActions(
    {
        [actions.users.updateCurrentUser]: (state, action) => {
            return state = action.payload.currentUser;
        },

        [actions.login.userLogout]: () => ({})
    },
    {}
);

/* const currentUserReducer = (state = {}, action) => {
    switch (action.type) {
        case types.UPD_CURR_USER:
            //as I need to store the whole object once and will not update their property, I set directly
            return state = action.payload.currentUser;
        case types.USER_LOGOUT:
            return state = {};
        default:
            return state;
    }
}; */

export default currentUserReducer;