/*
 * Personal Website
 * Copyright © 2016-2017 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT 
 * (https://github.com/mateiradu/personal-webiste/blob/master/LICENSE)
 */
import React, { Component } from 'react';
import * as Constants from './Constants';
import './Footer.css';

/**
 * Footer component responsable for display quick links,
 * copyright and license notice.
 * 
 * @author Matei Bogdan Radu
 */
class Footer extends Component{
  render() {
    var currentYear = new Date().getFullYear();

    return (
      <div className="footer-root">
        <div className="container"> 
          <div className="footer-links">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href={Constants.githubLink}><b>GitHub</b></a>
              </li>
              <li className="list-inline-item">
                <a href={Constants.linkedinLink}><b>LinkedIn</b></a>
              </li>
            </ul>
          </div>
          <div className="footer-license">
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;