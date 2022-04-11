import getAllMovies from 'services/movie-api';
import get from 'utils/http';
import { apiKey } from 'global-variables/envConstants';

describe('movie-api', () => {
  beforeEach(() => {
    jest.mock('utils/http', () =>(
        jest.fn().mockResolvedValue({ results: ['hi'] })
    )); 
  })

  describe('#getAllMovies', () => {
    it('should call get with the correct url', async () => {
      await getAllMovies();
      
      expect(get).toBeCalledWith(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&include_adult=false&include_video=false&page=1`
      );
    });
  });
});
