import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import { authorizeUser } from '../services/login';
import actions from '../actions';
import LoginFormComponent from '../components/LoginForm';

class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            redirectToChat: false,
            message: ''
        };
        this.loginToChat = this.loginToChat.bind(this);
    }

    componentDidMount() {
        if (this.props.loginUserName){
            this.setState({
                redirectToChat: true
            });
        }
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
    loginUserName: state.loginState.userName
});

const mapDispatchToProps = dispatch => ({
    saveUserName: userName => {
      dispatch(actions.login.loginUserName(userName))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)