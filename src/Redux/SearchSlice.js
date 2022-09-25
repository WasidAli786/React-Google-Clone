import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../Container/Config/DefaultValues";

export const searchRequest = createAsyncThunk(
  "search/allSearch",
  async ({ search, isTab }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/${isTab === "videos" ? "search" : isTab}/q=${search} ${
          isTab === "videos" ? "videos" : ""
        }`,
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
      response.status !== 200 && alert(response.data.message);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchData: null,
    searchLoading: false,
    error: null,
  },
  extraReducers: {
    [searchRequest.pending]: (state, action) => {
      state.searchLoading = true;
    },
    [searchRequest.fulfilled]: (state, action) => {
      state.searchLoading = false;
      state.searchData = action.payload;
    },
    [searchRequest.rejected]: (state, action) => {
      state.searchLoading = false;
      state.error = action.payload;
    },
  },
});

export default searchSlice.reducer;
