import React from 'react';
import './index.css';

function Header({ userName }){
    const user = userName ? <span>Hi, {userName}</span> : null;
    return (
        <div className="header--wrapper">
            <p>Top 10 IMDB movies</p>
            {user}
        </div>
    );
}

export default Header;