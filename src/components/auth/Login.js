/* import { setAuthorizationHeader } from "./axiosClient";
import storage from "../../utils/storage";
import axiosClient, { setAuthorizationHeader } from "./axiosClient";

export const login = async (user, pass) => {
  debugger
  try {
    const accessToken = await axiosClient.post(
      `http://localhost:8000/auth/login`,
      {
        user,
        pass,
      }
    );
    setAuthorizationHeader(accessToken)
    storage.set("token", accessToken);
    return accessToken;
  } catch (err) {
    throw console.error(err.message);
  }
}; */
