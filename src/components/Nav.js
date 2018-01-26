import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './styles/Nav.css';

class Nav extends Component {

	constructor(props){
		super(props);
		this.state={
			isOpen:false
		};
		this.handleClick=this.handleClick.bind(this);
	}

	handleClick(){
		this.setState({isOpen:!this.state.isOpen});
	}

	render(){
		return (
			<div>
			<div onClick={this.handleClick} className={this.state.isOpen?'navBut navCross':'navBut'}>
				<div className='navBut1'></div>
				<div className='navBut2'></div>
			</div>
			<div className={this.state.isOpen?'navMask navOpenFull':'navMask'}>
			</div>
			<div className={this.state.isOpen?'navLayer navOpen':'navLayer'}>
				<div className={this.state.isOpen?'navArt navChildShow':'navArt'}>
					<Link onClick={this.handleClick} to='/art' className='noTextDeco'>
		    			A&nbsp;r&nbsp;t
		    		</Link>
				</div>
				<div className={this.state.isOpen?'navTime navChildShow':'navTime'}>
					<Link onClick={this.handleClick} to='/timeline' className='noTextDeco'>
		    			T&nbsp;i&nbsp;m&nbsp;e&nbsp;l&nbsp;i&nbsp;n&nbsp;e
		    		</Link>
				</div>
				<div className={this.state.isOpen?'navName navChildShow':'navName'}>
					&nbsp;L&nbsp;O&nbsp;H&nbsp;I&nbsp;T&nbsp;H&nbsp;
					<div className='navEmail'>
					&nbsp;lohith.warlock@gmail.com
					</div>
				</div>
			</div>
			<div className={this.state.isOpen?'navLayer1 navOpen':'navLayer1'}>
			</div>
			<div className={this.state.isOpen?'navLayer2 navOpen':'navLayer2'}>
			</div>
			<div className={this.state.isOpen?'navLayer3 navOpen':'navLayer3'}>
			</div>
			<div className={this.state.isOpen?'navLayer4 navOpen':'navLayer4'}>
			</div>
			</div>
		);
	}
}

export default Nav;

