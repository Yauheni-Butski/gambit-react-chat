import React from 'react';
import { shallow } from 'enzyme';
import RoomList from '../components/RoomList';

import styles from '../components/RoomList/RoomList.module.css';

describe('Component: RoomList', () => {
    let minProps, wrapper;

    beforeEach(() => {
        minProps = {
            rooms: {
                joinableRooms: [{
                    id: "1",
                    name: "Room 1"
                }],
                joinedRooms: [{
                    id: "2",
                    name: "Room 2"
                }]
            },
            currentRoomId: "1",
            subscribeToRoom: jest.fn()
        },
        wrapper = shallow(<RoomList rooms={minProps.rooms} subscribeToRoom={minProps.subscribeToRoom}/>)

    });

    it('renders without crashing', () => {
        expect(wrapper.length).toEqual(1);
    });

    it('render passed count of rooms', () => {
        let passedRoomsCount = minProps.rooms.joinableRooms.length + minProps.rooms.joinedRooms.length;
        expect(wrapper.find('ul li').length).toEqual(passedRoomsCount);
    });

    it('call subscribeToRoom by clicking to room name', () => {
        let firstRoomEl = wrapper.find('ul li').at(0);
        firstRoomEl.find('button').simulate('click');

        expect(minProps.subscribeToRoom).toHaveBeenCalled();
    });

    it('room with id equal currentRoomId is renders with special css class', () => {
        wrapper.setProps({currentRoomId: minProps.currentRoomId});
        let firstRoomEl = wrapper.find('ul li').at(0);
        
        expect(firstRoomEl.hasClass(styles.active)).toEqual(true);
    });

    it('room with id not equal currentRoomId is renders without special css class', () => {
        wrapper.setProps({currentRoomId: minProps.currentRoomId});
        let firstRoomEl = wrapper.find('ul li').at(1);
        
        expect(firstRoomEl.hasClass(styles.active)).toEqual(false);
    });
});