import { connect } from 'react-redux'
import SidebarComponent from '../components/Sidebar'

const mapStateToProps = state => ({
    users: state.usersState
});

export const Sidebar = connect(mapStateToProps)(SidebarComponent)