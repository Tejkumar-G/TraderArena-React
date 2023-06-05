import { userAPI } from ".";
import { setLoading } from "../redux/slices/layoutSlice";
import { setUser, updateAuth } from "../redux/slices/userSlice";
import { removeSession, setSession } from "../utils/session";
import { showAlert } from "../utils/toast";

export const signUp = (payload, callback) => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      const response = await userAPI.post("/create_user/", payload);
      showAlert(["Account Created"], "success");
      setSession(response.data.access, response.data.refresh);
      if (callback) callback();
      dispatch(updateAuth(true));
    } catch (err) {
      showAlert(Object.values(err.response.data).flat(), "error");
      dispatch(updateAuth(false));
    }
    dispatch(setLoading());
  };
};

export const login = (payload, callback) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await userAPI.post("/login_user/", payload);
      showAlert(["Logged In Successfully"], "success");
      setSession(response.data.access, response.data.refresh);
      getUser();
      if (callback) callback();
      dispatch(updateAuth(true));
    } catch (err) {
      showAlert(Object.values(err.response.data).flat(), "error");
      dispatch(updateAuth(false));
    }
    dispatch(setLoading());
  };
};

export const getUser = () => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await userAPI.get(`/user/`);
      console.log(response.data);
      dispatch(setUser(response.data));
    } catch (err) {
      if (err.response.data)
      showAlert(Object.values(err.response.data).flat(), "error");
      dispatch(logout());
    }
    dispatch(setLoading());
  };
};

export const verifyToken = (payload, callback) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      await userAPI.post("/token/verify/", payload);
      if (callback) callback();
      dispatch(updateAuth(true));
      dispatch(getUser());
    } catch (err) {
      dispatch(updateAuth(false));
    }
    dispatch(setLoading());
  };
};

export const logout = (callback) => {
  console.log("frm api");
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      await userAPI.post("/logout_user/");
      dispatch(updateAuth(false));
      removeSession();
      // callback(loggedOut)
      if (callback) callback(true);
    } catch (err) {
      // callback(loggedOut)
      if (callback) callback(false);
      showAlert(Object.values(err?.response?.data).flat(), "error");
    }
    dispatch(setLoading());
  };
};
