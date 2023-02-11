import React,{useEffect} from 'react'
import "./Styles/Pagination.css";

const Pagination=(props) =>{
	let pages=[];

	
		for(let i=1;i<=Math.ceil(props.totalPosts/props.postPerPages); i++){
		console.log(pages)
		if(pages){
			pages.push(i);
		}else{
			pages.length=0;
		}
		
		console.log(pages)
	}

	const clickforPagination=(i)=>{
		console.log(i)
	}

	
		
	return (
		<div className="container d-flex">
		
		{pages.map((i,index)=>
			<p className="PaginationValue" key={index} onClick={props.ChangePage(i)}>{i}</p>
		)}

		</div>
	);
};
export default Pagination;