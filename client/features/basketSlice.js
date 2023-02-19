import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketslice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => Number(item.id) === Number(action.payload.id)
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not in basket!!!`
        );
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketslice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemsWithIdthId = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export const selectBasketTotal = (state) =>
  state.basket.items.reduce((total, item) => ((total) += parseInt(item.price)), 0);

export default basketslice.reducer;
