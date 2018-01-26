import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import BarChart from './BarChart';
import Chart from './Chart';
import Nope from './Nope';
import Art from './Art';
import Work from './Work';
import Name from './Name';
import Nav from './Nav';
import Default from './Default';

class App extends Component {
  render() {
    return (
      <div className='App'>
      	<Nav></Nav>
      	<Default></Default>
      </div>
    );
  }
}

export default App;
