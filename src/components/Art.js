import React, {Component} from 'react';
import './styles/Art.css';
import artData from './assets/artData.js';
import LazyImg from './LazyImg';
import Name from './Name';

class Art extends Component {

	constructor(){
		super();
		this.state={

		};
	}

	componentWillMount(){

	}

	render(){
		var boxes= artData.urls.map((u,i)=>{
			return <LazyImg src={u} id={i+1}></LazyImg>;
		});

		return ([
			<Name></Name>,
			<div className='boxCont'>
				<div className='innerBoxCont'>
					{boxes}
				</div>
			</div>
		]);
	}
}

export default Art;


