import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './LoginForm.module.css';

class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleUserNameClick = this.handleUserNameClick.bind(this);
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

    handleUserNameClick(e){
        this.setState({
            username: e.target.textContent
        });
    }

    render(){
        return (
            <div className={styles.loginFormWrapper}>
                <form 
                    onSubmit={this.handleSubmit}
                    className={styles.loginForm}>
                    <div 
                        className={styles.errorMessage}
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

                    <div className={styles.testTips}>
                        <span className={styles.tipText}>For test purpose use one of these users (you can just click on userName):</span>
                        <ul>
                            <li onClick={this.handleUserNameClick}>gambit-admin</li>
                            <li onClick={this.handleUserNameClick}>test-user-1</li>
                            <li onClick={this.handleUserNameClick}>harrison-jhones</li>
                            <li onClick={this.handleUserNameClick}>r2d2</li>
                            <li onClick={this.handleUserNameClick}>dumb-john</li>
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