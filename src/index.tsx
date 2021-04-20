import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';

import './index.css';

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    <Route component={App} path="/" exact />
  </Router>,
  document.getElementById('root')
);
