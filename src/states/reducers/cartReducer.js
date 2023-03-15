import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState:{
  data:[],
  cart:[],
  favorite:[],
  userData:[]
},
  reducers: {
    fetchData:(state,action)=>{
      state.data=[...action.payload];
      console.log(state.data)
    },

    addfavourite:(state,action)=>{
       const findFav=state.favorite.findIndex(item=>item.id===action.payload.id)
      if(findFav>=0){
       state.favorite = [
        ...state.favorite.slice(0, findFav),
        ...state.favorite.slice(findFav + 1),
      ];
      }else{
        let tempFav = { ...action.payload ,favorite:true};
        state.favorite.push(tempFav);

      }
    },

    addUserData:(state,action)=>{
      console.log(action.payload)
    },

    clearCart:(state,action)=>{
      state.cart=[];
    },

    clearFav:(state,action)=>{
      state.favorite=[];
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
    removeFavItem: (state, action) => {
      const indexFav = state.favorite.findIndex(
        (product) => product.id === action.payload
      );
      state.favorite = [
        ...state.favorite.slice(0, indexFav),
        ...state.favorite.slice(indexFav + 1),
      ];
    },
    decrementItem: (state, action) => {
      console.log(action.payload)
    const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload);

      if (state.cart[itemIndex].cartQuantity > 1) {
        state.cart[itemIndex].cartQuantity -= 1;
    
      } else if (state.cart[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        
        state.list = nextCartItems;
    }
    },
    
  },
});

export const { fetchData,addItem,removeItem,removeFavItem,addUserData,decrementItem,addfavourite,clearFav,clearCart} = cartSlice.actions;

export default cartSlice.reducer;