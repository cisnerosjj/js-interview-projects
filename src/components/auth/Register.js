import axios from "./axiosClient";

export const register = async (username, password) => {
  try {
    const newUser = await axios.post(`http://localhost:8000/auth/register`, {
      username,
      password,
    });
    return newUser;
  } catch (err) {
    console.log(err);
  }
};
