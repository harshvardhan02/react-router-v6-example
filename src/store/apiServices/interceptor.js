import axios from 'axios';

class request {
  static apiHeaderConfig = (idToken) => {
    const apiConfig = {
      headers: {
        'Content-Type': 'application/json'
      },
    };
    if (idToken) apiConfig.headers.Authorization = idToken;
    return apiConfig;
  };

  static post(route, bodyParams = {}) {
    const url = `${route}`;
    return axios.post(url, bodyParams, this.apiHeaderConfig);
  }

  static get(route, idToken, bodyParams = {}) {
    const url = `${route}`;
    return axios.get(url, bodyParams, this.apiHeaderConfig(idToken));
  }

  static put(route, idToken, bodyParams = {}) {
    const url = `${route}`;
    return axios.put(url, bodyParams, this.apiHeaderConfig(idToken));
  }
}

export default request;