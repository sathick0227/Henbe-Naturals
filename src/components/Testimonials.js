import React from 'react'
import TestimonialsCard from './TestimonialsCard';
import "./Styles/Testimonials.css";

export default function Testimonials() {
	return (
		<div className="masterDiv">
		<div className="masterBox">
		<h2 className="text-center">Customer Reviews</h2>
		<TestimonialsCard/>
		</div>
		<div className="bg-Image">
		</div>
		
		</div>
	)
}