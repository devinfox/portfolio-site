import React, { Component } from 'react';
import ProjectData from "./ProjectData";
import "./Project.css";

class Project extends Component {
    render() {
        return (
          <div className="project-root col-xl-4 col-lg-4 col-md-6 col-sm-6">
            <div className="project-card card">
              <div className="project-card-img-fill">
                <img className="card-img-top" src={this.props.value.img} alt="Card image cap"/>
              </div>
              <div className="project-block card-block">
                <h4 className="project-title card-title">{this.props.value.title}</h4>
                <p className="card-text">{this.props.value.descr}</p>
                <a className="project-btn btn btn-primary" href={this.props.value.link}>Check it out</a>
              </div>
            </div>
          </div>
        );
    }
}



export default Project;