import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { tokenUrl, apiUrl } from '../constants/ChatKitConfig';
import { loginUserName } from '../actions/index';

import LoginFormComponent from '../components/LoginForm/LoginForm';

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
        //TODO. Вынести в другое место
        fetch(tokenUrl, {
            method: 'POST',
            body: JSON.stringify({
                "grant_type": "client_credentials",
                "su": true,
                "user_id": 'gambit-admin' //super-user id for getting token. limitation of test server
            })
        })
        .then(result => result.json())
        .then(result => {

            fetch(apiUrl + '/users?limit=100' , {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + result.access_token
                }
            })
            .then(res => res.json())
            .then(res => {
                var searchedUser = res.filter(el => el.id === userName);
                if(searchedUser.length === 0){
                    this.setState({
                        message: "This username doesn't exist"
                    })
                }
                else{
                    this.props.saveUserName(searchedUser[0].id);
                    this.setState({
                        redirectToChat: true
                    });
                }
            })
            .catch(error => { console.log(error); })
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