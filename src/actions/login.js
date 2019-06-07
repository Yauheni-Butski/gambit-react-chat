import { createActions } from 'redux-actions';

export default createActions(
    {
        LOGIN_USER_NAME: (userName) => ({ userName }),
        AUTHORIZE_USER: (userName) => ({ userName }),
        USERNAME_NOT_EXIST: (message) => ({ message }),
        USER_LOGOUT: undefined //payload creator is the identity. (I think this style is better then passing 'USER_LOGOUT' as the second parameter in 'createActions')
    }
);