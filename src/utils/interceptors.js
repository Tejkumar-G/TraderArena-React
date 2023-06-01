import { userAPI } from '../api';
import { setSession } from './session';
import { showAlert } from './toast';

export async function getAccessToken(error, axiosInstance) {
  const originalRequest = error.config;
  if (originalRequest.url !== '/token/refresh/') {
    if (
      error.response.status === 401 &&
      error.response?.data?.code === 'token_not_valid'
    ) {
      return userAPI
        .post('/token/refresh/', {
          refresh: localStorage.getItem('refreshToken'),
        })
        .then((refreshResponse) => {
          const newAccessToken = refreshResponse.data.access;
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          setSession(newAccessToken);
          if (originalRequest.url !== '/token/verify/')
            return axiosInstance(originalRequest);
        });
    }
  } else {
    showAlert(['Session Expired Please Login Again']);
  }

  // return Error object with Promise
  return Promise.reject(error);
}
