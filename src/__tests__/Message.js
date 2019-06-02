import React from 'react';
import { shallow } from 'enzyme';
import Message from '../components/Message';
import styles from '../components/Message/Message.module.css';

describe('Component: Message', () => {
    let minProps, wrapper;

    beforeEach(() => {
        minProps = {
            ownMessage: {
                username: "Username 1",
                text: "This is my own message",
                isOwnMessage: true
            },
            notOwnMessage: {
                username: "Username 2",
                text: "This is not my message",
                isOwnMessage: false
            }
        },
        wrapper = shallow(<Message 
            username={minProps.ownMessage.username}
            text={minProps.ownMessage.text}
            isOwnMessage={minProps.ownMessage.isOwnMessage}/>)
    });

    it('renders without crashing', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('own message renders with special css class', () => {
        wrapper.setProps(minProps.ownMessage);
        expect(wrapper.hasClass(styles.own)).toEqual(true);
    });

    it('not own message renders without special css class', () => {
        wrapper.setProps(minProps.notOwnMessage);
        expect(wrapper.hasClass(styles.own)).toEqual(false);
    });
});