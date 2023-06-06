import { strategyAPI } from ".";
import {
  clearCurrentStrategy,
  setCurrentStrategy,
  setLoading,
  setMyStrategies,
  setStrategies,
} from "../redux/slices/strategySlice";

export const getStrategies = (query={page:1, per_page:20}) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await strategyAPI.get(`/strategies/`, {
        params: query,
      });
      console.log(response.data);
      //{"id":6,"name":"test","description":"test","created_at":"", "user_id" : "1"}
      dispatch(setStrategies(response.data));
    } catch (err) {
      //need to handle error
      // if (err.response.data)
      //   showAlert(Object.values(err.response.data).flat(), "error");
      // dispatch(setUser({}));
    }
    dispatch(setLoading());
  };
};

export const createStrategy = (payload) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await strategyAPI.post(`/strategy/`, payload);
      console.log(response.data);
      dispatch(getMyStrategies());
    } catch (err) {
      console.log(err);
    }
    dispatch(setLoading());
  };
};

export const getStrategy = (id) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await strategyAPI.get(`/strategy/${id}`);
      console.log(response.data);
      dispatch(setCurrentStrategy(response.data));
    } catch (err) {
      console.log(err);
    }
    dispatch(setLoading());
  };
};

export const getMyStrategies = (params={page:1, per_page:20}) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await strategyAPI.get(`/strategies/my_strategies`, {
        params: params,
      });
      console.log(response.data);
      dispatch(setMyStrategies(response.data));
    } catch (err) {
      console.log(err);
    }
    dispatch(setLoading());
  };
};
export const updateStrategy = (id, payload) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await strategyAPI.put(`/strategy/${id}`, payload);
      console.log(response.data);
      dispatch(getMyStrategies())
    } catch (err) {
      console.log(err);
    }
    dispatch(setLoading());
  };
};

export const deleteStrategy = (id) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await strategyAPI.delete(`/strategy/${id}`);
      console.log(response.data);
      dispatch(clearCurrentStrategy());
      dispatch(getMyStrategies());
    } catch (err) {
      console.log(err);
    }
    dispatch(setLoading());
  };
};
