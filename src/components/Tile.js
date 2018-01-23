import React, {Component} from 'react';
import './styles/Tile.css';

class LazyImg extends Component{

	constructor(props){
		super(props);
		this.state={
			isLoaded:false,
			isError:false,
			orderA:0,
			orderB:0
		};
		this.handleClick=this.handleClick.bind(this);
	}

	handleClick(){
		
		var bd=this.props.tileState;
		bd=bd.map((b,i)=>{if(i!=this.props.id-1){return false;}else{return b;}});
		bd[this.props.id-1]=!bd[this.props.id-1];
		this.props.isTileModified(bd);
	}

	componentWillMount(){
		var a=[2,0];
		var oa=this.props.id;
		var ob=this.props.id-(a[this.props.id%2]);
		this.setState({orderA:oa,orderB:ob});
	}

	componentDidMount(){
		const im=new Image();
		im.onload=()=>{
			this.setState({isLoaded:true});
		};
		im.onerror=()=>{
			this.setState({isError:true});
		};
		im.src=this.props.tileData.url;
	}

	render(){

		const cls=this.props.tileState[this.props.id-1]?false:true;

		const sty1={
			backgroundImage:'url('+this.props.tileData.url+')'
		};
		const sty2={
			order:cls?this.state.orderA:this.state.orderB
		}

		if(this.state.isLoaded){
			return(
				<div className={cls?'tileOuterCont':'tileOuterContOp'} id={this.props.id} style={sty2}>
					<div className={cls?'tileCont':'tileContOp'}>
						<div onClick={this.handleClick} className={cls?'tileTitle':'tileTitleOp'}>
							{this.props.tileData.title}
						</div>
						<div onClick={this.handleClick} className={cls?'tileBody':'tileBodyOp'}>
							{this.props.tileData.brief}
						</div>
					</div>
					<div className={cls?'tileImgCont':'tileImgContOp'}>
						<div onClick={this.handleClick} className={cls?'tileImg':'tileImgOp'} style={sty1}>
						</div>
					</div>
				</div>
			);
		}
		return(

			<div className={cls?'tileOuterCont':'tileOuterContOp'} id={this.props.id} style={sty2}>
				<div className={cls?'tileCont':'tileContOp'}>
					<div onClick={this.handleClick} className={cls?'tileTitle':'tileTitleOp'}>
						{this.props.tileData.title}
					</div>
					<div onClick={this.handleClick} className={cls?'tileBody':'tileBodyOp'}>
						{this.props.tileData.brief}
					</div>
				</div>
				<div className={cls?'tileImgCont':'tileImgContOp'}>
					<div onClick={this.handleClick} className={cls?'tileImg':'tileImgOp'}>
					</div>
				</div>
			</div>
		);
	}

}

export default LazyImg;