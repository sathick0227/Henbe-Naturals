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
			<div className="container-fluid  " style={{borderBottom: '3px solid #28a745'}}>
			<div className=" d-flex ms-xl-4 navbars">
				
				<div className="col-sm-3 col-xl-2 brand-logo">
					<img src={require('./images/logos.png')} alt="" onClick={()=>navigate("/")} className='logo-img pointer' />
					<h4 align="justify" className="p-3 text-black logo-txt "  onClick={()=>navigate("/")}><span className='pointer'>HENBE NATURALS</span></h4>
				</div>
				
				<div className="m-2 searchBar col-xl-3 d-flex">
					<input type="search" name="" id="input" className="input m-2"  required="required" placeholder="Search Here"/>
					<FaSearch className='search-icon' style={{marginRight: '15px',marginTop:'10px'}} size="20px"/>
				</div>
				
				<div className="col-xl-4 d-flex p-2 main-log-box">
					{!user?
					<>
					<div className="d-flex m-2" id="log-box">
					<span  className="logTxt text-success me-2 font-weight-bold pointer" onClick={()=>navigate('/login')}>Sign In</span>
					 <span className='mt-1' >or</span> 
					 <span  className=" logTxt text-success ms-2 font-weight-bold pointer" onClick={()=>navigate('/register')}>Register</span>
					 </div>
					</>:
					<>
					<p align="left" className="ms-2 pointer">Welcome<br/><a onClick={logout}>Sign Out</a></p>
					
					</>
					}
					<div className='d-flex btn-box' >
					<div className="buttonBox user_btn">
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
			
		</div>
	)
}