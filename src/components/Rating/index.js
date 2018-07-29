import React from 'react';
import './index.css';

function Rating({ rate }) {
    return (
        <div className="rating">
            <span className="point">{rate} </span>
            <span>/ 10</span>
        </div>
    );
}

export default Rating;