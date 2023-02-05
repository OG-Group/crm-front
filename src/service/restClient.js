import axios from 'axios';

function makeUrls() {
  const MAINAPI_HOST = 'http';
  const MAINAPI_PORT = '8080';
  const MAINAPI_SERVER = '192.168.88.128';
  const MAINAPI_API = 'api/v1';
  return (
    // window._env_.MAINAPI_HOST +
    // '://' +
    // window._env_.MAINAPI_SERVER +
    // (window._env_.MAINAPI_PORT.length > 0 ? ':' + window._env_.MAINAPI_PORT + '/' : '/') +
    // window._env_.MAINAPI_API +
    // '/'
    MAINAPI_HOST +
    '://' +
    MAINAPI_SERVER +
    (MAINAPI_PORT.length > 0 ? ':' + MAINAPI_PORT + '/' : '/') +
    MAINAPI_API +
    '/'
  );
}

class RestClient {
  static getAxios(url) {
    const config = {
      method: 'get',
      url: `${makeUrls() + url}`,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authenticatedToken'),
      },
    };
    return axios(config);
  }

  ///
  static postAxios(url, id, reg = false) {
    const config = {
      method: 'post',
      url: `${makeUrls() + url}`,

      headers:
        localStorage.getItem('authenticatedToken') && !reg
          ? {
              Authorization: 'Bearer ' + localStorage.getItem('authenticatedToken'),
            }
          : null,
      data: id,
    };
    return axios(config);
  }
  static patchAxios(url, id) {
    const config = {
      method: 'patch',
      url: `${makeUrls() + url}`,

      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authenticatedToken'),
      },
      data: id,
    };
    return axios(config);
  }

  static async putAxios(url, id) {
    const config = {
      method: 'put',
      url: `${makeUrls() + url}`,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authenticatedToken'),
      },
      data: id,
    };
    return axios(config);
  }

  static async deleteAxios(url, id) {
    const config = {
      method: 'delete',
      url: `${makeUrls() + url}`,
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('authenticatedToken'),
      },
      data: id,
    };
    return axios(config);
  }
}

export default RestClient;
