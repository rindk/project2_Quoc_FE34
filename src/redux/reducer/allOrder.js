import { createSlice } from "@reduxjs/toolkit";

export const allOrder = createSlice({
  name: "allOrder",
  initialState: {
    value: [],
  },
  reducers: {
    setAllOrder: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setAllOrder } = allOrder.actions;

export const fetchAllOrder = () => async (dispatch) => {
  await fetch(process.env.REACT_APP_SV_ORDERS)
    .then((res) => res.json())
    .then((data) => dispatch(setAllOrder(data)));
};

export default allOrder.reducer;
