import axios, { setAuthorizationHeader } from "./axiosClient";

export const register = async (username, password) => {
  try {
    const newUser = await axios.post(`http://localhost:8000/auth/register`, {
      username,
      password,
    });
    debugger;
    return newUser;
  } catch (err) {
    debugger;
    console.log(err);
  }
};
