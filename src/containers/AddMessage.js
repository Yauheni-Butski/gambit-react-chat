import { connect } from 'react-redux'
import AddMessageComponent from '../components/AddMessage'
import { addMessage } from '../actions'

const mapDispatchToProps = dispatch => ({
    sendMessage: (message, author) => {
        dispatch(addMessage(message, author));
    }
});

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)