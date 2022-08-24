import Axios from "axios";
import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  BASE_URL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_ADD_FAIL,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_ADD_REQUEST,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
} from "../constants/Constant";

export const listProducts = () => async (dispatch, getState) => {
  dispatch({
    type: PRODUCT_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(BASE_URL + "/api/images");
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.message,
    });
  }
};
