import * as types from '../constants/ActionTypes';

const INITIAL_DATA = {
    userName: ''
};

const loginReducer = (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case types.LOGIN_USER_NAME:
            return Object.assign({}, state, { userName: action.userName });
        default:
            return state;
    }
};

export default loginReducer;