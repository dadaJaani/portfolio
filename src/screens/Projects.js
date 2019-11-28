import React, { Component } from 'react';
import '../styles/main.css';
import '../styles/card.css';

import Card from '../components/Card.js'

class Projects extends Component {
  render() {
    return (
      <div className="">
        <h1>Projects</h1>

        <div className="card-shelf">
          <Card
            description="This is description of project one"
            title='Project 1'
            />

          <Card
            description="Baap Proj"
            title='Project 2'
            />
        </div>

      </div>
    )
  }
}

export default Projects
