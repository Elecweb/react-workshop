import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';
import Loading from '../../../components/Loading';
import { getMovie } from '../service/movie';
import { parseToMovie } from '../parsers/movie';

class MovieDetailContainer extends Component {
    state = {
        movie: {},
        isModalOpen: false,
        loading: true
    };

    componentDidMount() {
        const { id } = this.props;
        getMovie(id).then(movie => {
            this.setState({
                movie: parseToMovie(movie)
            });
        }).finally(() => {
            this.setState({
                loading: false
            });
        });
    }

    onBackClick = () => {
        const { history } = this.props;
        history.push('/movies');
    };

    onModalOpen = () => {
        this.setState({
            isModalOpen: true
        });
    };

    onModalClose = () => {
        this.setState({
            isModalOpen: false
        });
    };

    render() {
        const { movie, isModalOpen, loading } = this.state;
        const movieDetailProps = {
            ...movie,
            onBackClick: this.onBackClick,
            onModalOpen: this.onModalOpen,
            onModalClose: this.onModalClose,
            isModalOpen: isModalOpen
        };
        if (loading) {
            return <Loading />;
        } else {
            return <MovieDetail {...movieDetailProps} />;
        }
    }
}

export default withRouter(MovieDetailContainer);