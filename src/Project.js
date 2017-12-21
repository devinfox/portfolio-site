/*
 * Personal Website
 * Copyright © 2016-2017 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT 
 * (https://github.com/mateiradu/personal-webiste/blob/master/LICENSE)
 */
import React, { Component } from 'react';
import "./Project.css";
import Import, { Button, Row, Col, Card } from 'react-materialize'
import Center from 'react-center';
/**
 * Represents a single project card with all the essential data.
 * 
 * It uses an instance of ProjectData to populate the info.
 * 
 *
 */
class Project extends Component {
    render() {
        return (
          <div>
              <Card>
              <img className="card d-flex" src={this.props.value.img} alt="Card cap"/>
                <h4 className="project-title card-title">{this.props.value.title}</h4>
                <p className="card-text">{this.props.value.descr}</p>
                  <Center>
                <Button to={this.props.value.link}>Check it out</Button><br></br>
                <Button className="right" to={this.props.value.git}>View The Source</Button>
                  </Center>
                  </Card>
          </div>
        )
    }
}

export default Project;
