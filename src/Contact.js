/*
 * Personal Website
 * Copyright © 2016-2017 Matei Bogdan Radu <matei.radu.92@gmail.com>
 * Licensed under MIT 
 * (https://github.com/mateiradu/personal-webiste/blob/master/LICENSE)
 */
import React, { Component } from 'react';
import * as Constants from './Constants';
import "./Contact.css";

/**
 * Responsable for display contact information and links.
 *
 * @author Matei Bogdan Radu
 */
class Contact extends Component{
  render() {
    return (
      <div className="contact-root">
            <h2>Contact</h2>
            <div className="row">
              <div className="col-12">
                <p className="contact-block-header">Want to have a chat? Send me an email and we can chat til cows come home!</p>
                  <a className="btn btn-primary col-12 col-lg-12 col-md-6 email" href={Constants.emailLink}>{Constants.email}</a>
                  <p className="contact-block-header">You can also find me on social media if you prefer</p>
                  <a className="btn btn-outline-primary col-12 col-lg-12 col-md-3 twitter" href={Constants.twitterLink}>Twitter</a>
                  <a className="btn btn-outline-primary col-12 col-lg-12 offset-lg-0 col-md-3 offset-md-1 github" href={Constants.githubLink}>GitHub</a>
                  <a className="btn btn-outline-primary col-12 col-lg-12 offset-lg-0 col-md-3 offset-md-1 linkedin" href={Constants.linkedinLink}>LinkedIn</a>
              </div>
              </div>
            </div>
    );
  }
}

export default Contact;