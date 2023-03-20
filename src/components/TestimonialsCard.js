import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TestimonialsCard from './TestimonialsCard';
import "./Styles/TestimonialsCard.css";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import sliderStyle from "./SliderStyle"
import 'react-awesome-slider/dist/custom-animations/fold-out-animation.css';
import { RxArrowRight } from "react-icons/rx";


const data=[ {
	"name": "Azathmohamathu",    
	"title": "Loving the Essential Oils",    
	"testimonial": "I used Coconut Soap to look great on my face. This is my fav soap",    
	"date": "2022-10-15"  
},
{
	"name": "Najumudeen Abdul",    
	"title": "High Quality Products",    
	"testimonial": "Kuppaimeni Soap is Best",    
	"date": "2022-09-20" 
},
{   "name": "Three Rose Samayal",    
"testimonial": "I used Neem Soap it give a freshness",    
"date": "2022-08-10"  
},
{   "name": "SAANN Nafi",    
"title": "Excellent Customer Service",    
"testimonial": "Coconut Soap romba usefull ah iruku enoda skin prob ellam cure aagiduchi",    
"date": "2022-08-10"  
},
{   "name": "Udhaya",    
"testimonial": "Never before use soap like this type lot of form will come in our salt condent water super keep it up",    
"date": "2022-08-10"  
},
{   "name": "Jamruth Begam",    
"title": "Excellent Customer Service",    
"testimonial": "coconut soap pudikum yenna skin whitening and moistrize ah irrukku",    
"date": "2022-08-10"  
},
{   "name": "Nabil Ahamed",    
"title": "Excellent Customer Service",    
"testimonial": "Neem soap for cure alergies Hair Oil for Hair growth",    
"date": "2022-08-10"  
},
{   "name": "Saleh Lathifa",    
"title": "Excellent Customer Service",    
"testimonial": "Papaya Soap enaku romba pudikum skin soft ah irukku ",    
"date": "2022-08-10"  
}


]

export default class Testimonials extends Component {

	
  render() {
    return (
		<>
	
    <div className="feeds">
		{data.map((e,index)=>
    <div className="col-xl-3 col-sm-12 feedBox" key={index}>
		<p>{e.testimonial}
		<span><h5>~{e.name}</h5></span>
		</p>
	</div>
	)}
	
	
    </div>
	
	
	<p className='SlideArrow'>Slide for More<RxArrowRight/></p>
	</>
    );
  }
}