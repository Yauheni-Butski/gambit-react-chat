import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import LogoutComponent from '../components/Logout';

class Logout extends Component {

    constructor(props){
        super(props);
        this.state = {
            redirectToLogin: false
        };
        this.logout = this.logout.bind(this);
    }

    logout(){
        this.setState({
            redirectToLogin: true
        })
    }

    render(){
        if (this.state.redirectToLogin === true){
            return <Redirect to='/' />
        }

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

export default connect(mapStateToProps)(Logout)