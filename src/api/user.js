import { userAPI } from '.';
import { setLoading, setUser, updateAuth } from '../redux/slices/userSlice';
import { setSession } from '../utils/session';
import { showAlert } from '../utils/toast';

export const signUp = (payload, callback) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await userAPI.post('/create_user/', payload);
      showAlert(['Account Created'], 'success');
      setSession(response.data.access, response.data.refresh);
      if (callback) callback();
      dispatch(updateAuth(true));
    } catch (err) {
      showAlert(Object.values(err.response.data).flat(), 'error');
      dispatch(updateAuth(false));
    }
    dispatch(setLoading());
  };
};

export const login = (payload, callback) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await userAPI.post('/login_user/', payload);
      showAlert(['Logged In Successfully'], 'success');
      setSession(response.data.access, response.data.refresh);
      // can hit in home page & id can be set here
      if (response.data.user_id) getUser(response.data.user_id);
      if (callback) callback();
      dispatch(updateAuth(true));
    } catch (err) {
      showAlert(Object.values(err.response.data).flat(), 'error');
      dispatch(updateAuth(false));
    }
    dispatch(setLoading());
  };
};

export const getUser = (id, callback) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await userAPI.get(`/user/${id}`);
      if (callback) callback();
      //{"id":6,"first_name":"test","last_name":"test","email":"test12@gma
      dispatch(setUser(response.data));
    } catch (err) {
      //need to handle error
      // if (err.response.data)
      //   showAlert(Object.values(err.response.data).flat(), "error");
      dispatch(setUser([]));
    }
    dispatch(setLoading());
  };
};

export const verifyToken = (payload, callback) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      await userAPI.post('/token/verify/', payload);
      if (callback) callback();
      dispatch(updateAuth(true));
    } catch (err) {
      dispatch(updateAuth(false));
    }
    dispatch(setLoading());
  };
};
