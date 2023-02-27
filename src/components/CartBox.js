import React,{useState,useEffect} from 'react'
import './Styles/CartBox.css'
import {useNavigate} from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import QuantityBtn from './QuantityBtn';
import { MdDelete,MdShoppingBasket } from "react-icons/md";
import {removeItem,clearCart} from '../states/reducers/cartReducer';

export default function CartBox({handleMouseOut}) {
	const navigate =useNavigate();
	const cart=useSelector(state=>state.product.cart)
	const dispatch = useDispatch();
	const [total, setTotal] = useState()
	
	useEffect(() => {
		getTotal()
	}, [cart])

	const clearCartItems=()=>{
		dispatch(clearCart())
	}


	
	const getTotal=()=>{
	const sum = cart.reduce((prev, curr, index, array) => prev + curr.price * curr.cartQuantity, 0)
     setTotal(sum)
	}

	return (
	<div className="cartContainer fixed-right">
			<div className="p-3 d-flex justify-content-between">
				<h2 className="text-center">Cart</h2>
				<button className="closeBtn" onClick={handleMouseOut}>X</button>
			</div>

			<div className="container-fluid blackBox bg-dark">
				<p className="p-text">Free Shipping |<strong> Cash On Delivery</strong> Available</p>
			</div>

			<div className="scrollBox" style={{overFlow:'scroll', height:'450px'}}>
			
			{cart.length>0?
			<>
			<div className="container p-2">
			<button className="btn  btn-danger" style={{float:'right'}} onClick={()=>clearCartItems()}>Clear Cart</button>
			</div>
			<hr style={{marginTop:'40px'}}/>
			{cart.slice(0,10 ).map((item,index)=>
				
			<>
			<div className="cards d-flex">
				<img className="cardImg" src={item.thumbnail} alt=""/>
			
					<div className="Cartright w-100">
						<h5>{item.title}</h5>
						<div className="downBox">
				        	<QuantityBtn {...item}/>
				        	<h5 className="mt-3 p-1" >${item.price*item.cartQuantity}</h5>
						</div>
					</div>
				<div className="deleteBtn" onClick={()=>dispatch(removeItem(item.id))}>
					<MdDelete size="25"/>
				</div>
			
			</div>
			<hr style={{marginTop: '-5px'}}/>
			</>
			)}
			</>
			:<>
			
			<div className="text-center">
			<img src="https://i.ibb.co/CKkT5x9/2038854.png" style={{marginTop:'40px'}} alt="not" width="60%" height="60%"/>
			<div style={{marginTop:'80px',marginLeft: '30px'}}>
			<h5>Your Cart is Empty...!</h5>
			<button className="btn btn-success p-2" onClick={handleMouseOut}><MdShoppingBasket size="20px" style={{marginRight:'8px',marginTop:'-3px'}}/>Go Shopping</button>
			</div>
			</div>
			</>}
		</div>
		{cart.length>0?
		<>
		<div className="d-flex justify-content-between p-2">
		<h4>SUBTOTAL</h4>
		<h4>₹{total}</h4>
		</div>
		<p className="p-2" style={{fontSize:'15px',marginTop:'-15px'}}>Shipping, taxes, and discount codes calculated at checkout.</p>
		</>:<></>}
		
	</div>
	)
}