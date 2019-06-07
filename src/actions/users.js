import { createActions } from 'redux-actions';

export default createActions(
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