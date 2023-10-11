import * as apis from "../../apis";
import actionTyper from "./actionType";
export const getHomeApi = () => async (dispatch) => {
  try {
    const response = await apis.getHome();
    console.log(response.data);
    if (response?.status === 200) {
      dispatch({
        type: actionTyper.GET_HOME,
        homeData: response?.data.data.items,
      });
    } else {
      dispatch({ type: actionTyper.GET_HOME, homeData: null });
    }
  } catch (error) {
    dispatch({ type: actionTyper.GET_HOME, homeData: null });
  }
};
