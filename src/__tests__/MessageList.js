import React from 'react';
import { shallow } from 'enzyme';
import MessageList from '../components/MessageList';
import Message from '../components/Message';

describe('Component: MessageList', () => {
    let minProps, wrapper;

    beforeEach(() => {
        minProps = {
            messages: [{
                senderId: "1",
                text: "Some message text 1"
            },{
                senderId: "2",
                text: "Another message text 2"
            }],
            currentRoomId: "1",
            currentUserId: "1"
        },
        wrapper = shallow(<MessageList messages={minProps.messages}/>)
    });

    it('renders without crashing', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('dont render Messages if current room id not specified', () => {
        wrapper.setProps({
            currentRoomId: undefined
        });
        expect(wrapper.find(Message).length).toEqual(0);
    });

    it('render Messages if current room id specified', () => {
        wrapper.setProps({
            currentRoomId: minProps.currentRoomId
        });
        expect(wrapper.find(Message).length).toEqual(minProps.messages.length);
    });
});