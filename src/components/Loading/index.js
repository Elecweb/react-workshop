import React from 'react';
import loadingIcon from './loading.svg';
import './index.css';

function Loading() {
    return <div className="loading"><img src={loadingIcon} /></div>;
}

export default Loading;