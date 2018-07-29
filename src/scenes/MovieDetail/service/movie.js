import { baseUrl } from '../../../config';

export const getMovie = id => {
    return fetch(`${baseUrl}/movies/${id}`).then(response => response.json()).then(response => response.movie);
};