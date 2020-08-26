import { createSlice } from "@reduxjs/toolkit";

export const token = createSlice({
  name: "token",
  initialState: {
    value: JSON.parse(localStorage.getItem("token")),
  },
  reducers: {
    updateToken: (state, action) => {
      action.payload !== null
        ? localStorage.setItem("token", JSON.stringify(action.payload))
        : localStorage.removeItem("token");
      state.value = action.payload;
    },
  },
});
export const { updateToken } = token.actions;

export default token.reducer;
