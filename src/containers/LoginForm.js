import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { authorizeUser } from '../services/login';
import actions from '../actions';
import LoginFormComponent from '../components/LoginForm';

class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            message: ''
        };
        this.loginToChat = this.loginToChat.bind(this);
    }

    componentDidMount() {
        if (this.props.loginUserName){
            this.props.goToRoute('/chat');
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
                this.props.goToRoute('/chat');
            }
        })
        .catch(error => { console.log(error); })
    }

    render(){
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
        dispatch(actions.login.loginUserName(userName));
    },
    goToRoute: url => {
        dispatch(push(url));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)