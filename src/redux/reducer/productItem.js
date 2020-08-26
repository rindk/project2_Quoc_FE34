import { createSlice } from "@reduxjs/toolkit";

export const productItem = createSlice({
  name: "productItem",
  initialState: {
    value: {},
  },
  reducers: {
    getproductItem: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { getproductItem } = productItem.actions;

export const fetchProductItem = (id) => async (dispatch) => {
  await fetch(process.env.REACT_APP_SV_PRODUCTS + `/${id}`)
    .then((res) => res.json())
    .then((data) => dispatch(getproductItem(data)));
};

export default productItem.reducer;
