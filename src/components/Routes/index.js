import { Route } from 'react-router-dom';
import Login from '../../scenes/Login';
import Movies from '../../scenes/Movies';
import MovieDetail from '../../scenes/MovieDetail';
import Header from '../Header';
import React from 'react';

function Routes({ onLogIn }) {
    const LoginWithProps = () => <Login onLogIn={onLogIn} />;

    return (
        <div>
            <Route exact path="/" component={LoginWithProps} />
            <Route path="/movies" component={Movies} />
            <Route path="/movie/:id" component={MovieDetail} />
        </div>
    );
}

export default Routes;