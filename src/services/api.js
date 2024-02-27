import axios from "axios";

export const api = axios.create({
    baseURL: "foodexplorer-api-npff.onrender.com", withCredentials: true
});