import React from 'react';
import './index.css';

function Error({ isValid, isShow }) {
    if (isValid || !isShow) {
        return null;
    } else {
        return <p className="error">Username is required</p>;
    }
}

export default Error;