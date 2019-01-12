import { baseUrl } from '../../../config';

export const getMovies = () => {
    return fetch(`${baseUrl}/movie`).then(response => response.json()).then(response => response.movies);
};
