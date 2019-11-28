import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";

import '../styles/main.css';

class Menu extends Component {
  render() {
    return (
      <div className="">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>

      </div>
    )
  }
}

export default Menu
