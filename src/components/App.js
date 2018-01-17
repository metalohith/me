import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import BarChart from './BarChart';
import Chart from './Chart';
import Nope from './Nope';
import Art from './Art';

class App extends Component {
  render() {
    return (
      <div className='App'>
      	<Art></Art>
      </div>
    );
  }
}

export default App;
