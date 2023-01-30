import React,{useLayoutEffect,useEffect,useState} from 'react'
import Slider from './Slider';
import CategoryCard from  './CategoryCard';
import ProductCard from './ProductCard';
import {Data} from './Data';
import { useSelector, useDispatch } from 'react-redux';
import Details from './details'
import Footer from './footer'
import {fetchData} from '../states/actionCreaters/actionCreaters'
import QuantityBtn from './QuantityBtn'
import Loader from './Loader';
export default function Dashboard() {
 	
  const dispatch = useDispatch();
	const images = [
  { url: "./1.jpg" },
  { url: "./1.jpg" },
  { url: "./1.jpg" },
];
	const TempData=useSelector(state=>state.product.data)
	// console.log(TempData);
	const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const [temp,setTemp]=useState()
    const [catData,setCatData]=useState(false)
    const [category,setCategory] =useState(null)
	 // console.log(data.length)
	 // console.log(!!catData)

	useLayoutEffect(() => {
		apiFetch();
		setData(TempData);

	}, [])

	 setTimeout(function(){
             setCatData(true);
        },1500); 
	
	

	const apiFetch=()=>{
	fetch('https://dummyjson.com/products')
            .then((res)=>res.json())
            .then(response=>{
            	(
            		dispatch(fetchData(response.products))
            	)
            	(
            		setData(response.products)
            	)
            })
            
    fetch("https://dummyjson.com/products/categories")
			.then(res=>res.json())
			.then(response=>{setCategory(response)})
	}

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
        box.scrollLeft = box.scrollLeft - width;
        console.log(width)
    }
    
    const btnpressnext = () => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
        console.log(width)
    }
    
	return (
	<div>
			<QuantityBtn/>
			<Slider images={images}/>
			<div className="d-flex justify-content-around flex-wrap">
			{Data.map((item)=><CategoryCard {...item}/>)}
			</div>
			
			<div className="proBox bg-success mt-5">
			<h4 className="col-xl-12 pt-3 d-flex justify-content-center" style={{fontWeight:'700',fontSize:'30px',color:'white'}}>PRODUCTS</h4><br/>
			<div className="d-flex justify-content-center ">
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
	            <button className="btn p-2 mt-3" style={{backgroundColor: 'orange'}}>See More</button>
	        	</div>
        	</div>
		</div>
		<Details/>
		<Footer/>
	</div>
	)
}

