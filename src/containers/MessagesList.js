import { connect } from 'react-redux'
import MessagesListComponent from '../components/MessagesList'

const mapStateToProps = state => ({
    messages: state.messagesState
});

export const MessagesList = connect(mapStateToProps)(MessagesListComponent)