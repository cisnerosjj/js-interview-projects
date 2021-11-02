import axios from "axios";
import axiosClient from "../components/auth/axiosClient";

const BASE_URL = "https://api.github.com";

export { getRepos, getUserData };

function getRepos(username) {
  const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
  return axiosClient.get(url).then((response) => response.data);
}

function getUserData(username) {
  return axios
    .all([
      axiosClient.get(`${BASE_URL}/users/${username}`),
      axiosClient.get(`${BASE_URL}/users/${username}/orgs`),
    ])
    .then(([user, orgs]) => ({
      user: user.data,
      orgs: orgs.data,
    }));
}
