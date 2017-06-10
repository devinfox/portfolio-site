import React from 'react';
import ReactDOM from 'react-dom';
/* Custom components */
// import Navbar from './Navbar';
import Header from './Header';
import About from './About';
import Portfolio from './Portfolio';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Render all site section components.
// ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<About />, document.getElementById('about'));
ReactDOM.render(<Portfolio />, document.getElementById('portfolio'));
ReactDOM.render(<Footer />, document.getElementById('footer'));

// TODO: what is this? investigate.
registerServiceWorker();
