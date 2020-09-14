import { createSlice } from "@reduxjs/toolkit";

export const userInfo = createSlice({
  name: "userInfo",
  initialState: {
    value: {
      id: 0,
      type: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      city: "",
      phone: "",
      cart: [],
      viewed: [],
    },
  },
  reducers: {
    getUserInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { getUserInfo } = userInfo.actions;

export const fetchUserInfo = (id) => async (dispatch) => {
  await fetch(process.env.REACT_APP_SV_PROFILE + `/${id}`)
    .then((res) => res.json())
    .then((data) => dispatch(getUserInfo(data)));
};

export default userInfo.reducer;
