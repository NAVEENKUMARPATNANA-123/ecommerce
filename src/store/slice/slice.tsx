import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  name: string;
  img: string;   
  quantity: number;
   price: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};


const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );
      
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },

    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    removeCart(state,action:PayloadAction<any>){
      state.items=[]
    }

    
  },
});

export const { addToCart, removeFromCart,removeCart } = cartSlice.actions;
export default cartSlice.reducer;
