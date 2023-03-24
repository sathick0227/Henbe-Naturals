import React,{useState} from 'react'
import './Styles/SingleProduct.css';
import { FaStar } from "react-icons/fa";
import {useNavigate,useParams} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProductImageSlider from './ProductImageSlider';
import {addItem} from '../states/reducers/cartReducer';
import QuantityBtn from './QuantityBtn';
import CartBox from './CartBox';
import NavBar from './NavBar';
import Announcement from './Announcement';
import ProductCard from './ProductCard';
import Footer from './footer';

export default function SingleProduct() {
	const [isHovering, setIsHovering] = useState(false);
	const params = useParams();
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const data=useSelector(state=>state.product.data)
	const datas=useSelector(state=>state.product.cart)
	const props=data.find((e)=>e.id===parseInt(params.id));
	const discount=props.discountPercentage/100;
	const dis=Math.round(props.price*discount);
	const sellingPrice=Math.round(props.price-dis);

	console.log(params.id)
	const element = datas.find((item) => item.id === props.id);
	console.log(element)

	const addTocart=()=>{
		dispatch(addItem(props));
	};
	const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
  	console.log("done")
    setIsHovering(false);
  };

	

	return (
		<div className='container'>
		{isHovering &&(
				<div>
				<div className="blocker"  onClick={()=>handleMouseOut()}>
				</div>
				<div className="cartComponent">
				<CartBox handleMouseOut={()=>handleMouseOut()}/>
				</div>
				</div>
				)}
		<div className="sticky-top nav-bar-box" style={{zIndex:1 }}>
		<Announcement/>
		<NavBar/>
		</div>
		<div className=" mainBox-mobile"  style={{marginTop:'5%'}}>
		<div className="row ">
			<div className="imgLeft col-xl-5 col-sm-12">
				<div className="imgBoxs">
					<img className="insideImg " src={props.thumbnail} alt="" width="100%" height="100%"/>
				</div>
			</div>
			<div className="col-xl-6 col-sm-12" style={{marginLeft: '1%'}}>
			<p style={{backgroundColor:'red',textAlign:'center' ,color:'white',width:'100px',height:'25px',borderRadius:'25px'}}>Best Seller</p>
				<div className="proDetails">
					<h3>{props.title}</h3>
				</div>
					<div className="proDetails">
					<div className="rating">{props.rating}<FaStar style={{marginTop:"-4px",color:'orange',marginLeft:'2px'}} size="12px"/></div>
						{props.stock>0?<p className="ms-4">In Stock</p>:<p className="ms-4">Out of Stock</p>}
					</div>
					<div className='Single-product-description'>
						<p align="justify">{props.description}</p>
					</div>
				<hr/>
				<div className="mt-5 proDetails">
				<h6 style={{fontSize:"25px",marginTop:'-20px'}}><span style={{fontWeight:400,textDecoration: 'line-through',color:'black'}}>₹{props.price}</span></h6>
				<h6 style={{fontSize:"28px",marginTop:'-23px',marginLeft: '15px'}}><span style={{fontWeight:700,color:'red'}}>₹{sellingPrice}</span></h6>

				</div>
				<div className="mt-3 proDetails">
				<h6 style={{fontSize:"18px",marginTop:'-15px'}}>Savings: <span style={{fontWeight:700,color:'green'}}>(₹{dis}){props.discountPercentage}%</span></h6>
				</div>

				
			

		<div className="single-pro-qty-box  ">
		 <div className=" Single-product-qtyBtn">
          <QuantityBtn {...props}/>
		</div>
			<div className="Single-product-btn ">

				{props.stock > 0 ? (
            <>
              
              {!!element> 0 ? (
                <button
                  className="btn1 cartBtn1  p-2 btn btn-outline-warning"
                  onClick={()=>handleMouseOver()}>
                  Go to Cart
                </button>
              ) : (
                <button className="btn1 AddBtn  p-2 btn btn-success" onClick={addTocart}>
                  Add to Cart
                </button>
              )}
            </>
          ) : (
            <button className="btn1  p-2 btn btn-outline-danger" disabled>Out of stock</button>
          )}
		</div>	

	</div>
	<hr className="mt-4"/>
	
	
		</div>

		</div>
		
		
		</div>
		<div className='mt-5 '>
	<Footer/>
	</div>
		
		</div>
	)
}