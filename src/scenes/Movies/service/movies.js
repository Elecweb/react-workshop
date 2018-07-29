import { baseUrl } from '../../../config';

export const getMovies = () => {
    return fetch(`${baseUrl}/movies`).then(response => response.json()).then(response => response.movies);
};