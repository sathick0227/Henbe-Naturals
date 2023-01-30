import * as actions from "../actionTypes/actionTypes";

export const addCartItem = (products) => {
  return (dispatch) => {
    dispatch({ type: actions.CART_ADD, payload: products });
  };
};

export const fetchData =(products)=>{
  return (dispatch) => {
    dispatch({ type: actions.FETCH_DATA, payload: products });
  };
};

export const removeCartItem = (id) => {
  return (dispatch) => {
    dispatch({ type: actions.CART_REMOVE, payload: id });
  };
};

export const decreaseCartItemQuantity = (id) => {
  return (dispatch) => {
    dispatch({ type: actions.DECREASE_CART_ITEM_QUANTITY, payload: id });
  };
};



export const emptyCart = (type) => {
  return (dispatch) => {
    dispatch({ type: actions.EMPTY_CART, payload: type });
  };
};
