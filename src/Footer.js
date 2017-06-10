import React, { Component } from 'react';
import './Footer.css';

/**
 * Footer component responsable for display quick links,
 * copyright and license notice.
 * 
 * @author Matei Bogdan Radu
 */
class Footer extends Component{
  render() {
    /* Links */
    const githubLink = "https://github.com/mateiradu";
    const twitterLink = "https://twitter.com/matei_dev";
    const facebookLink = "https://www.facebook.com/mateiradu92";
    const linkedinLink = "https://www.linkedin.com/in/mateibogdanradu/";

    /* License specific */
    const repoLink = githubLink + "/personal-website";
    const licenseLink = repoLink + "/blob/master/LICENSE";
    var currentYear = new Date().getFullYear();

    return (
      <div className="footer-root">
        <div className="container"> 
          <div className="footer-links">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href={githubLink}><b>GitHub</b></a>
              </li>
              <li className="list-inline-item">
                <a href={twitterLink}><b>Twitter</b></a>
              </li>
              <li className="list-inline-item">
                <a href={facebookLink}><b>Facebook</b></a>
              </li>
              <li className="list-inline-item">
                <a href={linkedinLink}><b>LinkedIn</b></a>
              </li>
            </ul>
          </div>
          <div className="footer-license">
            <p>
              Content Copyright © 2016-{currentYear} Matei Bogdan Radu.<br></br>
              Designed and built by <a href={githubLink}>Matei Bogdan Radu</a>, 
              code licensed under <a href={licenseLink}>MIT</a>, source 
              available on <a href={repoLink}>Github</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;