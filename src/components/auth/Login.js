import axios, { setAuthorizationHeader } from "./axiosClient";
import storage from "../../utils/storage";

export const login = async (user, pass) => {
  try {
    const accessToken = await axios.post(`http://localhost:8000/auth/login`, {
      user,
      pass,
    });
    setAuthorizationHeader(accessToken);
    storage.set("token", accessToken);
    return accessToken;
  } catch (err) {
    console.log(err);
  }
};
