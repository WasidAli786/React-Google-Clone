export const GET_ALL_SEARCH_DATA_BEGIN = "GET_ALL_SEARCH_DATA_BEGIN";
export const GET_ALL_SEARCH_DATA_SUCCESS = "GET_ALL_SEARCH_DATA_SUCCESS";
export const GET_ALL_SEARCH_DATA_FAIL = "GET_ALL_SEARCH_DATA_FAIL";

export const getAllSearchDataBegin = () => {
  return {
    type: GET_ALL_SEARCH_DATA_BEGIN,
  };
};
export const getAllSearchDataSuccess = (data) => {
  return {
    type: GET_ALL_SEARCH_DATA_SUCCESS,
    payload: data,
  };
};
export const getAllSearchDataFail = (error) => {
  return {
    type: GET_ALL_SEARCH_DATA_FAIL,
    payload: error,
  };
};
