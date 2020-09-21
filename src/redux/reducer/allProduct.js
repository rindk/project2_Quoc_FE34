import { createSlice } from "@reduxjs/toolkit";

export const allProduct = createSlice({
  name: "allProduct",
  initialState: {
    value: [],
  },
  reducers: {
    setAllProduct: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setAllProduct } = allProduct.actions;

export const fetchAllProduct = () => async (dispatch) => {
  await fetch(process.env.REACT_APP_SV_PRODUCTS)
    .then((res) => res.json())
    .then((data) => dispatch(setAllProduct(data)));
};

export default allProduct.reducer;
