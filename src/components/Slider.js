import React from 'react';
import Styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
 
 const Wrapper =Styled.div`
  width:100%;
  height:650px;
   background-color:#f9f1e4;

 `
function Slider() {
return (
    <Wrapper >
      <div data-aos="zoom-in" data-aos-duration="700" className="row bgImg">
        <div data-aos="zoom-in-up" data-aos-delay="300" className="col-6">
        <img src={require('./images/sliderimg.png')} alt="" width="100%"/>
        </div>
        <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="800" className="col-6 margin" align="justify">
        <h1 className="col-xl-12 Headtxt">Boost your health naturally</h1>
        <h4>The best health starts with us</h4>
        <button className="btn btn-success HeadBtn">Shop Now</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Slider


