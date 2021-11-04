import axios from "axios";
import storage from "../../utils/storage";

export const login = async (user, pass) => {
  try {
    const accessToken = await axios.post(`http://localhost:8000/auth/login`, {
      user,
      pass,
    });
    // setAuthorizationHeader(accessToken)
    storage.set("token", accessToken);
    return accessToken;
  } catch (err) {
    throw console.error(err.message);
  }
};
