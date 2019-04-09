import { connect } from 'react-redux'
import RoomListComponent from '../components/RoomList'

const mapStateToProps = state => ({
    rooms: state.roomsState
});

export const RoomList = connect(mapStateToProps)(RoomListComponent)