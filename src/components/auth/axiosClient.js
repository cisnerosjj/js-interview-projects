import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8000'
});

export const setAuthorizationHeader = token => {
  const { accessToken } = token;
  axiosClient.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${accessToken}`;
};

export default axiosClient;
