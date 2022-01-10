import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import ReactGA from 'react-ga';

const TRACKING_ID = "G-GRE5XXJP3H";
ReactGA.initialize(TRACKING_ID);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

