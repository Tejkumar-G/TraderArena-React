import { strategyAPI } from ".";
import { setLoading, setStrategies } from "../redux/slices/strategySlice";

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
