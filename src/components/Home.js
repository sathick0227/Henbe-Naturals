import React from 'react';
import {Routes,Route,Navigate} from 'react-router-dom';
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";
import Announcement from './Announcement';


export default function Home() {
	return(
		<div>
		
		<div className="fixed-top">
		<Announcement/>
		<NavBar/>
		</div>
		<Routes>
				<Route path="/" element={<Dashboard/>}/>
		</Routes>
		
		</div>
	)
}

