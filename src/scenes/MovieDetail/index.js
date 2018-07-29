import React from 'react';
import MovieDetailContainer from './containers/MovieDetail';

function MovieDetail({ match }) {
    return <MovieDetailContainer id={match.params.id} />;
}

export default MovieDetail;