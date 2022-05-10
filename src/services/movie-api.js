import { apiKey } from 'global-variables/envConstants';

const movieBaseUrl = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = apiKey;

/**
 *  Fetch all movies from the base link provided.
 *
 * @param {number} page
 * @param {string} sort
 * @param {string} language
 * @param {boolean} includeAdult
 * @param {boolean} includeVideo
 *
 * @return {Promise<array>} Returns an array of movies.
 */
const getAllMovies = async (
  get,
  page = 1,
  sort = '',
  includeAdult = 'false',
  includeVideo = 'false',
  language = 'en-US'
) => {
  const data = await get(
    `${movieBaseUrl}?api_key=${API_KEY}${
      sort !== '' ? `&sort_by=${sort}` : ''
    }&language=${language}&include_adult=${includeAdult}&include_video=${includeVideo}&page=${page}`
  );
  console.log(data.results);
  return data.results;
};

export default getAllMovies;
