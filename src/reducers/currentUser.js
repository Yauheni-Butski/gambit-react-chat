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

export default currentUserReducer;