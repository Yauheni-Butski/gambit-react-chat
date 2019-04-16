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
        });
    }

    render(){
        return (
            <div className="login-form-wrapper">
                <form 
                    onSubmit={this.handleSubmit}
                    className="login-form">
                    <div 
                        className="error-message"
                        title={this.props.message}>
                    {this.props.message}
                    </div>
                    <input 
                        required
                        onChange={this.handleChange}
                        value={this.state.username}
                        type="text"
                        placeholder="Enter you username" />
                    <button type="submit">Login</button>

                    <div className="test-tips">
                        <span className="tip-text">For test purpose use one of these users:</span>
                        <ul>
                            <li>gambit-admin</li>
                            <li>test-user-1</li>
                            <li>harrison-jhones</li>
                            <li>r2d2</li>
                            <li>dumb-john</li>
                        </ul>
                    </div>
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