import React, { Component } from 'react';
import PropTypes from 'prop-types';

//TODO. Make class component
/* const AddMessage = (props) => {
    let input

    const onKeyPress = event => {
        if (event.key === 'Enter') {
            props.sendMessage(input.value, 'Me');
            input.value = '';
        }
    }

    return (
        <section id="new-message">
            <input
            onKeyPress={onKeyPress}
            type="text"
            ref={(node) => {
                input = node;
            }} 
            />
        </section>
    )
} */


/* TODO. 1. this.props.sendMessage - сократить, просто использовать sendMessage в разметке */
class SendMessageForm extends Component {
    render() {
        return (
            <form className="send-message-form">
                <input
                    placeholder="SendMessageForm"
                    type="text" />
            </form>
        )
    }
}



SendMessageForm.propTypes = {
    sendMessage: PropTypes.func.isRequired
}

export default SendMessageForm