import { createSlice } from "@reduxjs/toolkit";

export const productsTopSale = createSlice({
  name: "productsTopSale",
  initialState: {
    value: [],
  },
  reducers: {
    getProductsTopSale: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { getProductsTopSale } = productsTopSale.actions;

export const fetchProductsTopSale = () => async (dispatch) => {
  await fetch(process.env.REACT_APP_SV_PRODUCTS + "?status=top")
    .then((res) => res.json())
    .then((data) => dispatch(getProductsTopSale(data)));
};

export default productsTopSale.reducer;
