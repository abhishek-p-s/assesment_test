import Axios from "axios";

import {
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAIL,
  BASE_URL,
} from "../constants/Constant";

export const userAction = (details) => async (dispatch) => {
  try {
    const { data } = await Axios.post(BASE_URL + `/user/login`, details, {
      headers: { "Content-Type": "application/json" },
    });
    dispatch({ type: LOGIN_REQUEST_SUCCESS, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: LOGIN_REQUEST_FAIL,
      payload: error.message,
    });
  }
};
