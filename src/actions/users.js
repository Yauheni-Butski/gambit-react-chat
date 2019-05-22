import { /* createActions, */ createAction } from 'redux-actions';

/* const { fetchUserList, userOnlineStateChanged, updateCurrentUser } = createActions(
    {
        FETCH_USER_LIST: (roomUsers) => ({ roomUsers }),
        USER_ONL_ST_CHANGED: (state, user, roomId) => ({
            state,
            user,
            roomId
        }),
        UPD_CURR_USER: (currentUser) => ({ currentUser })
    }
); */

//===============================================
const fetchUserList = createAction('FETCH_USER_LIST', (roomUsers) => ({ roomUsers }));
const userOnlineStateChanged = createAction('USER_ONL_ST_CHANGED', (state, user, roomId) => ({
    state,
    user,
    roomId
}))
const updateCurrentUser = createAction('UPD_CURR_USER', (currentUser) => ({currentUser}));

//================================================
const userActions = {
    fetchUserList,
    userOnlineStateChanged,
    updateCurrentUser
};

export default userActions;

