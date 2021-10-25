import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8000",
});

axiosClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
    return Promise.reject({
      message: error.response.statusText,
      ...error.response.data,
    });
  }
);

export const setAuthorizationHeader = (token) => {
  const { accessToken } = token;
  axiosClient.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${accessToken}`;
};

export default axiosClient;
