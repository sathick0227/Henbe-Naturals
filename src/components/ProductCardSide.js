import React,{useState} from 'react'
import Styled from 'styled-components'
import './Styles/ProductCardSide.css';
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
<div className="side_wrapper">

  <div className="side_container">

      <img className="top"  alt="" src={props.thumbnail} onClick={()=>navigate(`/product/${props.id}`)}/>
    <div className="bottom" >
      <div className="left">
          <div className="details d-flex justify-content-center">
              <span className="d-inline-block mt-2 " style={{fontSize:'20px'}} data-toggle="tooltip" title={props.title}>
                <h4>{props.title}</h4>
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
          <p className="text-success" style={{fontSize:'15px',marginLeft:'15%',fontWeight:'600',marginTop:'-10px'}}>You Save({profit}$) {discountPer}%</p>
        
         <div className="details mt-4">

            {props.stock>0?
            <>
            {!qtyBtn?<button className="btn cartBtns" onClick={()=>addToCart(props)}>Add to Cart</button>:
            <button className="btn cartViewBtns " onClick={()=>handleMouseOver()}>View Cart</button>
            }
            </>
            :<button className="btn cartBtns  btn-danger" disabled >Out of Stock</button>}
            <div style={{marginLeft:'20%',marginTop:'-9%'}}>
            {!qtyBtn?<></>:<div style={{marginLeft:'100px',marginTop:'-46px'}}><QuantityBtn {...props}/></div>}
            </div>
          </div>
      </div>


  </div>
</div>


<div className="side_inside">
  <div className="icon"><MdInfoOutline size="25px"/></div>
    <div className="contents">
      <h4 style={{fontWeight:'700'}}>Benefits</h4>
      <p align="justify" style={{fontSize:'15px',fontWeight:'600',marginLeft: '30px'}}>{props.description}</p>
    </div>
  </div>
</div>
</>
  )
}