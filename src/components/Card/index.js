import React from 'react';
import Paper from '../Paper';
import Rating from '../Rating';
import './index.css';

function Card({ title, subTitle, image, rate, onClick, id }) {
    return (
        <div className="card" onClick={() => onClick(id)}>
            <Paper type="card">
                <h3 className="card--header">{title}</h3>
                <p className="card--sub-title">{subTitle}</p>
                <div className="card--image-wrapper">
                    <img src={image} className="card--image" />
                </div>
                <div className="card--rating-wrapper">
                    <Rating rate={rate} />
                </div>
            </Paper>
        </div>
    );
}

export default Card;