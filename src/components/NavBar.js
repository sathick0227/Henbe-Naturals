import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaRegUser,FaShoppingCart,FaRegHeart,FaSearch} from "react-icons/fa";
import {FiShoppingBag}  from "react-icons/fi";
import './Styles/NavBar.css';
import CartBox from "./CartBox";

export default function NavBar() {

	const navigate =useNavigate();
	const cart=useSelector((state)=>state.product.cart)

	const [counter,setCounter] = useState();
	const [isHovering, setIsHovering] = useState(false);

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
			<div className="container-fluid pt-3 pl-3">
			<div className=" d-flex ms-5">
				
				<div className="col-3 ">
					<h4 align="justify" className="p-3 text-black">HENBE NATURALS</h4>
				</div>
				
				<div className="m-2 searchBar col-6  d-flex">
					<input type="search" name="" id="input" className="input m-2"  required="required" placeholder="Search Here"/>
					<FaSearch style={{marginRight: '15px',marginTop:'10px'}} size="20px"/>
				</div>
				
				<div className="col-3 right d-flex p-2">
					<div className="buttonBox">
					<a className="cartBtn" onClick={()=>navigate("/cart")}><FaRegUser color="#73a286"  size="20px"/></a>
					</div>
					<p align="left" className="ms-2">Hello<br/><span  className="text-success font-weight-bold" onClick={()=>navigate('/')}>Sign In</span> or <span  className="text-success font-weight-bold" onClick={()=>navigate('/')}>Register</span></p>
					<div className="buttonBox ">
					<a className="cartBtn" onClick={()=>navigate("/cart")}><FaRegHeart className="" color="#73a286" size="20px"/></a>
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