import roomActions from './rooms';
import userActions from './users';
import loginActions from './login';
import messageActions from './messages';
import chatActions from './chat';

const actions = {
    rooms: roomActions,
    users: userActions,
    login: loginActions,
    messages: messageActions,
    chatServer: chatActions
}

export default actions;