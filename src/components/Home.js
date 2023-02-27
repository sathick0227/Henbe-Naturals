import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import Announcement from './Announcement';
import SingleProduct from './SingleProduct';
import AllProducts from './AllProducts';

export default function Home() {
	return(
		<div>
		
		
		<div>
		<Routes>
				<Route path="/" element={<Dashboard/>}/>
				<Route path="/home" element={<Dashboard/>}/>
				<Route path="/product/:id" element={<SingleProduct/>}/>	
				<Route path="/products" element={<AllProducts/>}/>
		</Routes>
		</div>
		</div>
	)
}

