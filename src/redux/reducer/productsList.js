import { createSlice } from "@reduxjs/toolkit";

export const productsList = createSlice({
  name: "productsList",
  initialState: {
    value: [],
  },
  reducers: {
    getProductsList: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { getProductsList } = productsList.actions;

export const fetchProductsList = () => async (dispatch) => {
  await fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((data) => dispatch(getProductsList(data)));
};

export default productsList.reducer;
