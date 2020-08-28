import { createSlice } from "@reduxjs/toolkit";

export const loginStatus = createSlice({
  name: "loginStatus",
  initialState: {
    value: false,
    type: "user",
  },
  reducers: {
    checkLoginStt: (state) => {
      const loginStt = localStorage.getItem("token");
      state.value = loginStt === null ? false : true;
      state.type =
        loginStt === null
          ? "user"
          : JSON.parse(loginStt)[0].type === "admin"
          ? "admin"
          : "user";
    },
  },
});
export const { checkLoginStt } = loginStatus.actions;

export default loginStatus.reducer;
