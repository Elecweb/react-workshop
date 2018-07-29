import { parseToMovie } from '../../MovieDetail/parsers/movie';

export const parseToMovies = sources => sources.map(parseToMovie);