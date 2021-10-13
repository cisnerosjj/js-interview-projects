import axios, { Axios } from "axios";
import { apiGitHub, create } from "./BaseService";

export const getRepos = async (username) => {
  const { data } = await apiGitHub.get(`/users/${username}/repos?per_page=250`);
  return data;
};

export const getUserData = async (username) => {

    const requestOne = apiGitHub.get(`/users/${username}`)
    const requestTwo = apiGitHub.get(`/users/${username}/orgs`)

  const { userData } = axios
    .all([requestOne, requestTwo])
    .then(([user, orgs]) => ({
      user: user.data,
      orgs: orgs.data,
    }));
  return userData;
};
