import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
var mountNode = document.getElementById('root');
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<Router>
		<App />
	</Router>,
	mountNode
);
