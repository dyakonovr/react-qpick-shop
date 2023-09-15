import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import ICartState from 'interfaces/store/ICartState';
import ICartProduct from 'interfaces/store/cart/ICartProduct';

const initialState: ICartState = {
  products: [{ id: 1, name: "TITLE", price: 500, image: "", quantity: 1 }, { id: 2, name: "TITLE", price: 500, image: "", quantity: 1 }],
  quantity: 2,
  deliveryPrice: 499,
  totalPrice: 1000,
  promoCode: "",
};
 
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action: PayloadAction<ICartProduct>) {
      const newProduct = action.payload;
      state.products.push(newProduct);
      state.quantity++;
      state.totalPrice += newProduct.price;
    },

    removeItemFromCart(state, action: PayloadAction<number>) {
      const productId = action.payload;

      const currentProduct = state.products.find((product: ICartProduct) => product.id === productId);
      const { price, quantity } = currentProduct;
      state.products = state.products.filter((product: ICartProduct) => product.id !== productId);
      state.totalPrice -= price * quantity;
      state.quantity--;
    },

    incrementProductQuantity(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const currentObj = state.products.find((product: ICartProduct) => product.id === productId);

      if (currentObj.quantity < 10) {
        currentObj.quantity += 1;
        state.totalPrice += currentObj.price;
      }
    },

    decrementProductQuantity(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const currentObj = state.products.find((product: ICartProduct) => product.id === productId);

      if (currentObj.quantity > 1) {
        currentObj.quantity -= 1;
        state.totalPrice -= currentObj.price;
      }
    },

    setPromoCode(state, action: PayloadAction<string | number>) {
      state.promoCode = action.payload;
    },

    clearCart(state) {
      state.products = [];
      state.quantity = 0;
      state.totalPrice = 0;
      state.promoCode = "";
    }
  }
});

export const { addItemToCart, removeItemFromCart, incrementProductQuantity, decrementProductQuantity, setPromoCode, clearCart } = cartSlice.actions;
export default cartSlice.reducer;