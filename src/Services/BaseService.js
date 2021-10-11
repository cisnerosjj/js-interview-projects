import axios from "axios"

const BASE_URL = "https://api.github.com";

export const create = (username) => {
    const http = axios.create({
        baseURL: `${BASE_URL}/users/${username}/repos?per_page=250`,

    })
}




