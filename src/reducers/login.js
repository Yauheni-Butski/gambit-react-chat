import { handleActions } from 'redux-actions';
import actions from '../actions';

function getPersistState(){
    var userName = JSON.parse(localStorage.getItem("userName")) || '';
    return {
        userName,
        message: ''
    };
}

const loginReducer = handleActions(
    {
        [actions.login.loginUserName]: (state, action) => {
            localStorage.setItem("userName", JSON.stringify(action.payload.userName));
            return Object.assign({}, state, { userName: action.payload.userName, message: '' });
        },

        [actions.login.userLogout]: state => {
            localStorage.setItem("userName", JSON.stringify(''));
            return Object.assign({}, state, { userName: '' });
        },

        [actions.login.usernameNotExist]: (state, action) => {
            return Object.assign({}, state, { message: action.payload.message });
        }
    },
    getPersistState()
);

export default loginReducer;