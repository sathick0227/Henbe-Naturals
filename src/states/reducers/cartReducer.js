import * as actions from "../actionTypes/actionTypes";

const initialState={
  data:[],
  cart:[],
  
}
const reducer = (state = initialState, action) => {
  let done = false;
  switch (action.type) {
    case actions.CART_ADD:
    const find=state.cart.findIndex(item=>item.id===action.payload.id)
      if(find>=0){
        state.cart[find]={
          ...state.cart[find],
          cartQuantity:state.cart[find].cartQuantity+1,
        };
        
      }else{
         let tempProductItem = { ...action.payload, cartQuantity: 1 };
        state.cart.push(tempProductItem);
    
      }

    case actions.FETCH_DATA:
      state.data=[{...action.payload}];  
  

    case actions.DECREASE_CART_ITEM_QUANTITY:
    const finds=state.cart.findIndex(item=>item.id===action.payload)
      if(finds>=0){
              if(state.cart[finds].cartQuantity>0){
                state.cart[finds]={...state.cart[finds],cartQuantity:state.cart[finds].cartQuantity-1,
              }
              
            }else{
                
           
            }
        } 
      
      


    case actions.EMPTY_CART:
      if (action.payload === "empty") {
        state.splice(0, state.length);
        return state;
      }

    default:
      return state;
  }
};

export default reducer;
