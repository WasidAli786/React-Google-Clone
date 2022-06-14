import axios from "axios";
import {
  getAllSearchDataBegin,
  getAllSearchDataSuccess,
  getAllSearchDataFail,
} from "./actions";
import { notification } from "antd";

const errorNotification = (data) => {
  notification.error({
    message: data,
  });
};

const BASE_URL = "https://google-search3.p.rapidapi.com/api/v1";

export const getAllSearchDataRequest =
  (inputValue, tabValues) => async (dispatch) => {
    try {
      await dispatch(getAllSearchDataBegin());
      const response = await axios.get(
        `${BASE_URL}/${
          tabValues === "videos" ? "search" : tabValues
        }/q=${inputValue} ${tabValues === "videos" ? "videos" : ""}`,
        {
          headers: {
            "X-User-Agent": "desktop",
            "X-Proxy-Location": "EU",
            "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
            "X-RapidAPI-Key":
              "9085af61cdmsh9cd9f2721cdd2f7p1fb6fdjsnea3095a205d2",
          },
        }
      );
      response.status === 200
        ? await dispatch(getAllSearchDataSuccess(response.data))
        : (await dispatch(getAllSearchDataFail(response.data.message))) &&
          dispatch(errorNotification(response.data.message));
    } catch (error) {
      await dispatch(getAllSearchDataFail(error));
    }
  };
