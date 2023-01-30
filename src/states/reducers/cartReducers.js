import * as actions from "../actionTypes/actionTypes";

const initialState={
  data:[],
  cart:[],
  
}
const reducer = (state = initialState, action) => {
  
  switch (action.type) {
    
    

    case actions.CART_ADD:
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
   
    
    case actions.FETCH_DATA:
      
        state.data=[{...action.payload}];
     
  
        

  

    case actions.EMPTY_CART:
      if (action.payload === "empty") {
        state.splice(0, state.length);
        return state;
      }
    
    case actions.CART_REMOVE:
     const index = state.cart.findIndex(
        (product) => product.id === action.payload);
     
     if(index>-1){
           state.cart[index]=[...state.cart.splice(index,1)]
            console.log(state.cart)
     }

      case actions.DECREASE_CART_ITEM_QUANTITY:
     
    const finds=state.cart.findIndex(item=>item.id===action.payload)
      if(finds>=0){
             console.log("deceasequantity");
              if(state.cart[finds].cartQuantity>0){
                state.cart[finds]={...state.cart[finds],cartQuantity:state.cart[finds].cartQuantity-1,
              }
              console.log(state.cart)
            }else{
                
           
            }
        } 
    
    default:
      return state;
  }
};

export default reducer;
