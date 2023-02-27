import React,{useState,useEffect} from 'react'
import { BsHeart,BsFillHeartFill } from "react-icons/bs";
import './Styles/FavoriteBtn.css'
import {addfavourite} from '../states/reducers/cartReducer'
import { useSelector, useDispatch } from 'react-redux';



export default function FavoriteBtn(props) {
	const favorite=useSelector(state=>state.product.favorite)
	const dispatch = useDispatch();
	const [select, setSelect] = useState(false)

	useEffect(() => {
		getValue(props)
	}, [favorite])

	const add=()=>{
		if(favorite.length>0){
			setSelect(false)
			dispatch(addfavourite(props));
		}else{
			setSelect(true)
			dispatch(addfavourite(props));
		}
		}	
	
	const getValue=(qty)=>{
		const item = favorite.map((e)=>{
			if(qty.id===e.id){
				setSelect(e.favorite)
			}
		})


	}

	
	
	return (
		<div className="heart_circle">
			{!select?<><BsHeart size="22px" onClick={()=>add()}/></>:<><BsFillHeartFill onClick={()=>add()} size="22px" color="red"/></>}
		</div>
	)
}