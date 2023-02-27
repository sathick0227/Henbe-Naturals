import React,{useState,useEffect} from 'react'
import './Styles/QuantityBtn.css'
import {addItem,removeItem,decrementItem} from '../states/reducers/cartReducer'
import { useSelector, useDispatch } from 'react-redux';


export default function QuantityBtn(props) {
	// console.log(props)
  const cart=useSelector(state=>state.product.cart)
  // const find=cart.filter((item)=>item.id===props.id)
  const dispatch = useDispatch();
  	 const [mainqty,setMainqty]=useState(1);
  const add=()=>{
		dispatch(addItem(props));
		getQuantity(props);
	}
	const minus=()=>{
		if(mainqty>1){
		dispatch(decrementItem(props.id));
		getQuantity(props);
		console.log("if")
	}else{
		dispatch(removeItem(props.id));
		getQuantity(props);
		console.log("else")
	}
	}
  useEffect(() => {
    getQuantity(props);
    // console.log(props)
  }, [minus,add])
  
  const getQuantity=(qty)=>{
  	
    const item=cart.map((e)=>{
    
      if(qty.id===e.id){
        setMainqty(e.cartQuantity);
      }
    })
  }
  	
	
	return (
		<div className="containerss d-flex">
		<button className="addBtn radius-left" onClick={()=>add()}><span style={{fontSize:'30px'}}>+</span></button>
		<div className="textfield">{mainqty}</div>
		<button className="addBtn radius-right" onClick={()=>minus()}><span style={{fontSize:'30px'}}>-</span></button>
		</div>
	)
}