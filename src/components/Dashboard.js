import React,{useLayoutEffect,useEffect,useState} from 'react';
import {useNavigate} from 'react-router';
import Slider from './Slider';
import CategoryCard from  './CategoryCard';
import ProductCard from './ProductCard';
import {Data} from './Data';
import { useSelector, useDispatch } from 'react-redux';
import Details from './details'
import Footer from './footer'
import {fetchData} from '../states/reducers/cartReducer'
import QuantityBtn from './QuantityBtn'
import Loader from './Loader';
import NavBar from './NavBar';
import Announcement from './Announcement';
import ChooseUs from './ChooseUs';
import Testimonials from './Testimonials';
import {ProductData} from './ProductData';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "./firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Dashboard() {
	const [user, loading, error] = useAuthState(auth);
	
	const navigate =useNavigate();
 	const dispatch = useDispatch();
	
	const widths=325;
	const TempData=useSelector(state=>state.product.data)
	// console.log(TempData);
	const [loadings, setLoadings] = useState(true)
    const [data, setData] = useState()
    const [temp,setTemp]=useState()
    const [catData,setCatData]=useState(false)
    const [category,setCategory] =useState(null)
	 // console.log(data.length)
	 // console.log(!!catData)

	useLayoutEffect(() => {
		// apiFetch();
		dispatch(fetchData(ProductData))
		setData(ProductData);


	}, [])

	
	

	 setTimeout(function(){
             setCatData(true);
        },5000); 
	
	

	const apiFetch=()=>{
		return new Promise((resolve,reject)=>{
			return fetch('https://dummyjson.com/products/')
			.then(res=>res.json())
			.then(response=>{
				dispatch(fetchData(response.products))
				setData(response.products)
				console.log(response)
				return resolve(response)
			})
			.catch(err=>{
				alert(err)
				return reject(err)
			})
		});	 	
		};
	
           

 

    const onChangeEvent=(e)=>{
    	console.log(e)
    	console.log(TempData)
    	var result = TempData.filter(item => item.category === e);
    	setData(result);
    	console.log(result)
    	
    }
    let box = document.querySelector('.product-container');

    const btnpressprev = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft - widths;
        console.log(width)
    }
    
    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + widths;
        console.log(width)
    }
    
	return (
<div>
	<div className="sticky-top" style={{zIndex:1 }}>
		<Announcement/>
		<NavBar/>
	</div>
	<Slider/>
	
		<div className="detailContainer">
			<div className="d-flex justify-content-around flex-wrap">
				{Data.map((item)=><CategoryCard {...item}/>)}
			</div>
		</div>	

	<div className="">
		<div className="proBox bg-success mt-5">
				<h4 className="col-xl-12 pt-3 d-flex justify-content-center" style={{fontWeight:'700',fontSize:'30px',color:'white'}}>PRODUCTS</h4><br/>
			<div className="d-flex justify-content-center" style={{zIndex:1 }}>
				{!!category && category.length > 0 ?category.slice(0,10 ).map((e,index)=>{
				return(
					<>
					<ul className="" key={index} onClick={()=>onChangeEvent(e)} >
					<li className="catLink nav pointer text-xl-start text-uppercase">{e}</li>
					</ul>
					</>
				)}):<></>}
			</div>

			<div className="product-carousel">
	            <button className="pre-btn" onClick={btnpressprev}><p className="p">&lt;</p></button>
	            <button className="next-btn" onClick={btnpressnext}><p className="p">&gt;</p></button>

	        	<div className="product-container">
	                  {!!catData && data.length >0 ? data.map((product,index) => {
	                    return(
	                      <ProductCard key={index} {...product}/>
	                     
	                    )   
	                  }):(
	                  <div className="loaderBox" style={{marginLeft:'43%',marginTop:'10%'}} >
	                  <Loader/>
	                  </div>)
	                }
	            </div>
		            <div className="d-flex justify-content-center">
		            	<button className="btn p-2 mt-3" style={{backgroundColor: 'orange'}} onClick={()=>navigate("/products")}>See More</button>
		        	</div>
        	</div>
		</div>
	</div>
			<ChooseUs/>
		<Details/>
		<Testimonials/>
		{/* <img src={require('./images/waves.svg')} alt="done"/> */}
		<Footer/>
</div>
	)
}

