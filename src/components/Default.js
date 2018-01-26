import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import Art from './Art';
import Work from './Work';
import TimeLine from './TimeLine';

class Default extends Component {
  render() {
    return (
      <div>
	    <Switch>
	      <Route exact path='/' component={TimeLine}/>
	      <Route path='/art' component={Art}/>
	      <Route path='/work' component={Work}/>
	      <Route path='/timeline' component={TimeLine}/>
	    </Switch>
      </div>
    );
  }
}

export default Default;
