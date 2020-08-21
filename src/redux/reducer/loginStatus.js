import { createSlice } from "@reduxjs/toolkit";

export const loginStatus = createSlice({
  name: "loginStatus",
  initialState: {
    value: false,
  },
  reducers: {
    checkLoginStt: (state) => {
      const loginStt = localStorage.getItem("token");
      state.value = loginStt === null ? false : true;
    },
  },
});
export const { checkLoginStt } = loginStatus.actions;

export default loginStatus.reducer;
