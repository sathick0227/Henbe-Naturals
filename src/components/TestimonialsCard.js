import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TestimonialsCard from './TestimonialsCard';
import "./Styles/TestimonialsCard.css";

const data=[ {
	"name": "Emily Green",    
	"title": "Loving the Essential Oils",    
	"testimonial": "I've been using the essential oils for a few weeks now and I am absolutely in love with them. They have such a fresh and natural scent and make my home smell amazing. I also love that they are all-natural and chemical-free. I will definitely be a repeat customer!",    
	"date": "2022-10-15"  
},
{
	"name": "Jacob Brown",    
	"title": "High Quality Products",    
	"testimonial": "I've been using the nature products for a few months now and I am so impressed with the quality. The products are made with all-natural ingredients and are free from harsh chemicals. I have also noticed a huge improvement in my skin since switching to these products. I highly recommend them!",    
	"date": "2022-09-20" 
},
{   "name": "Sarah Johnson",    
"title": "Excellent Customer Service",    
"testimonial": "I had a great experience with this company's customer service. I had a question about one of the products and the representative was incredibly helpful and knowledgeable. I was so impressed with the level of service I received and I will definitely be a repeat customer!",    
"date": "2022-08-10"  
}]

export default class Testimonials extends Component {
  render() {
    return (
    
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
      {data.map((item)=>
        <div className="mainDiv">
          <img src="https://cdn-icons-png.flaticon.com/512/219/219986.png" />
          <div className="myCarousel">
            <h3>{item.name}</h3>
            <h6>{item.title}</h6>
            <p>{item.testimonial}</p>
          </div>
        </div>
        )}
        

        
      </Carousel>
    );
  }
}