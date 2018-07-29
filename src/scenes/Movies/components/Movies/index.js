import React from 'react';
import Card from '../../../../components/Card';
import './index.css';

function Movies({ movies, onMovieClick }) {
    return (
        <div className="movies--wrapper">
            {
                movies.map(movie => {
                    const cardProps = {
                        title: movie.name,
                        subTitle: movie.released,
                        image: movie.image,
                        rate: movie.rating,
                        id: movie.id
                    };
                    return (
                        <div className="movies--item" key={cardProps.id}>
                            <Card {...cardProps} onClick={onMovieClick} />
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Movies;