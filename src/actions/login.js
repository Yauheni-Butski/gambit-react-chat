import { /* createActions, */ createAction } from 'redux-actions';

/* const { loginUserName, userLogout } = createActions(
    {
        LOGIN_USER_NAME: (userName) => ({ userName }),
        USER_LOGOUT: undefined //payload creator is the identity. (I think this style is better then passing 'USER_LOGOUT' as the second parameter in 'createActions')
    }
); */

const loginUserName = createAction('LOGIN_USER_NAME', (userName) => ({ userName }));
const userLogout = createAction('USER_LOGOUT');

const loginActions = {
    loginUserName,
    userLogout
};

export default loginActions;