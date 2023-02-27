import React from 'react'
import './Styles/details.css'

export default function Details() {
	const img=[
{
	"id":1,
	"img":"https://i.ibb.co/F0FKGYJ/handmade.png",
	"text":"HANDMADE",
},
{
	"id":2,
	"img":"https://i.ibb.co/5Y35Cvp/lab.png",
	"text":"CHEMICAL FREE",
},
{
	"id":3,
	"img":"https://i.ibb.co/nB4VxLT/nature.png",
	"text":"NATURAL MADE",
},
{
	"id":4,
	"img":"https://i.ibb.co/rwSx31x/oil-1.png",
	"text":"SAFE USE",
},
{
	"id":5,
	"img":"https://i.ibb.co/nrRTyQq/result.png",
	"text":"HANDMADE",
},
{
	"id":6,
	"img":"https://i.ibb.co/gDsDjrv/skin.png",
	"text":"SKIN FRIENDLY",
},
]
	return (
		<div className="mx-auto mt-5 p-5 d-flex justify-content-around">
			<div className="handmade">
			<img src={require('./images/handmadeimg.gif')} alt="" width="100%" height="100%"/>
			</div>
			
			
		</div>
	)
}
