import React, { Component } from 'react';
import "./Header.css";

/**
 * Responsable for giving a brief greeting and/or 
 * an explanation of what this website is.
 * 
 * @author Matei Bogdan Radu
 */
class Header extends Component{
  render() {
    return (
      <div className="header-root">
        <div className="container">
          <div className="header-title">Matei Radu</div>
          <div className="header-sub">Software developer</div>
        </div>
      </div>
    );
  }
}

export default Header;