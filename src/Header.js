import React, { Component } from 'react';
import "./Header.css";

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