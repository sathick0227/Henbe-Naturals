import React from 'react';
import Styled from 'styled-components';
import './Styles/Slider.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
 
 
function Slider() {
return (
    <div className='wrappers' >
      <div data-aos="zoom-in" data-aos-duration="700" className="row bgImg">
        <div data-aos="zoom-in-up" data-aos-delay="300" className="col-6">
        <img src={require('./images/sliderimg.png')} className="slider-img" alt="" width="100%"/>
        </div>
        <div data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="800" className="col-6 margin" style={{marginLeft:'-7%'}} align="justify">
        <h1 className="col-xl-12 col-sm-12 Headtxt">Boost your health naturally</h1>
        <h4>The best health starts with us</h4>
        <a href='#product-carousel'><button className="btn btn-success HeadBtn">Shop Now</button></a>
        </div>
      </div>
    </div>
  );
}

export default Slider


