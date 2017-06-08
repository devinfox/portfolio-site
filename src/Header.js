import React, { Component } from 'react';
import "./Header.css";

class Header extends Component{
  render() {
    return (
      <div className="header-root">
        <div className="container">
          <h1>Matei Radu</h1>
          <h3>Software developer</h3>
        </div>
      </div>
    );
  }
}

export default Header;