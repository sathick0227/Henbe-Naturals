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

export default function AllProducts() {
	const Products = useSelector(state => state.product.data)
	// const [totalPosts, setTotalPosts] = useState(allData.length)
	const [currentPage, setCurrentPage] = useState(1);
	const [postPerPage, setPostPerPage] = useState(9)
	const [listData, setListData] = useState()
	// Page number which shown below in pagination button
	const [pageNumber, setPageNumber] = useState(1)
	// controlls pagination data 
	const lastIndex = pageNumber * postPerPage;
	const firstIndex = lastIndex - postPerPage;
	const [currentPosts, setCurrentPosts] = useState([]);

	useEffect(() => {
		console.log("Updated")
		let product_filter = Products.slice(firstIndex, lastIndex);
		setCurrentPosts(product_filter);
	}, [pageNumber])

	const ChangePage = (i) => {
		setCurrentPage(i);
	}

	const MyFunction = (point) => {
		setListData(point)
	}

	const CategoryData = [
		{
			"name": "hair care",
		},
		{
			"name": "skin care",
		},
		{
			"name": "health care",
		}];

	const [categoryDataState, setCategoryDataState] = useState(CategoryData)
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
						<BsFillGrid3X3GapFill size="25px" />
						<GiHamburgerMenu size="30px" className="ms-1 cursor-pointer" />
					</div>
					<p>100 results</p>
				</div>
				<div className="ProductsContainer row">
					<div className="col-2 ">
						<h3 className="ms-5 p-3">Category</h3>
						<ul className="">
							<li className={listData === 0 ? "active nav-link" : "nav-link"} onClick={() => MyFunction(0)}><span><BsArrowRightShort size="38px" /></span>ALL PRODUCTS</li>
							<hr />
							<li className={listData === 1 ? "active nav-link" : "nav-link"} onClick={() => MyFunction(1)}><span><BsArrowRightShort size="38px" /></span>HAIR CARE</li>
							<hr />
							<li className={listData === 2 ? "active nav-link" : "nav-link"} onClick={() => MyFunction(2)}><span><BsArrowRightShort size="38px" /></span>SKIN CARE</li>
							<hr />
							<li className={listData === 3 ? "active nav-link" : "nav-link"} onClick={() => MyFunction(3)}><span><BsArrowRightShort size="38px" /></span>HEALTH CARE</li>
						</ul>
					</div>
					<div className="col-10 d-flex flex-wrap">

						{currentPosts.map((e, index) =>
							<div key={index} >
								<ProductCard {...e} />
							</div>
						)}

					</div>

					<Pagination 
					totalPosts={Products.length} 
					postPerPages={postPerPage} 
					onPageSelect={data => setPageNumber(data)}
					currentPage={pageNumber} />
				</div>
			</div>
		</>
	)
}