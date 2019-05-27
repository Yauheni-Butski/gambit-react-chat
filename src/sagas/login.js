import { takeEvery, put, call } from 'redux-saga/effects';
import { authorizeUser } from '../services/login';
import { push } from 'connected-react-router';
import { eventChannel, END } from 'redux-saga';
import actions from '../actions';

function authorizeChannel(userName){
    return eventChannel(emit => {

        authorizeUser(userName)
        .then(user => {
            if(user === undefined){
                emit(actions.login.usernameNotExist("This username doesn't exist"));
            }
            else{
                emit(actions.login.loginUserName(userName));
                emit(push('/chat'));
            }
            emit(END);
        })
        .catch(error => { console.log(error); });

        const unsubscribe = () => {};
        return unsubscribe;
    });
}

function* authorize(action){
    const chan = yield call(authorizeChannel, action.payload.userName);
    yield takeEvery(chan, onChannelEmit);
}

function* onChannelEmit(action){
    yield put(action);
}

const loginSaga = function* () {
    yield takeEvery(actions.login.authorizeUser, authorize);
}

export default loginSaga;