import React from 'react';
import './index.css';

function Field({
    label,
    ...passThroughProps
}) {
    return <input {...passThroughProps} placeholder={label} className="field" />;
}

export default Field;