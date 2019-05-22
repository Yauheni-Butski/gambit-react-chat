/* import * as types from '../constants/ActionTypes'; */
import { /* createActions,  */createAction } from 'redux-actions';

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

/* //saga
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
        currentUser: currentUser
    }
}); */

const userActions = {
    fetchUserList,
    userOnlineStateChanged,
    updateCurrentUser
};

export default userActions;

