/*
 * Personal Website
 * Copyright © 2016-2017 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT 
 * (https://github.com/mateiradu/personal-webiste/blob/master/LICENSE)
 */
import React from 'react';
import ReactDOM from 'react-dom';
import ProjectData from "../ProjectData";
import Project from '../Project';

it('renders without crashing', () => {
  const div = document.createElement('div');
  var project = new ProjectData("img_URL","title","description","project_URL");
  ReactDOM.render(<Project value={project}/>, div);
});