import React from 'react'
import { ThreeDots } from  'react-loader-spinner'

export default function Loader() {
	return (
		<div className="d-flex justify-content-center">
		<ThreeDots 
height="180" 
width="180" 
radius="10"
color="orange" 
ariaLabel="three-dots-loading"
wrapperStyle={{}}
wrapperClassName=""
visible={true}
 />
		</div>
	)
}