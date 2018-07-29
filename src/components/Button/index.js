import React from 'react';
import './index.css';

function Button({
    primary,
    ...passThroughProps
}) {
    const className = primary ? 'button--primary' : '';
    return <button {...passThroughProps} className={`button ${className}`} />;
}

export default Button;