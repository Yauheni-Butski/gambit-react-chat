import * as types from '../constants/ActionTypes';

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

