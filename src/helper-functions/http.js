/**
 * Make get request.
 * @param {string} url Request URL.
 * @param {object} [headers=null] Object contains request headers.
 * @return {Promise<object>} Promise fulfilled with response data.
 */

const get = async (url, headers = {}) => {
  const response = await fetch(url, {
    headers: {
      ...headers,
    },
  });

  return response.json();
};

export default get;
