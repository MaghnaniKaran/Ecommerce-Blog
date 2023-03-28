import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface cartState {
  value: any;
}

const initialState: cartState = {
  value: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<any>) => {
      state.value.push(action.payload);
    },
    deleteItem: (state, action: PayloadAction<any>) => {
      state.value.splice(action.payload, 1);
    },
    clearItem: (state, action: PayloadAction<any>) => {
      state.value.splice(0, action.payload);
    },
  },
});

export const { addItem, deleteItem, clearItem } = cartSlice.actions;

export default cartSlice.reducer;
