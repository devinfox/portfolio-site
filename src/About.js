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
                I am a {Constants.age}-year-old software developer passionate about software and 
                technology in general.
              </p>
              <p className="about-p">
                I'm mainly interested in mobile and web development but, if a project is truly 
                interesting, I will adapt to other roles just to make it happen.
              </p>
              <p className="about-p">
                Since I discovered Linux in 2010 I've been very attached to the open-source 
                community and I continue to promote the movement. In the latest years, I've 
                been open sourcing as much as I can and also been contributing to existing 
                projects, like <a href="https://github.com/UnigramDev">Unigram</a>. Check out 
                my <a href="https://github.com/mateiradu">Github</a> and see my contributions.
              </p>
              <p className="about-p">
                When I'm not coding I love go for a ride with my motorcycle, go out for a 
                delicious pizza with my friends or play the drums.
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