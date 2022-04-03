import get from 'helperFunctions/http';
import { apiKey } from 'global-constants/envConstants';

const movieBaseUrl = 'https://api.themoviedb.org/3/discover/movie';
const API_KEY = apiKey;

/**
 *  Fetch all movies from the base link provided.
 * @param {number} page
 * @param {string} sort
 * @param {string} language
 * @param {boolean} includeAdult
 * @param {boolean} includeVideo
 * @return {Promise<array>} Returns an array of movies.
 */
const getAllMovies = async (
  page = 1,
  sort = '',
  language = 'en-US',
  includeAdult = 'false',
  includeVideo = 'false'
) => {
  const data = await get(
    `${movieBaseUrl}?api_key=${API_KEY}${sort!==""?`&sort_by=${sort}`:""}&language=${language}&include_adult=${includeAdult}&include_video=${includeVideo}&page=${page}`
  );

  return data.results;
};

export default getAllMovies;
