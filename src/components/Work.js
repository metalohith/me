import React, {Component} from 'react';
import './styles/Work.css';
import workData from './assets/workData.js';
import Tile from './Tile';
import Name from './Name';

class Work extends Component {

	constructor(){
		super();
		this.state={
			isOpen:Array.apply(null,Array(workData.da.length)).map(()=>{return false;})
		};
		this.tileModified=this.tileModified.bind(this);
	}

	tileModified(d){
		this.setState({isOpen:d});
	}

	componentWillMount(){

	}

	render(){
		var tiles= workData.da.map((d,i)=>{
			return <Tile isTileModified={this.tileModified} tileState={this.state.isOpen} tileData={d} id={i+1}></Tile>;
		});

		return ([
			<div className='tileSetCont'>
				<div className='innerTileSetCont'>
					{tiles}
				</div>
			</div>
		]);
	}
}

export default Work;


