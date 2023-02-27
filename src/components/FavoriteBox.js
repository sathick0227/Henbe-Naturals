import React from 'react'
import './Styles/CartBox.css'
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate} from 'react-router';
import QuantityBtn from './QuantityBtn';
import { MdDelete,MdShoppingBasket } from "react-icons/md";
import {removeFavItem,clearFav} from '../states/reducers/cartReducer';

export default function FavoriteBox({handleMouseOut}) {
	const favorite=useSelector(state=>state.product.favorite)
	const dispatch = useDispatch();
	const navigate= useNavigate();
	const clearFavorite=()=>{
		dispatch(clearFav());
	}
	return (
	<div className="cartContainer fixed-right">
			<div className="p-3 d-flex justify-content-between">
				<h2 className="text-center">Favourite</h2>
				<button className="closeBtn" onClick={handleMouseOut}>X</button>
			</div>

			<div className="container-fluid blackBox bg-dark">
			</div>



			<div className="scrollBox" style={{overFlow:'scroll', height:'450px'}}>
	{favorite.length>0?
			<>
			<div className="container p-2">
			<button className="btn  btn-danger" style={{float:'right'}} onClick={()=>clearFavorite()}>Clear all</button>
			</div>
		{favorite.slice(0,10 ).map((item,index)=>
			<>

			<div className="cards d-flex">
				<img className="cardImg" src={item.thumbnail} alt=""/>
			
					<div className="Cartright w-100">
						<h5>{item.title}</h5>
						<div className="downBox">
				        	
				        	<h5 className="mt-3 p-1" >${item.price}</h5>
						</div>
					</div>
				<div className="deleteBtn" onClick={()=>dispatch(removeFavItem(item.id))}>
					<MdDelete size="25"/>
				</div>
			
			</div>
			<hr style={{marginTop: '-5px'}}/>
			</>
			)}
			</>
			:<>
			<div className="text-center">
			<img src="https://i.ibb.co/QvfS50q/empty-cart-icon.png" style={{marginTop:'5px'}} alt="not" width="80%" height="80%"/>
			<div style={{marginTop:'25px',marginLeft: '30px'}}>
			<h5>Your Favourites Bag is Empty...!</h5>
			<button className="btn btn-success p-2" onClick={handleMouseOut}><MdShoppingBasket size="20px" style={{marginRight:'8px',marginTop:'-3px'}}/>Go Shopping</button>
			</div>
			</div>
			</>}
		</div>	
	</div>
	)
}

