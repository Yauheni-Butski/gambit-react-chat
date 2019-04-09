import { connect } from 'react-redux'
import SendMessageFormComponent from '../components/SendMessageForm'
import { addMessage } from '../actions'

/* TODO. 1. Переименовать addMessage -> sendMessage */
/* TODO. 2. Структуру метода sendMessage изменить */

const mapDispatchToProps = dispatch => ({
    sendMessage: (message, author) => {
        dispatch(addMessage(message, author));
    }
});

export const SendMessageForm = connect(() => ({}), mapDispatchToProps)(SendMessageFormComponent)