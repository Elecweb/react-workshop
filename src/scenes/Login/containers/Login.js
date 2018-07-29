import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Login from '../components/Login';

class LoginContainer extends Component {
    state = {
        userName: null,
        isValid: false,
        hasSubmitted: false
    };

    onUserNameChange = ({ target: { value } }) => {
        this.setState({
            userName: value,
            isValid: !!value
        });
    };

    onSubmit = () => {
        const { isValid, userName } = this.state;
        const { history, onLogIn } = this.props;
        this.setState({
            hasSubmitted: true
        });
        if (isValid) {
            onLogIn(userName);
            history.push('/movies');
        }
    };

    render() {
        const { userName, isValid, hasSubmitted } = this.state;
        return (
            <Login
                userName={userName}
                onUserNameChange={this.onUserNameChange}
                isValid={isValid}
                onSubmit={this.onSubmit}
                hasSubmitted={hasSubmitted}
            />
        );
    }
}

export default withRouter(LoginContainer);