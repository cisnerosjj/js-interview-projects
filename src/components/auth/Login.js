// import { setAuthorizationHeader } from "./axiosClient";
import storage from "../../utils/storage";
import axiosClient from "./axiosClient";

export const login = async (user, pass) => {
  try {
    const accessToken = await axiosClient.post(
      `http://localhost:8000/auth/login`,
      {
        user,
        pass,
      }
    );
    // setAuthorizationHeader(accessToken);
    storage.set("token", accessToken);
    return accessToken;
  } catch (err) {
    console.log(err);
  }
};
