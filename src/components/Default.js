import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Art from './Art';
import Work from './Work';

class Default extends Component {
  render() {
    return (
      <div>
	    <Switch>
	      <Route exact path='/' component={Work}/>
	      <Route path='/art' component={Art}/>
	      <Route path='/work' component={Work}/>
	    </Switch>
      </div>
    );
  }
}

export default Default;
