import React from 'react';
import PropTypes from 'prop-types';

const AddMessage = (props) => {
    let input

    const onKeyPress = event => {
        if (event.key === 'Enter') {
            props.dispatch(input.value, 'Me');
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
}

AddMessage.propTypes = {
    dispatch: PropTypes.func.isRequired
}

export default AddMessage