import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom'

import App from './components/App';
import Nope from './components/Nope';

const Routes = () => (
  <BrowserRouter>
  	<div>
		<Route path="/board" component={App} />
    	<Route path="/nope" component={Nope} />
    </div>
   </BrowserRouter>
);

export default Routes;