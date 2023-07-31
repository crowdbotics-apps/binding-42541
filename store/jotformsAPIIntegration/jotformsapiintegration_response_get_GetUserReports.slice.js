import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const jotformsapiintegration_get_reports_read = createAsyncThunk(
  "jotformsapiintegration_response_get_GetUserReports/jotformsapiintegration_get_reports_read",
  async payload => {
    const response = await apiService.jotformsapiintegration_get_reports_read(
      payload
    )
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const jotformsapiintegration_response_get_GetUserReportsSlice = createSlice({
  name: "jotformsapiintegration_response_get_GetUserReports",
  initialState,
  reducers: {},
  extraReducers: {
    [jotformsapiintegration_get_reports_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [jotformsapiintegration_get_reports_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [jotformsapiintegration_get_reports_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  jotformsapiintegration_get_reports_read,
  slice: jotformsapiintegration_response_get_GetUserReportsSlice
}
