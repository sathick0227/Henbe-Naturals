import React from 'react'
import './Styles/details.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export default function Details() {
	

	return (
		<>
		<div className='detail-Box'>
		<div data-aos="flip-down"  className="BoxHand mx-auto mt-5 p-5 d-flex justify-content-around">

			<div className="handmade"  data-aos="fade-up" data-aos-duration="500">
			<img src={require('./images/handmadeimg.gif')} alt="" width="100%" height="100%"/>
			<h5>Handmade</h5>
			</div>
			
			<div className="handmade" data-aos="fade-up" data-aos-duration="500">
			<img src={require('./images/chemical.gif')} alt="" width="100%" height="100%"/>
			<h5>Chemical Free</h5>
			</div>

			<div className='handmade'  data-aos="fade-up" data-aos-duration="500" style={{width:'150px'}}>
				<img src={require('./images/benifits.png')} alt="" width="100%" height="100%" />
			</div>


			<div className="handmade" data-aos="fade-up" data-aos-duration="500">
			<img src={require('./images/nature.gif')} alt="" width="100%" height="100%"/>
			<h5>Natural</h5>
			</div>
			
			{/* <div className="handmade" data-aos="fade-up" data-aos-duration="500">
			<img src={require('./images/nature2.gif')} alt="" width="100%" height="100%"/>
			<h5>Skin Friendly</h5>
			</div> */}

			<div className="handmade" data-aos="fade-up" data-aos-duration="500">
			<img src={require('./images/leaf.gif')} alt="" width="100%" height="100%"/>
			<h5>Eco Friendly</h5>
			</div>
		</div>
		</div>
		</>
	)
}
