import { strategyAPI, userAPI } from "../api";

export const setSession = (accessToken, refreshToken) => {
  if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
  localStorage.setItem("accessToken", accessToken);

  // adding token for all axios instance
  userAPI.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  strategyAPI.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

export const removeSession = () => {
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("accessToken");

  // removing token for all axios instance
  delete userAPI.defaults.headers.common.Authorization;
  delete strategyAPI.defaults.headers.common.Authorization;
};
