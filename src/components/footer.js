import React from 'react'
import { BsFacebook,BsTwitter,BsInstagram } from "react-icons/bs";

const link=["Home","|","About us","|","Support","|","Contact"]
export default function Footer() {
	return (
		<div>
			<div className="mt-3 container-fluid  d-flex justify-content-center">
					<BsFacebook className="p-1" color=" #3b5998" size="40px"/>
					<BsTwitter className="p-1" color="#20beff" size="40px"/>
					<BsInstagram className="p-1" color="#f502be" size="40px"/>
			</div>
		
		<div className="d-flex justify-content-center">
				{link.map((i,index)=>
				<ul className="navbar-nav ">
				<li className="p-2 nav-link" style={{fontSize:'15px'}}>{i}</li>
				</ul>
				)}
		</div>
		<div className="d-flex justify-content-center">
		<p>©2023 Henbe Naturals | All Riights Reserved</p>
		</div>	
		</div>
	)
}