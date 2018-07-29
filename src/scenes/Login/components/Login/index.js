import React from 'react';
import './index.css';
import Paper from '../../../../components/Paper';
import Button from '../../../../components/Button';
import Field from '../../../../components/Field';
import Error from '../../../../components/Error';

function Login({
    userName,
    onUserNameChange,
    isValid,
    hasSubmitted,
    onSubmit,
}) {
    return (
        <div className="login">
            <Paper type="login">
                <h1 className="login--header">Login</h1>
                <div className="login--field-wrapper">
                    <Field label="Username" value={userName} onChange={onUserNameChange} />
                </div>
                <div className="login--error-wrapper">
                    <Error isValid={isValid} isShow={hasSubmitted} />
                </div>
                <div className="login--button-wrapper">
                    <Button primary onClick={onSubmit}>Submit</Button>
                </div>
            </Paper>
        </div>
    );
}

export default Login;