import axios from "axios";
import { getAccessToken } from "../utils/interceptors";

axios.defaults.headers.common["Content-Type"] = "application/json";
const accessToken = localStorage.getItem("accessToken");
if (accessToken) {
  axios.defaults.headers.common["Authorization"] = "Bearer " + accessToken;
}
console.log(process.env.REACT_APP_USER_SERVICE_BASE_URL, process.env.NODE_ENV)
export const userAPI = axios.create({
  baseURL: process.env.REACT_APP_USER_SERVICE_BASE_URL,
});

export const strategyAPI = axios.create({
  baseURL: 'http://192.168.5.97:8001'

  // use this base url when you got any issue in current base url, since I'm doing changes.,
});

userAPI.interceptors.response.use(null, (error) => getAccessToken(error, userAPI));
strategyAPI.interceptors.response.use(null, (error)=>getAccessToken(error,userAPI));
