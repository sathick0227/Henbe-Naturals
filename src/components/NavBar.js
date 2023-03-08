import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaRegUser,FaShoppingCart,FaRegHeart,FaSearch} from "react-icons/fa";
import {FiShoppingBag}  from "react-icons/fi";
import './Styles/NavBar.css';
import CartBox from "./CartBox";
import FavoriteBox from './FavoriteBox'
import { auth,logout } from "./firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";


export default function NavBar() {
	const [user, loading, error] = useAuthState(auth);
	const [userName,setUserName] = useState()
	const navigate =useNavigate();
	const cart=useSelector((state)=>state.product.cart)
	const favorite=useSelector(state=>state.product.favorite)
	const [counter,setCounter] = useState();
	const [isHovering, setIsHovering] = useState(false);
	const [click,setClick] = useState(false);

	useEffect(() => {
		setCounter(cart.length);
		console.log(cart)
		
		
	}, [cart])

		

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
  	console.log("done")
    setIsHovering(false);
  };

  const handleClick = ()=>{
  	setClick(true);
  }
  const handleUnClick =()=>{
  	setClick(false);
  }
		
	return (
		<div className="">
			{isHovering &&(
				<div>
				<div className="blocker"  onClick={()=>handleMouseOut()}>

				</div>
				<div className="cartComponent">
				<CartBox handleMouseOut={()=>handleMouseOut()}/>
				</div>
				</div>
				)}
			{click &&(
				<div>
				<div className="blocker"  onClick={()=>handleUnClick()}>

				</div>
				<div className="cartComponent">
				<FavoriteBox handleMouseOut={()=>handleUnClick()}/>
				</div>
				</div>
				)}
			<div className="container-fluid pt-3 pl-3" style={{borderBottom: '3px solid #28a745'}}>
			<div className=" d-flex ms-5">
				
				<div className="col-3 ">
					<h4 align="justify" className="p-3 text-black cursor-pointer" onClick={()=>navigate("/")}>HENBE NATURALS</h4>
				</div>
				
				<div className="m-2 searchBar col-5  d-flex">
					<input type="search" name="" id="input" className="input m-2"  required="required" placeholder="Search Here"/>
					<FaSearch style={{marginRight: '15px',marginTop:'10px'}} size="20px"/>
				</div>
				
				<div className="col-3 right d-flex p-2">
					

					
					{!user?
					<>
					
					<span  className="text-success font-weight-bold" onClick={()=>navigate('/login')}>Sign In</span>
					 or 
					 <span  className="text-success font-weight-bold" onClick={()=>navigate('/register')}>Register</span>
					</>:
					<>
					<p align="left" className="ms-2">Welcome<br/><a onClick={logout}>Sign Out</a></p>
					
					</>
					}
					<div className="buttonBox">
					<a className="cartBtn" onClick={()=>navigate("/cart")}><FaRegUser color="#73a286"  size="20px"/></a>
					</div>

					<div className="buttonBox ">
					<a className="cartBtn" onClick={handleClick}><FaRegHeart className="" color="#73a286" size="20px"/><span className="badgebtn badge rounded-pill bg-danger">{favorite.length}</span></a>
					</div>


					<div className="buttonBox" style={{backgroundColor: '#fdf3d9'}}  >
					<a className="cartBtn"  onClick={handleMouseOver}><FiShoppingBag className="" color="#73a286" size="20px"/><span className="badgebtn badge rounded-pill bg-danger">{counter}</span></a>
					</div>
					
					
				</div>
			</div>
			</div>
			
		</div>
	)
}