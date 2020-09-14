import { createSlice } from "@reduxjs/toolkit";

export const orderInfo = createSlice({
  name: "orderInfo",
  initialState: {
    value: {
      id: 0,
      userID: 0,
      name: "",
      phone: "",
      address: "",
      city: "",
      cart: [],
      total: 0,
      orderDate: "",
      status: "",
    },
  },
  reducers: {
    getOrderInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { getOrderInfo } = orderInfo.actions;

export const fetchOrderInfo = (id) => async (dispatch) => {
  await fetch(process.env.REACT_APP_SV_ORDERS + `/${id}`)
    .then((res) => res.json())
    .then((data) => dispatch(getOrderInfo(data)));
};

export default orderInfo.reducer;
