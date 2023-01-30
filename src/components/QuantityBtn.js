import React,{useState,useEffect} from 'react'
import './Styles/QuantityBtn.css'
import {addCartItem,decreaseCartItemQuantity} from '../states/actionCreaters/actionCreaters'
import { useSelector, useDispatch } from 'react-redux';


export default function QuantityBtn(props) {
	console.log(props)
  const cart=useSelector(state=>state.product.cart)
  // const find=cart.filter((item)=>item.id===props.id)
  const dispatch = useDispatch();
  	 const [mainqty,setMainqty]=useState(0);
  const add=()=>{
		
		dispatch(addCartItem(props));
		getQuantity(props);
	}
	const minus=()=>{
		 
		dispatch(decreaseCartItemQuantity(props.id));
		getQuantity(props);

	}
  useEffect(() => {
    getQuantity(props);
    // console.log(props)
  }, [add,minus])
  
  const getQuantity=(qty)=>{
  	
    const item=cart.map((e)=>{
    
      if(qty.id===e.id){
               setMainqty(e.cartQuantity);
      }

    })

  }

  
	
	
	return (
		<div className="container d-flex">
		<button className="addBtn radius-left" onClick={()=>add()}>+</button>
		<div className="textfield">{mainqty}</div>
		<button className="addBtn radius-right" onClick={()=>minus()}>-</button>
		</div>
	)
}