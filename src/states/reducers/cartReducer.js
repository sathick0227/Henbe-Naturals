import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState:{
  data:[],
  cart:[],
},
  reducers: {
    fetchData:(state,action)=>{
      state.data=[{...action.payload}];
    },

    addfavourite:(state,action)=>{
      
    },

    clearCart:(state,action)=>{
      state.list=[];
    },

    addItem: (state, action) => {
      const find=state.cart.findIndex(item=>item.id===action.payload.id)
      if(find>=0){
        state.cart[find]={
          ...state.cart[find],
          cartQuantity:state.cart[find].cartQuantity+1,
        };
        console.log(state.cart)
      }else{
         let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cart.push(tempProductItem);
       console.log(state.cart)
      }
      // state.list = [...state.list, { ...payload, count: 1 }];
    },
    
    removeItem: (state, action) => {
      const index = state.cart.findIndex(
        (product) => product.id === action.payload
      );
      state.cart = [
        ...state.cart.slice(0, index),
        ...state.cart.slice(index + 1),
      ];
    },

    decrementItem: (state, action) => {
      console.log(action.payload)
    const itemIndex = state.list.findIndex(
        (item) => item.id === action.payload);

      if (state.list[itemIndex].cartQuantity > 1) {
        state.list[itemIndex].cartQuantity -= 1;
    
      } else if (state.list[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.list.filter(
          (item) => item.id !== action.payload.id
        );
        
        state.list = nextCartItems;
    }
    },
    
  },
});

export const { fetchData,addItem,removeItem,decrementItem,addfavourite,clearCart} = cartSlice.actions;

export default cartSlice.reducer;