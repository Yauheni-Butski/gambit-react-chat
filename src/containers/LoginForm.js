import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import actions from '../actions';
import LoginFormComponent from '../components/LoginForm';

class LoginForm extends Component {

    constructor(props){
        super(props);
        this.loginToChat = this.loginToChat.bind(this);
    }

    componentDidMount() {
        if (this.props.loginUserName){
            this.props.goToRoute('/chat');
        }
    }

    loginToChat(userName){
        this.props.authorizeUser(userName);
    }

    render(){
        return(
            <LoginFormComponent
                login={this.loginToChat}
                message={this.props.loginMessage}/>
        );
    }
}

const mapStateToProps = state => ({
    loginUserName: state.loginState.userName,
    loginMessage: state.loginState.message
});

const mapDispatchToProps = dispatch => ({
    authorizeUser: userName => {
        dispatch(actions.login.authorizeUser(userName));
    },
    goToRoute: url => {
        dispatch(push(url));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)