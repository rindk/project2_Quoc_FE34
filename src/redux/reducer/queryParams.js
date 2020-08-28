import { createSlice } from "@reduxjs/toolkit";

export const queryParams = createSlice({
  name: "queryParams",
  initialState: {
    value: "all",
    page: 1
  },
  reducers: {
    setQueryParams: (state, action) => {
      state.value = action.payload.value;
      state.page = action.payload.page;
    },
  },
});
export const { setQueryParams } = queryParams.actions;

export default queryParams.reducer;
