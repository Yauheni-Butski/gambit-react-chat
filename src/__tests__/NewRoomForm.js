import React from 'react';
import { mount } from 'enzyme';
import NewRoomForm from '../components/NewRoomForm';

describe('Component: NewRoomForm', () => {
    let minProps, wrapper;

    beforeEach(() => {
        minProps = {
            addNewRoom: jest.fn()
        },
        wrapper = mount(<NewRoomForm addNewRoom={minProps.addNewRoom}/>)
    });

    it('renders without crashing', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('dont call addNewRoom function by submit if roomName field is empty', () => {
        wrapper.setState({newRoomName: ""});
        wrapper.find('form').simulate('submit');
        expect(minProps.addNewRoom).toHaveBeenCalledTimes(0);
    });

    it('call addNewRoom function by submit if roomName field is not empty', () => {
        wrapper.setState({newRoomName: "someNewRoomName"});
        wrapper.find('form').simulate('submit');
        expect(minProps.addNewRoom).toHaveBeenCalled();
    });
});