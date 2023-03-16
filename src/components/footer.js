import React from 'react'
import { BsFacebook,BsTwitter,BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import './Styles/footer.css';

const link=["Home","|","About us","|","Support","|","Contact"]
export default function Footer() {
	return (
		
	<div className="container-fluid foot bg-success  ">
		<div className="custom-shape-divider-top-1678271089">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
    </svg>
</div>

		<div className="foot-box-top" >
		<img className="imgLogo"  src={require('./images/logos.png')} alt="" />
		<div className="row leftLeft">
			<div className="col-xl-4 BoxBox p-xl-5">
			<h3 className="titleTxt">HENBE NATURALS</h3>
				<p align="justify" className="p-1 foot-detail"> We believe in preserving the earth and its resources while promoting wellness and personal care. Join us on our mission to live a greener and more fulfilling life</p>
					
					
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


				<div className="col-xl-4 BoxBox-icon p-xl-5">
					<h4 className="titleTxt">Follow us</h4>
					<div className='icon-box'>
					<ul className="ul">
						<li className='li'>
							<a href="https://www.facebook.com/HifiNaturals?mibextid=ZbWKwL"><i className="fab fa-facebook-f icons"></i></a>
						</li>
						<li className='li'>
							<a href="https://twitter.com/sathick0227?t=WCFJYhIbI2CJic_5Ir7MqA&s=09"><i className="fab fa-twitter icons"></i></a>
						</li>
						<li className='li'>
							<a href="https://instagram.com/hifinaturals?igshid=ZDdkNTZiNTM="><i className="fab fa-instagram icons"></i></a></li>
						<li className='li'>
							<a href="mailto:henbenaturals@gmail.com"><i className="fab fa-google icons"></i></a></li>
					</ul>
					</div>
				</div>	
				<div className='mobile-footer-detail text-center'>
				<h4>Henbe Naturals</h4>
				<p className=''> We believe in preserving the earth and its resources while promoting wellness and personal care. Join us on our mission to live a greener and more fulfilling life</p>
				</div>
		</div>	
		</div>
		<div className='d-flex justify-content-center'>
			<div className='row foot-subscribe d-flex justify-content-between '>
				<div className='p-xl-4 d-flex align-items-center hide-in-mobile col-lg-6 col-md-6 col-sm-6'>
						<img src={require('./images/whatsapp.png')} alt="mno" className='sub-icon'/>
					<div className='colxl-12 col-sm-12 text-white mobile-view-txt'>
						<h3>Subscribe to our WhatsApp Channel</h3>
						<h6>Stay connected for More Exclusive Offers.</h6>
					</div>
				</div>
				<div className='col-lg-6 col-md-6 col-sm-6 d-flex full-box-whatsapp'>
				<div className='number-bar d-flex '>
					<div className='flag '>
						<img className='flag-img' src={require('./images/flag.png')} alt="mno" width="100%" height="100%"/>	
					</div>
					<div style={{marginTop:'12px',fontSize:'18px'}}>
						<p>+91</p>
					</div>
						<input type="text" className="input-sub" name="mobile" placeholder='Enter your Phone Number' maxLength={10}/>
				</div>
				<div>
				<button className='btn btn-danger sub-btn'>Subscribe</button>
				<button className='btn btn-danger mobile-sub-btn'>✓</button>
				</div>
				</div>
				
			</div>
			
		</div>
		<hr/>
		<div className='text-center copyrights'>
			<p >© 2022 - 2023 All rights reserved by Henbe Naturals</p>
		</div>
	</div>
	)
}