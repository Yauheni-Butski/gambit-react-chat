import { handleActions } from 'redux-actions';
import actions from '../actions';

function getPersistState(){
    var userName = JSON.parse(localStorage.getItem("userName")) || '';
    return {
        userName
    };
}

const loginReducer = handleActions(
    {
        [actions.login.loginUserName]: (state, action) => {
            localStorage.setItem("userName", JSON.stringify(action.payload.userName));
            return Object.assign({}, state, { userName: action.payload.userName });
        },

        [actions.login.userLogout]: state => {
            localStorage.setItem("userName", JSON.stringify(''));
            return Object.assign({}, state, { userName: '' });
        }
    },
    getPersistState()
);

export default loginReducer;