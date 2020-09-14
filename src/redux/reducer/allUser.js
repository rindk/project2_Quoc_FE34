import { createSlice } from "@reduxjs/toolkit";

export const allUser = createSlice({
  name: "allUser",
  initialState: {
    value: [],
  },
  reducers: {
    setAllUser: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setAllUser } = allUser.actions;

export const fetchAllUser = () => async (dispatch) => {
  await fetch(process.env.REACT_APP_SV_PROFILE)
    .then((res) => res.json())
    .then((data) => dispatch(setAllUser(data)));
};

export default allUser.reducer;
