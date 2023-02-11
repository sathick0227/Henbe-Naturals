import React from 'react'
import Styled from 'styled-components'
import "./Styles/CategoryCard.css";

	const Content=Styled.div`
		 background-color: rgb(0,0,0); 
		  background-color: rgba(0,0,0, 0.7);
		  color: white;
		  font-weight: bold;
		  position: absolute;
		  transform: translate(-50%, -50%);
		  z-index: 2;
		  width: 100%;
		  padding: 8px;
		  text-align: center;
		  position: absolute;
		  top: 85%;
		  left: 50%;
		  transform: translate(-50%, -50%);
	`
	

export default function CategoryCard(props) {
	
	return (
	<>
		<div className="containers" >
			<img id="CatImg" src={props.images} />
			<div className=" dark mb-2" id="hide">
			
			<h2 className="h1f bg-text font-weight-bold">{props.title}</h2>
		
			</div>
		</div>
	</>
	)
}