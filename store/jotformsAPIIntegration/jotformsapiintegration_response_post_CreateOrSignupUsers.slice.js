import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const jotformsapiintegration_post_register_create = createAsyncThunk("jotformsapiintegration_response_post_CreateOrSignupUsers/jotformsapiintegration_post_register_create", async payload => {
  const response = await apiService.jotformsapiintegration_post_register_create(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const jotformsapiintegration_response_post_CreateOrSignupUsersSlice = createSlice({
  name: "jotformsapiintegration_response_post_CreateOrSignupUsers",
  initialState,
  reducers: {},
  extraReducers: {
    [jotformsapiintegration_post_register_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [jotformsapiintegration_post_register_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [jotformsapiintegration_post_register_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  jotformsapiintegration_post_register_create,
  slice: jotformsapiintegration_response_post_CreateOrSignupUsersSlice
};