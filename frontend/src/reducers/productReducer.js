import {
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_ADD_FAIL,
  PRODUCT_ADD_SUCCESS,
  PRODUCT_ADD_REQUEST,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
} from "../constants/Constant";

export const produListReducer = (
  state = { itemList: [], loading: true },
  action
) => {
  console.log("state", state.itemList);

  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };

    case PRODUCT_LIST_SUCCESS:
      return { itemList: action.payload, loading: false };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    // case PRODUCT_DELETE_REQUEST:
    //     return {...state, loading: true };

    case PRODUCT_DELETE_SUCCESS:
      console.log("reducer state", action.payload);

      const existState = state.itemList;

      const newList = existState.filter(
        (data) => data._id != action.payload.newData._id
      );
      return {
        itemList: newList,
      };

    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_ADD_REQUEST:
      return { ...state, loading: true };

    case PRODUCT_ADD_SUCCESS:
      //console.log(action.payload, "payload");
      state.itemList.push(action.payload.itemData);
      //console.log(state.itemList, "new data");

      return { itemList: state.itemList };

    case PRODUCT_ADD_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };

    case PRODUCT_UPDATE_SUCCESS:
      return { ...state, item: action.payload };

    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
