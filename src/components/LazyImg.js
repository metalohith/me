import React, {Component} from 'react';
import './styles/LazyImg.css';

class LazyImg extends Component{

	constructor(props){
		super(props);
		this.state={
			isLoaded:false,
			isError:false
		}
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

		const sty={
			backgroundImage:'url('+this.props.src+')',
			boxShadow: '0px 40px 40px #888888',
			order:this.props.id
		};

		if(this.state.isLoaded){
			return(
				<div className='imgCont' id={this.props.id}>
					<div className='imgBox' style={sty}>
					</div>
				</div>
			);
		}
		return(
			<div className='imgCont' id={this.props.id}>
				<div className='imgBox'>
				</div>
			</div>
		);
	}

}

export default LazyImg;