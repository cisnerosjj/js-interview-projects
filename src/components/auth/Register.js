import axios from "./axiosClient";

export const register = async (username, password) => {
  try {
    return await axios.post(`http://localhost:8000/auth/register`);
  } catch (err) {
    console.log(err);
  }
};
