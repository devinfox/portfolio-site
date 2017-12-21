/*
 * Personal Website
 * Copyright © 2016-2017 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT 
 * (https://github.com/mateiradu/personal-webiste/blob/master/LICENSE)
 */
import React, { Component } from 'react';
import Contact from './Contact';
import * as Constants from './Constants';
import "./About.css";

/**
 * Displays a brief description of myself and contact info.
 * 
 * It calls an instance of the Contact class for the contact
 * portion.
 * 
 * @author Matei Bogdan Radu
 */
class About extends Component{
  render() {
    return (
      <div className="about-root">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 col-12 about-content">
              <h2>About</h2>
              <p className="about-p">
                I am a full-stack web developer passionate about developing an innovative future, and easing the tasks of everyday life with the advances of modern technology.
              </p>
              <p className="about-p">
              I'm currently working with technologies such as NodeJS, Express, MongoDB, Ruby on Rails, HTML5, CSS3, Javascript, and Javascript libraries like React.
              </p>
              <p className="about-p">
                Before I started coding professionally, I ran and mantained a successful photography and graphic design entrepreneurship. This experience enabled me to get familiarized with Adobe Creative Suite to a second nature.
              </p>
              <p className="about-p">
                When I'm not coding or graphic designing, I have a passion for vocal production and session engineering musician's studio sessions.
              </p>
            </div>
            <div className="col-xl-4 offset-xl-1 col-lg-5 offset-lg-1 col-md-12 col-sm-12 col-12">
              <Contact />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;