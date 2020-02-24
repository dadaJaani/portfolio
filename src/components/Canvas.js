import React, { Component } from 'react'

import Anime, {anime} from 'react-anime';
// import Particles from 'react-particles-js';

import '../styles/main.css'

class Canvas extends Component {

  constructor (props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  // componentDidMount() {
  //   this.updateCanvas()
  //   this.updateWindowDimensions();
  //   window.addEventListener('resize', this.updateWindowDimensions);
  // }


  // componentWillUnmount() {
  //   window.removeEventListener('resize', this.updateWindowDimensions);
  // }

  // updateWindowDimensions() {
  //   this.setState({ width: window.innerWidth, height: window.innerHeight });
  //   this.updateCanvas()
  // }

  // updateCanvas = () => {
  //   const ctx = this.refs.canvas.getContext('2d')
  //   ctx.fillStyle = "#880022";
  //   ctx.fillRect(0,0, 100, 100);

  //   ctx.beginPath()
  //   ctx.moveTo(this.state.width ,300)
  //   ctx.lineTo(50,400)
  //   ctx.lineTo(250,100)
  //   ctx.stroke()
  // }

  render() {
    console.log(this.state);
    return (
      <div className="main-canvas">
        {/* <canvas ref="canvas" className='canvas' width={this.state.width} height={this.state.height}/> */}
         

        {/* <Particles 
          height={this.state.height}
          width={this.state.width}
          params={{
            particles: {
              number: {
                value: 1000
              },
              shape: {
                type: 'polygon',
                polygon: {
                  nb_sides: 6
                },
              },
              color: {
                value: '#c3073f'
              },
              move: {
                enable: true,
                "speed": 1,
                "direction": "none",
                "random": true,
                out_mode: 'bounce',
              },
              size: {
                value: 6,
                random: true,
              
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: true,
                  speed: 1
                },
              },
              line_linked: {
                enable: true,
                distance: 60,
                color: "#6f2232",
                opacity: 0.1,
                width: 1
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  mode: 'bubble',
                },
                "onclick": {
                  "enable": true,
                  "mode": 'grab'
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 0.3
                  }
                },
                "bubble": {
                  "distance": 150,
                  "size": 15,
                  "duration": 5,
                  "opacity": 0.4,
                  "speed": 1
                },
                "repulse": {
                  "distance": 50,
                  "duration": 4
                },
                "push": {
                  "particles_nb": 40
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
             
          }} 
          style={{
            backgroundColor: `#1A1A1D` 
          }}
        /> */}


      </div>
    )
  }

}

export default Canvas
