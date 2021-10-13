import axios from "axios";

const BASE_URL = "https://api.github.com";

export const apiGitHub = axios.create({
  baseURL: BASE_URL,
});
