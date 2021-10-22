import axios, {
  setAuthorizationHeader,
} from './axiosClient';

export const login = async (username, password) => {
  const accessToken = await axios.post(`http://localhost:8000/auth/login`, username, password);
  setAuthorizationHeader(accessToken);
  localStorage.set('token', accessToken);
  return accessToken;
};

