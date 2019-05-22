import { createActions } from 'redux-actions';

const { fetchUserList, userOnlineStateChanged, updateCurrentUser } = createActions(
    {
        FETCH_USER_LIST: (roomUsers) => ({ roomUsers }),
        USER_ONLINE_STATE_CHANGED: (state, user, roomId) => ({
            state,
            user,
            roomId
        }),
        UPDATE_CURRENT_USER: (currentUser) => ({ currentUser })
    }
);

const userActions = {
    fetchUserList,
    userOnlineStateChanged,
    updateCurrentUser
};

export default userActions;

