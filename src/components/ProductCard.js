import React,{useState} from 'react'
import Styled from 'styled-components'
import './Styles/ProductCard.css';
import { useSelector, useDispatch } from 'react-redux';
import QuantityBtn from './QuantityBtn';
import { Rating } from 'react-simple-star-rating';
import {addItem} from '../states/reducers/cartReducer'
import { MdOutlineShoppingCart, MdInfoOutline } from "react-icons/md";
import {useNavigate} from 'react-router';
import CartBox from './CartBox';


  
export default function (props){
  const [isHovering, setIsHovering] = useState(false);
  const navigate =useNavigate();
  const testCart=useSelector(state=>state.product.data)
  const cartChart=useSelector(state=>state.product.cart)
  // console.log(testCart)
  const dispatch = useDispatch();
  const discount=props.discountPercentage/100;
  const dis=Math.round(props.price*discount);
  const sellingPrice=Math.round(props.price-dis);
  const profit=props.price-sellingPrice;
  const discountPer=Math.round(props.discountPercentage);

  const [qtyBtn, setQtyBtn] = useState(false)
  
  const addToCart=()=>{

  setQtyBtn(true);
  dispatch(addItem(props));
  }

  setTimeout(function(){
             setQtyBtn(false);
        },100000); 
const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    console.log("done")
    setIsHovering(false);
  };

    
    
	return (
    <>
    {isHovering &&(
        <div>
        <div className="blocker"  onClick={()=>handleMouseOut()}>
        </div>
        <div className="cartComponent">
        <CartBox handleMouseOut={()=>handleMouseOut()}/>
        </div>
        </div>
        )}
<div className="wrapper"  >
  <div className="container " >
    <img className="top"  alt="" src={props.thumbnail} onClick={()=>navigate(`/product/${props.id}`)}/>
    <div className="bottom" >
      <div className="left">
        <div className="details d-flex justify-content-center">
            <span className="d-inline-block p-2 " style={{fontSize:'20px'}} data-toggle="tooltip" title={props.title}>
              <p>{props.title.substring(0,20)}</p>
            </span>
        </div>
            <div className="d-flex details justify-content-center">
                <Rating initialValue={props.rating} size="20" readonly allowFraction/>
                <p style={{marginTop:'5px',color:'grey'}}>| {props.rating} reviews</p>
            </div>
        <div className="details d-flex justify-content-center mt-1">
            <p className="price">${props.price}</p>
            <p className="price1" >${sellingPrice}</p>
        </div>
            <p className="text-success" style={{fontSize:'15px',marginLeft:'14%',fontWeight:'600'}}>You Save({profit}$) {discountPer}%</p>
      </div>
      <div className="details">
        {props.stock>0?
        <>
        {!qtyBtn?<button className="btn cartBtns" onClick={()=>addToCart(props)}>Add to Cart</button>:
        <button className="btn cartViewBtns " onClick={()=>handleMouseOver()}>View Cart</button>
        }
        </>
        :<button className="btn  btn-danger" disabled >Out of Stock</button>}
        <div style={{marginLeft:'20%',marginTop:'-9%'}}>
        {!qtyBtn?<></>:<div style={{marginLeft:'40px',marginTop:'-10px'}}><QuantityBtn {...props}/></div>}
        </div>
      </div>
    </div>
  </div>
<div className="inside">
  <div className="icon"><MdInfoOutline size="25px"/></div>
    <div className="contents">
      <h4 style={{fontWeight:'700'}}>Benefits</h4>
      <p align="justify" style={{fontSize:'15px',fontWeight:'600'}}>{props.description}</p>
    </div>
  </div>
</div>
	</>
  )
}