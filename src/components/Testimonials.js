import React from 'react'
import TestimonialsCard from './TestimonialsCard';
import "./Styles/Testimonials.css";

export default function Testimonials() {
	return (
		<div className="masterDiv">
		
		<img className="reviewImg" src={require('./images/google.png')} alt="" width="20%" height="50%"/>
		<TestimonialsCard/>	
		</div>
	)
}