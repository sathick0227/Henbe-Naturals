import React from 'react'
import './Styles/CartBox.css'
import { useSelector, useDispatch } from 'react-redux';
import QuantityBtn from './QuantityBtn';
import { MdDelete } from "react-icons/md";
import {removeItem} from '../states/reducers/cartReducer';

export default function CartBox({handleMouseOut}) {
	  const cart=useSelector(state=>state.product.cart)
	const dispatch = useDispatch();


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
			{cart.slice(0,10 ).map((item,index)=>
			<>
			<div className="cards d-flex">
				<img className="cardImg" src={item.thumbnail} alt=""/>
			
					<div className="Cartright w-100">
						<h5>{item.title}</h5>
						<div className="downBox">
				        	<QuantityBtn {...item}/>
				        	<h5 className="mt-3 p-1" >${item.price}</h5>
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
			:<>Cart is Empty</>}
		</div>	
	</div>
	)
}