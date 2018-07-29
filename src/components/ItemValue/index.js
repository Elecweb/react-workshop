import React from 'react';
import './index.css';

function ItemValue({ label, value }) {
    return (
        <div className="item-value">
            <p className="key">{label}</p>
            <p className="value">{value}</p>
        </div>
    );
}

export default ItemValue;