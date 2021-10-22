import axios, {
  setAuthorizationHeader,
} from './axiosClient';
import storage from '../../utils/storage';

export const login = async (user, pass) => {
  const accessToken = await axios.post(`http://localhost:8000/auth/login`, {user, pass});
  debugger
  setAuthorizationHeader(accessToken);
  storage.set('token', accessToken);
  return accessToken;
  
  /* TODO: Error management --> try-catch section 
    try {
      Axios request
    }
    catch (error) {Managment error. No saving token in localStorage and no setAuthorizationHeader}
  */
};

