import * as types from '../constants/ActionTypes';

//saga
const fetchUserList = (roomUsers) => ({
    type: types.FETCH_USER_LIST,
    roomUsers
});
//saga
const userOnlineStateChanged = (state, user, roomId) => ({
    type: types.USER_ONL_ST_CHANGED,
    state,
    user,
    roomId
});
const updateCurrentUser = currentUser => ({
    type: types.UPD_CURR_USER,
    currentUser
});

const userActions = {
    fetchUserList,
    userOnlineStateChanged,
    updateCurrentUser
};

export default userActions;

