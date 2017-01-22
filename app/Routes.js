import React from 'react';
import ReactRouter from 'react-router';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';
import Main from './Main';
import Home from './Home';
import Details from './Details';
import NotFound from './NotFound';




var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
    	<IndexRoute component={Home} />
		<Route path='details' component={Details}/>
      	<Route path='*' component={NotFound} />
    </Route>
  </Router>
);


export default routes;
