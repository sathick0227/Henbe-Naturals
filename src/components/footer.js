import React from 'react'
import { BsFacebook,BsTwitter,BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import './Styles/footer.css';

const link=["Home","|","About us","|","Support","|","Contact"]
export default function Footer() {
	return (
	<div className="container-fluid foot ">
		<img className="imgLogo"  src="https://imgtr.ee/images/2023/02/02/MDOJ3.png" alt="" width="250px" height="250px"/>
		<div className="row leftLeft">
			<div className="col-4 BoxBox p-5">
			<h3 className="titleTxt">HENBE NATURALS</h3>
				<p align="justify" className="p-1"> We believe in preserving the earth and its resources while promoting wellness and personal care. Join us on our mission to live a greener and more fulfilling life</p>
					<div className="d-flex mt-3">
						<IoLogoWhatsapp size="20px" color="#198754"/>
						<h6 className="ms-2">+918778077101</h6>
					</div>
					<div className="d-flex" >
						<SiGmail size="20px" color="red"/>
						<h6 className="ms-2">henbenaturalsindia@gmai.com</h6>
					</div>
					<div className="w-50 mt-3 d-flex justify-content-around">
						<BsFacebook size="30px" color="blue"/>
						<BsTwitter size="30px" color="cyan"/>
						<BsInstagram size="30px" color="rose"/>
					</div>
			</div>
			<div className="col-2 BoxBox p-5">
				<h4 className="ms-4 titleTxt">Links</h4>
				<ul>
					<li className="navs-link">Home</li>
					<li className="navs-link">About us</li>
					<li className="navs-link">Favorites</li>
					<li className="navs-link">Products</li>
					<li className="navs-link">Contact</li>
					<li className="navs-link">Track Order</li>
				</ul>
			</div>


				<div className="col-4 BoxBox p-5">
					<h4 className="titleTxt">Location</h4>
				</div>	
		</div>	
	</div>
	)
}