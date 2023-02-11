import React,{useState} from 'react'
import './Styles/ChooseUs.css';
import AboutUs from './AboutUs';
import FAQ from './FAQ';

export default function ChooseUs() {
	const [tab, setTab] = useState("tab1")
	const tab1=()=>{
		setTab("tab1");
		console.log(tab)
	}
	const tab2=()=>{
		setTab("tab2")
		console.log(tab)

	}

	return (
		<div className="mainChoose">
			<ul className="nav navs" id="nav">
			<li className={tab==="tab1"?"active":""} onClick={()=>tab1()}>About Us</li>
			<li className={tab==="tab2"?"active":""} onClick={()=>tab2()}>FAQ</li>
			</ul>
			<div className="tabContent">
			{tab==="tab1"?<AboutUs/>:<FAQ/>}
			</div>
					
		</div>
	)
}