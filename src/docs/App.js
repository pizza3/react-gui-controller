import React, { Component } from 'react';
import Example1 from './components/Example1/Example1';
import Example2 from './components/Example2/Example2';
import { Route, withRouter, Switch } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={Example1} />
				<Route path="/two" component={Example2} />
			</Switch>
		);
	}
}

export default withRouter(App);
