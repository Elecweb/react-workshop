import React from 'react';
import LoginContainer from './containers/Login';

function Login({ onLogIn }) {
    return <LoginContainer onLogIn={onLogIn} />;
}

export default Login;