import axios from "axios";

export const api = axios.create({
    baseURL: "https://foodexplorer-api-npff.onrender.com", withCredentials: true
});