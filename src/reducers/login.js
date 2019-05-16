import * as types from '../constants/ActionTypes';

function getPersistState(){
    var userName = JSON.parse(localStorage.getItem("userName")) || '';
    return {
        userName: userName
    };
}

const loginReducer = (state = getPersistState(), action) => {
    switch (action.type) {
        case types.LOGIN_USER_NAME:
            localStorage.setItem("userName", JSON.stringify(action.payload.userName));
            return Object.assign({}, state, { userName: action.payload.userName });
        case types.USER_LOGOUT:
            localStorage.setItem("userName", JSON.stringify(''));
            return state = Object.assign({}, state, { userName: '' });;
        default:
            return state;
    }
};

export default loginReducer;