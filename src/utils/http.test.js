import get from 'utils/http';

describe('http', () => {
  let jsonMock = jest.fn(() => ({ data: 'test-data' }));

  beforeEach(() => {
    jsonMock = jest.fn(() => ({ data: 'test-data' }));
    global.fetch = jest.fn().mockResolvedValue({ json: jsonMock });
  });

  describe('#get', () => {
    it('should call fetch with the correct values', async () => {
      await get('test-url');

      expect(global.fetch).toBeCalledWith('test-url', { headers: {} });
    });

    it('should return response json', async () => {
      const result = await get('test-url');

      expect(jsonMock).toBeCalled();
      expect(result).toMatchObject({ data: 'test-data' });
    });
  });
});
