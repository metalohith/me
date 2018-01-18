import React, {Component} from 'react';
import './styles/LazyImg.css';

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
		
		var bd=this.props.boxData;
		bd=bd.map((b,i)=>{if(i!=this.props.id-1){return false;}else{return b;}});
		bd[this.props.id-1]=!bd[this.props.id-1];
		this.props.isBoxModified(bd);
	}

	componentWillMount(){
		var a=[2,0,3];
		var oa=this.props.id;
		var ob=this.props.id+(a[this.props.id%3]);
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
		im.src=this.props.src;
	}

	render(){

		const cls=this.props.boxData[this.props.id-1];

		const sty1={
			backgroundImage:'url('+this.props.src+')'
		};
		const sty2={
			order:cls?this.state.orderB:this.state.orderA
		}

		if(this.state.isLoaded){
			return(
				<div className={cls?'imgContOpen':'imgCont'} id={this.props.id} style={sty2}>
					<div onClick={this.handleClick} className={cls?'imgBoxOpen':'imgBox'} style={sty1}>
					</div>
				</div>
			);
		}
		return(
			<div className={cls?'imgContOpen':'imgCont'} id={this.props.id} style={sty2}>
				<div className={cls?'imgBoxOpen':'imgBox'}>
				</div>
			</div>
		);
	}

}

export default LazyImg;