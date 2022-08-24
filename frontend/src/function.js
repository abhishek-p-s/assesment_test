import Axios from "axios";
import { BASE_URL } from "./constants/Constant";
import cogoToast from "cogo-toast";

export const postData = async (data, url, message) => {
  await Axios.post(BASE_URL + url, data, {
    headers: {
      'accept': 'application/json',
      'Accept-Language': 'en-US,en;q=0.8',
      'Content-Type': `multipart/form-data`,
    }
  }).then((res) => {
    console.log(res, "inside axios");
    cogoToast.success(message);
    return res;
  });
};

export const getData = async (data, url) => {
  try {
    await Axios.get(BASE_URL + url, data).then((res) => {
      return { res };
    });
  } catch (error) {
    cogoToast.error(error);
  }
};
