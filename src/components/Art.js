import React, {Component} from 'react';
import './styles/Art.css';
import artData from './assets/artData.js';
import LazyImg from './LazyImg';
import Name from './Name';

class Art extends Component {

	constructor(){
		super();
		this.state={
			isOpen:Array.apply(null,Array(artData.urls.length)).map(()=>{return false;})
		};
		this.boxModified=this.boxModified.bind(this);
	}

	boxModified(d){
		this.setState({isOpen:d});
	}

	componentWillMount(){

	}

	render(){
		var boxes= artData.urls.map((u,i)=>{
			return <LazyImg isBoxModified={this.boxModified} boxData={this.state.isOpen} src={u} id={i+1}></LazyImg>;
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


