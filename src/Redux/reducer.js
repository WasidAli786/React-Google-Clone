import * as actionTypes from "./actions";

const initialState = {
  allSearchData: null,
  allSearchLoading: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_SEARCH_DATA_BEGIN:
      return {
        ...state,
        allSearchLoading: true,
      };
    case actionTypes.GET_ALL_SEARCH_DATA_SUCCESS:
      return {
        ...state,
        allSearchLoading: false,
        allSearchData: action.payload,
      };
    case actionTypes.GET_ALL_SEARCH_DATA_BEGIN:
      return {
        ...state,
        allSearchLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
