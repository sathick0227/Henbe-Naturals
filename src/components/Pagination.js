import React, { useEffect } from 'react'
import "./Styles/Pagination.css";

const Pagination = (props) => {
	let pages = [...new Array(Math.ceil(Number(props.totalPosts) / Number(props.postPerPages)))];
	function performPagination(page) {
		console.log("performPagination: ", page)
		props.onPageSelect(page);
	}
	return (
		<div className="pagination_container">
			<center>
				{pages.map((i, index) =>
					<button disabled={props.currentPage === index + 1 ? true : false} onClick={() => performPagination(index + 1)} className={props.currentPage === index + 1 ? 'PaginationSelectedValue' : 'PaginationValue'} key={index}>{index + 1}</button>
				)}
			</center>
		</div>
	);
};
export default Pagination;