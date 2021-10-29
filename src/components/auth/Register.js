import axios from "./axiosClient";

export const register = async (username, password) => {
  debugger;
  try {
    const newUser = await axios.post(`http://localhost:8000/auth/register`, {
      username,
      password,
    });
    debugger;
    return newUser;
  } catch (err) {
    console.log(err);
  }
};
