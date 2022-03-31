import get from 'http';

const movieBaseUrl = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = process.env.React_APP_API_KEY;

/**
 *  fetch all movies from the base link provided
 * @param {number} page
 * @param {string} sort
 * @param {string} language
 * @param {boolean} includeAdult
 * @param {boolean} includeVideo
 * @returns {Promise<array>} returns an array of movies
 */
const getAllMovies = async (
  page = 1,
  sort = '',
  language = 'en-US',
  includeAdult = 'false',
  includeVideo = 'false'
) => {
  const data = await get(
    `${movieBaseUrl}?api_key=${API_KEY}&sort_by=${sort}&language=${language}&include_adult=${includeAdult}&include_video=${includeVideo}&page=${page}`
  );

  return data.results;
};

export default getAllMovies;
