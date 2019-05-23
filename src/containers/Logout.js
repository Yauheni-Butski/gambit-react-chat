import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import LogoutComponent from '../components/Logout';

class Logout extends Component {

    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        this.props.goToRoute('/');
    }

    render(){
        return(
            <LogoutComponent 
                logout={this.logout}/>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUserState,
    loginState: state.loginState
});
const mapDispatchToProps = dispatch => ({
    goToRoute: url => {
        dispatch(push(url));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout)