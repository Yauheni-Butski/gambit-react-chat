import { connect } from 'react-redux'
import NewRoomFormComponent from '../components/NewRoomForm'
/* import { addRoom } from '../actions' */

const mapDispatchToProps = dispatch => ({
    addNewRoom: (name) => {
       /*  dispatch(addRoom(name)); */
    }
});

export const NewRoomForm = connect(() => ({}), mapDispatchToProps)(NewRoomFormComponent)