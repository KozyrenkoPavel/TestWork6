import { createSlice } from "@reduxjs/toolkit";
import { IProducts } from "../interface/interface";

type TInitialState = {
  products: IProducts[];
};

const initialState: TInitialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProductsList: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { updateProductsList } = productsSlice.actions;
export default productsSlice.reducer;
