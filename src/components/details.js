import React from 'react'
import './Styles/details.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export default function Details() {
	

	return (
		<div data-aos="flip-down"  className="BoxHand mx-auto mt-5 p-5 d-flex justify-content-around">
			<img src={require('./images/waves.svg')} alt="" />
			<div className="handmade">
			<img src={require('./images/handmadeimg.gif')} alt="" width="100%" height="100%"/>
			<h5>Handmade</h5>
			</div>
			
			<div className="handmade">
			<img src={require('./images/chemical.gif')} alt="" width="100%" height="100%"/>
			<h5>Chemical Free</h5>
			</div>

			<div className="handmade">
			<img src={require('./images/nature.gif')} alt="" width="100%" height="100%"/>
			<h5>Natural</h5>
			</div>
			
			<div className="handmade">
			<img src={require('./images/nature2.gif')} alt="" width="100%" height="100%"/>
			<h5>Skin Friendly</h5>
			</div>

			<div className="handmade">
			<img src={require('./images/leaf.gif')} alt="" width="100%" height="100%"/>
			<h5>Eco Friendly</h5>
			</div>
		</div>
	)
}
