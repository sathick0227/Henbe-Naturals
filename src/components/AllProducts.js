import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import NavBar from './NavBar';
import Announcement from './Announcement'
import './Styles/AllProducts.css'
import { BsFillGrid3X3GapFill, BsArrowRightShort } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { ProductData } from "./ProductData";
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Footer from './footer';
import ProductCardSide from './ProductCardSide';

export default function AllProducts() {
	// product card grid view changing state
	const [grid, setGrid] = useState(true)
	const Products = useSelector(state => state.product.data)
	const [productsLength, setProductsLength] = useState(Products.length);
	const [postPerPage, setPostPerPage] = useState(9)
	const [listData, setListData] = useState()
	// Page number which shown below in pagination button
	const [pageNumber, setPageNumber] = useState(1)
	// controlls pagination data 
	const lastIndex = pageNumber * postPerPage;
	const firstIndex = lastIndex - postPerPage;
	const [currentPosts, setCurrentPosts] = useState([]);
	const Category =["All Products",
  "smartphones",
  "laptops",
  "fragrances",
  "skincare",
  "groceries",
  "home-decoration",
  "furniture",
  "tops",
  "womens-dresses",
  "womens-shoes",
  "mens-shirts",
  "mens-shoes",
  "mens-watches",
  "womens-watches",
  "womens-bags",
  "womens-jewellery",
  "sunglasses",
  "automotive",
  "motorcycle",
  "lighting"
]
	const filterData=(e)=>{
		
	}
	let filter = Products.slice(firstIndex, lastIndex);
	useEffect(() => {
		setListData();
		console.log("Updated")
		let product_filter = Products.slice(firstIndex, lastIndex);
		setCurrentPosts(product_filter);
		setProductsLength(Products.length)
	}, [pageNumber])

	const GridChange = () =>{
		if(grid){
			setGrid(false)
		}else{
			setGrid(true)
		}
	}

	const MyFunction = (point) => {
		if(point==="All Products"){
			setCurrentPosts(filter)
			setListData(point);
			setProductsLength(Products.length)
		}else{
			const result=Products.filter(item => item.category === point);
			setCurrentPosts(result);
			setListData(point);
			setProductsLength(result.length)
		}
	}
	return (
		<>
			<Announcement />
			<NavBar />
			<div className="HeaderTitile">
				<h2 >Products</h2>
			</div>
			<div className="detailContainer">
				<div className="gridBox">
					<div>
						<button className={!!grid?"active grid_btn":"grid_btn"} onClick={()=>GridChange()}><BsFillGrid3X3GapFill size="25px" /></button>
						<button className={!grid?"active grid_btn":"grid_btn"} onClick={()=>GridChange()}><GiHamburgerMenu size="30px" className="ms-1 cursor-pointer" /></button>
					</div>
					<p className="align-self-center mt-3">{productsLength} Items</p>
				</div>
				<div className="ProductsContainer p-5 row">
					<div className="col-3 ">
						<h3 className="ms-5 p-3">Category</h3>
						{Category.map((item,index)=>
							<ul className="">
							<li key={index} className={listData === item ? "active nav-link text-uppercase" : "nav-link text-uppercase"} onClick={() => MyFunction(item)}><span><BsArrowRightShort size="38px" /></span>{item}</li>
							<hr />
						</ul>)}
						
					</div>
					<div className="col-9 d-flex flex-wrap justify-content-start align-content-start">
					{!!grid?
					<>
						{currentPosts.length>0 ?
						<>
						 {currentPosts.map((e, index) =>
						 	<ProductCard key={index}  {...e} />
						)}
						 </>:<div className="d-flex align-self-center No_Products"><h4>Opps...! Products unavailable in this category</h4></div>
						}
					</>:
					<>
						{currentPosts.length>0 ?
						<>
						 {currentPosts.map((e, index) =>
						 	<ProductCardSide key={index}  {...e} />
						)}
						 </>:<div className="d-flex align-self-center No_Products"><h4>Opps...! Products unavailable in this category.</h4></div>
						}
					</>
					}
					</div>

					<Pagination 
					totalPosts={productsLength} 
					postPerPages={postPerPage} 
					onPageSelect={data => setPageNumber(data)}
					currentPage={pageNumber} />
				</div>
			</div>
			<Footer/>
		</>
	)
}