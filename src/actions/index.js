import roomActions from './rooms';
import userActions from './users';
import loginActions from './login';
import messageActions from './messages';

const actions = {
    rooms: roomActions,
    users: userActions,
    login: loginActions,
    messages: messageActions
}

export default actions;