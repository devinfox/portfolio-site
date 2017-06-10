import React, { Component } from 'react';
import Project from "./Project";
import ProjectData from "./ProjectData";
import "./Portfolio.css";

class Portfolio extends Component{
  render() {
    const projects = initProjects();
    return (
      <div className="portfolio-root">
        <div className="container">
          <h2>Portfolio</h2>
          Below you can see some of projects I've been working on
          <div className="row">
            <Project value={projects[0]}/>
            <Project value={projects[1]}/>
            <Project value={projects[2]}/>
            <Project value={projects[3]}/>
            <Project value={projects[4]}/>
            <Project value={projects[5]}/>
          </div>
        </div>
      </div>
    );
  }

  
  
}

function initProjects() {
    var projects = [];
    projects.push(new ProjectData("/img/projects/myunicam.png","MyUnicam","A Xamarin app for the University of Camerino.","https://www.slideshare.net/MateiBogdanRadu/myunicam-xamarin-forms-mobile-application"));
    projects.push(new ProjectData("/img/projects/unigram.png","Unigram","A UWP Telegram client for Windows 10 that runs on Desktop, Mobile and Xbox.","http://unigram.me/"));
    projects.push(new ProjectData("/img/projects/bikercompanion.png","Biker Companion","Work in progress, coming soon...","#"));
    projects.push(new ProjectData("/img/projects/mixtape.png","Mixtape","A simple Android music player.","https://github.com/mateiradu/mixtape"));
    projects.push(new ProjectData("/img/projects/unigram_me.png","unigram.me","The Unigram project landing page, made with Bootstrap v4.","http://unigram.me/"));
    projects.push(new ProjectData("/img/projects/mateiradu_me.png","mateiradu.me","This same website you're looking at, build with React and Bootstrap.","https://github.com/mateiradu/personal-website"));
    return projects;
  }

export default Portfolio;