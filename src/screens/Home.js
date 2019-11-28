import React, { Component } from 'react';
import '../styles/main.css';
import Canvas from '../components/Canvas'

class Home extends Component {

  constructor (props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }


  render() {
    console.log(this.state);
    return (
      <div className="main-container">
        <h1>Home</h1>
        <Canvas />

      </div>
    )
  }
}

export default Home
