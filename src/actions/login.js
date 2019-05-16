import * as types from '../constants/ActionTypes';

const loginUserName = (userName) => ({
    type: types.LOGIN_USER_NAME,
    payload: {
        userName
    }
});
const userLogout = () => ({
    type: types.USER_LOGOUT
});

const loginActions = {
    loginUserName,
    userLogout
};

export default loginActions;