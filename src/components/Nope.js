import React, { Component } from 'react';
import './styles/App.css';
import './styles/Nope.css';
import logo from './assets/logo.png'

class Nope extends Component {
  render() {
    return (
    	<div className='logoCont'>
			<div className='logoBg'>
				<img className='logo' src={logo}></img>
			</div>
		</div>
    );
  }
}

export default Nope;



//background: linear-gradient(145deg,#fdba6d,#f13ca4);