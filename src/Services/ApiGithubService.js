import axios from "axios";
import {create} from "./BaseService"

const http = create()

const BASE_URL = "https://api.github.com";


export const getRepos = (username) => {
    const url = `${BASE_URL}/users/${username}/repos?per_page=250`;
     axios 
      .get(url)
      .then((response) => response.data)
      .catch((e) => console.log(e));
}

export const getUserData = (username) => {
     axios
.all([
  axios.get(`${BASE_URL}/users/${username}`),
  axios.get(`${BASE_URL}/users/${username}/orgs`),
])
.then(([user, orgs]) => ({
  user: user.data,
  orgs: orgs.data,
}))
.catch((e) => console.log(e));
}










