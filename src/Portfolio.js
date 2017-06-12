/*
 * Personal Website
 * Copyright © 2016-2017 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT 
 * (https://github.com/mateiradu/personal-webiste/blob/master/LICENSE)
 */
import React, { Component } from 'react';
import Project from "./Project";
import ProjectData from "./ProjectData";
import "./Portfolio.css";

/**
 * Responsable for displaying my projects.
 * 
 * It uses an array of ProjectData to pass as arguments when
 * creating Project istances.
 * 
 * @author Matei Bogdan Radu
 */
class Portfolio extends Component{
  render() {
    var projects = initProjects();
    // Recursively create Project components.
    var projectComponents = projects.map(project =>
    <Project value={project}/>
);

    return (
      <div className="portfolio-root">
        <div className="container">
          <h2>Portfolio</h2>
          Below you can see some of projects I've been working on
          <div className="row">{projectComponents}</div>
        </div>
      </div>
    );
  }
}

/**
 * Initialized the Project array.
 * 
 * It collects the data from a local JSON file. 
 * 
 * @returns {Array} collection of Projects.
 */
function initProjects() {
  var projects = [];
  var data = require('./ProjectData.json');
  for(var i = 0; i < data.length; i++) {
    var projectJSON = data[i];
    projects.push(new ProjectData(projectJSON.img, 
                                  projectJSON.title, 
                                  projectJSON.descr, 
                                  projectJSON.link));
  }
  return projects;
}

export default Portfolio;