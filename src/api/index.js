import axios from "axios";
import { getAccessToken } from "../utils/interceptors";

axios.defaults.headers.common["Content-Type"] = "application/json";
const accessToken = localStorage.getItem("accessToken");
if (accessToken) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
}

export const userAPI = axios.create({
  baseURL: process.env.REACT_APP_USER_SERVICE_BASE_URL,
});

userAPI.interceptors.response.use(null, (error)=>getAccessToken(error,userAPI));
