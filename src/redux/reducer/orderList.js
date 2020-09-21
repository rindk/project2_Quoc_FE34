import { createSlice } from "@reduxjs/toolkit";

export const orderList = createSlice({
  name: "orderList",
  initialState: {
    value: [],
  },
  reducers: {
    getOrderList: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { getOrderList } = orderList.actions;

export const fetchOrderList = (userID) => async (dispatch) => {
  await fetch(process.env.REACT_APP_SV_ORDERS + `?userID=${userID}`)
    .then((res) => res.json())
    .then((data) => dispatch(getOrderList(data)));
};

export default orderList.reducer;
