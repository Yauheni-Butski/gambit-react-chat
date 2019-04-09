import * as types from '../constants/ActionTypes';

const DUMMY_DATA = [
    {
        name: 'Dummy room 1'
    },
    {
        name: 'Dummy room 2'
    },
    {
        name: 'Dummy room 3'
    }
]

const roomsReducers = (state = DUMMY_DATA, action) => {
    switch (action.type) {
        case types.ADD_ROOM:
            return state.concat([{
                name: action.name
            }]);
        case types.ROOM_LIST:
            return action.rooms;
        default:
            return state;
    }
};

export default roomsReducers;