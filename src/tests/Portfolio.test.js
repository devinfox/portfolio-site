/*
 * Personal Website
 * Copyright © 2016-2017 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT 
 * (https://github.com/mateiradu/personal-webiste/blob/master/LICENSE)
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from '../Portfolio';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Portfolio />, div);
});