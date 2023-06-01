import { userAPI } from '../api';

export const setSession = (accessToken, refreshToken) => {
  if (refreshToken) localStorage.setItem('refreshToken', refreshToken);
  localStorage.setItem('accessToken', accessToken);

  // adding token for all axios instance
  userAPI.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
};

  
