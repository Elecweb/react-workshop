export const parseToMovie = source => ({
    name: source.name,
    image: source.image,
    rating: source.rated,
    released: source.released,
    id: source.id,
    detail: source.description,
    director: source.director,
    stars: source.stars && source.stars.join(','),
    reviewer: source.reviewers + ' users'
});