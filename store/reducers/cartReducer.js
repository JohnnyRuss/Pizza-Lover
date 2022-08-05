import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct(state, action) {
      if (!state.products.some((pr) => pr.productId === action.payload.productId))
        state.quantity += 1;
      state.products.push(action.payload);
      state.total += +action.payload.price * +action.payload.quantity;
    },

    reset(state) {
      state.products = [];
      state.total = 0;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addProduct, reset } = cartSlice.actions;
