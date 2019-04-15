import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './LoginForm.css';

class LoginForm extends Component {

    constructor(){
        super()
        this.state = {
            username: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        var userName = this.state.username.trim();
        this.setState({
            username : userName
        })
        if (userName !== ""){
            this.props.login(userName);
        }
    }

    handleChange(e){
        this.setState({
            username: e.target.value
        })
    }

    render(){
        return (
            <div className="login-form-wrapper">
                <form 
                    onSubmit={this.handleSubmit}
                    className="login-form">
                    {/*TODO. Показывать сообщение об ошибке */}
                    <input 
                        required
                        onChange={this.handleChange}
                        value={this.state.username}
                        type="text"
                        placeholder="Enter you username" />
                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired,
    message: PropTypes.string
}

export default LoginForm;