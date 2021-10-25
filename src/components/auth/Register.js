import axios, { setAuthorizationHeader } from "./axiosClient";
import storage from "../../utils/storage";

export const register = async (user, pass) => {
  const accessToken = await axios.post(`http://localhost:8000/auth/register`, {
    user,
    pass,
  });
  try {
    setAuthorizationHeader(accessToken);
    console.log("he llegao aqui");
    storage.set("token", accessToken);
    return accessToken;
  } catch (err) {
    console.log("error aqui");
    console.log(err);
  }

  /* TODO: Error management --> try-catch section 
      try {
        Axios request
      }
      catch (error) {Managment error. No saving token in localStorage and no setAuthorizationHeader}
    */
};
