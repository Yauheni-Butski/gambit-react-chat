import * as types from '../constants/ActionTypes';
/* import { createActions } from 'redux-actions';

const { fetchUserList, userOnlineStateChanged, updateCurrentUser } = createActions(
    {
        FETCH_USER_LIST: (roomUsers) => ({ roomUsers }),
        USER_ONL_ST_CHANGED: (state, user, roomId) => ({
            state,
            user,
            roomId
        }),
        UPD_CURR_USER: (currentUser) => ({ currentUser: currentUser }) //TODO. ВРеменно
    }
); */

//saga
const fetchUserList = (roomUsers) => ({
    type: types.FETCH_USER_LIST,
    payload: {
        roomUsers
    }
});
//saga
const userOnlineStateChanged = (state, user, roomId) => ({
    type: types.USER_ONL_ST_CHANGED,
    payload: {
        state,
        user,
        roomId
    }
});
const updateCurrentUser = currentUser => ({
    type: types.UPD_CURR_USER,
    payload: {
        currentUser
    }
});

const userActions = {
    fetchUserList,
    userOnlineStateChanged,
    updateCurrentUser
};

export default userActions;

