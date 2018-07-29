import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Movies from '../components/Movies';
import Loading from '../../../components/Loading';
import { getMovies } from '../service/movies';
import { parseToMovies } from '../parsers/movies';

class MoviesContainer extends Component {
    state = {
        movies: [],
        loading: true
    };
    
    onMovieClick = id => {
        const { history } = this.props;
        history.push(`/movie/${id}`);
    };

    componentDidMount() {
        getMovies().then(movies => {
            this.setState({
                movies: parseToMovies(movies)
            });
        })
        .finally(() => {
            this.setState({
                loading: false
            })
        });
    }

    render() {
        const { movies, loading } = this.state;
        if (loading) {
            return <Loading />;
        } else {
            return <Movies movies={movies} onMovieClick={this.onMovieClick} />;
        }
    }
}

export default withRouter(MoviesContainer);