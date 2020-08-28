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

export const fetchProductsList = ({ value, page }) => async (dispatch) => {
  await fetch(
    process.env.REACT_APP_SV_PRODUCTS + `?${value}&_page=${page}&_limit=9`
  )
    .then((res) => res.json())
    .then((data) => dispatch(getProductsList(data)));
};

export default productsList.reducer;
