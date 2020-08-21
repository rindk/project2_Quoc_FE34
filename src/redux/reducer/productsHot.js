import { createSlice } from "@reduxjs/toolkit";

export const productsHot = createSlice({
  name: "productsHot",
  initialState: {
    value: [],
  },
  reducers: {
    getProductsHot: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { getProductsHot } = productsHot.actions;

export const fetchProductsHot = () => async (dispatch) => {
  await fetch(process.env.REACT_APP_SV_PRODUCTS + "?status_ne=top&status_ne= ")
    .then((res) => res.json())
    .then((data) => dispatch(getProductsHot(data)));
};

export default productsHot.reducer;
