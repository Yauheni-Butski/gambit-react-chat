import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import { authorizeUser } from '../services/login';
import { loginUserName } from '../actions';
import LoginFormComponent from '../components/LoginForm';

class LoginForm extends Component {

    constructor(){
        super();
        this.state = {
            redirectToChat: false,
            message: ''
        }
        this.loginToChat = this.loginToChat.bind(this);
    }

    loginToChat(userName){
        authorizeUser(userName)
        .then(user => {
            if(user === undefined){
                this.setState({
                    message: "This username doesn't exist"
                })
            }
            else{
                this.props.saveUserName(user.id);
                    this.setState({
                        redirectToChat: true
                    });
            }
        })
        .catch(error => { console.log(error); })
    }

    render(){
        if (this.state.redirectToChat === true){
            return <Redirect to='/chat' />
        }
        return(
            <LoginFormComponent
                login={this.loginToChat}
                message={this.state.message}/>
        );
    }
}

const mapStateToProps = state => ({
    currentUser: state.currentUserState,
    loginState: state.loginState
});

const mapDispatchToProps = dispatch => ({
    saveUserName: userName => {
      dispatch(loginUserName(userName))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)