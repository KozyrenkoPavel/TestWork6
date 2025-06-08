import { createSlice } from "@reduxjs/toolkit";
import { IProducts } from "../interface/interface";

type TInitialState = {
  products: IProducts[];
  isLoading: boolean;
};

const initialState: TInitialState = {
  products: [],
  isLoading: false,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    updateProductsList: (state, action) => {
      state.products = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { updateProductsList, setIsLoading } = productsSlice.actions;
export default productsSlice.reducer;
