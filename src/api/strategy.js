import { strategyAPI } from ".";
import { setCurrentStrategy, setLoading, setMyStrategies, setStrategies } from "../redux/slices/strategySlice";

export const getStrategies = (query) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await strategyAPI.get(`/strategies`, {
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
      const response = await strategyAPI.post(`/create_strategy`, payload);
      console.log(response.data);
      dispatch(getStrategies());
    } catch (err) {
      console.log(err)
    }
    dispatch(setLoading());
  };
};

export const getStrategy = (payload) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await strategyAPI.get(`/strategy/${payload}`);
      console.log(response.data);
      dispatch(setCurrentStrategy(response.data))
    } catch (err) {
      console.log(err)
    }
    dispatch(setLoading());
  };
};

export const getMyStrategies = (payload) => {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      const response = await strategyAPI.get(`/strategies/my_strategies`,{
        params : payload
      });
      console.log(response.data);
      dispatch(setMyStrategies(response.data))
    } catch (err) {
      console.log(err)
    }
    dispatch(setLoading());
  };
};
