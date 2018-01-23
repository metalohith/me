import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './styles/Nav.css';

class Nav extends Component {

	constructor(props){
		super(props);
		this.state={
			isArt:false
		};
		this.handleClick1=this.handleClick1.bind(this);
		this.handleClick2=this.handleClick2.bind(this);
	}

	handleClick1(){
		this.setState({isArt:true})
	}
	handleClick2(){
		this.setState({isArt:false})
	}

	render(){
		return (
			<div className='navCont'>
		    	<div className='navBar'>
		    		<div className={this.state.isArt?'nav navSelected':'nav'}>
		    			<Link onClick={this.handleClick1} to='/art' className='noTextDeco'>
		    				- a r t -
		    			</Link>
		    		</div>
		    		<div className={this.state.isArt?'nav':'nav navSelected'}>
		    			<Link onClick={this.handleClick2} to='/work' className='noTextDeco'>
		    				- w o r k -
		    			</Link>
		    		</div>
				</div>
			</div>
		);
	}
}

export default Nav;