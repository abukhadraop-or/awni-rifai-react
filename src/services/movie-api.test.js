import getAllMovies from 'services/movie-api';
import { apiKey } from 'global-variables/envConstants';

describe('movie-api', () => {
  let get = jest.fn().mockResolvedValue({ results: ['hi'] });
  beforeEach(() => {
    get = jest.fn().mockResolvedValue({ results: ['hi'] });
  });

  describe('#getAllMovies', () => {
    it('should call get with the correct url', async () => {
      await getAllMovies(get);
      expect(get).toBeCalledWith(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&include_adult=false&include_video=false&page=1`
      );
    });

    it('should add sort query when sort is provided', async () => {
      await getAllMovies(get, 1, 'asc');
      expect(get).toBeCalledWith(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=asc&language=en-US&include_adult=false&include_video=false&page=1`
      );
    });

    it('should return results', async () => {
      const results = await getAllMovies(get, 1, 'asc');

      expect(results).toStrictEqual(['hi']);
    });
  });
});
