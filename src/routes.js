import React from 'react';
import Index from './containers/Index';
import Board from './containers/Board';
import Thread from './containers/Thread';
import { Route, Switch } from 'react-router';

const Routes= () => (
	<Switch>
		<Route exact = {true} path='/' component={Index} />
		<Route exact = {true} path='/:boardid' component={Board} />
		<Route exact = {true} path='/:boardid/thread/:threadid' component={Thread} />
	</Switch>
	
);
export default Routes;
