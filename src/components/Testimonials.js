import React from 'react'
import TestimonialsCard from './TestimonialsCard';
import "./Styles/Testimonials.css";
import { Rating } from 'react-simple-star-rating';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


export default function Testimonials() {
	return (
		<div className="masterDiv" data-aos="fade-right">
		<img className="reviewImg" src={require('./images/google.webp')} alt=""/>
		<div className='container'>
		<div className=' row'>
			<div className='col-lg-12'>
				<div className='text-center title-anim aos-init aos-animate' data-aos="fade-right" data-aos-delay="500">
					<div className='header'>Customers Review</div>
					<div className='subHead'>
						<span>Rating:4.3</span>
					<Rating initialValue="4.3" size="22" readonly allowFraction/>
					<a style={{textDecoration:'underline'}} href="https://www.google.com/maps/place/Hifi+Naturals/@10.760543,79.1437994,17z/data=!4m15!1m8!3m7!1s0x3baab9f769cfb723:0x733dd4d5b470c121!2sHifi+Naturals!8m2!3d10.760543!4d79.1459881!10e4!16s%2Fg%2F11gsbp8cxv!3m5!1s0x3baab9f769cfb723:0x733dd4d5b470c121!8m2!3d10.760543!4d79.1459881!16s%2Fg%2F11gsbp8cxv">Google Review</a>
					</div>
				</div>
			</div>
		</div>
		<div style={{overflow:'hidden'}}>
		<div className='masterBox'>
		<TestimonialsCard/>	
		</div>
		</div>
		
		</div>
		</div>
	)
}