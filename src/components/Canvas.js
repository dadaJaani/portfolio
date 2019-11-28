import React, { Component } from 'react'
import '../styles/main.css'

class Canvas extends Component {

  constructor (props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateCanvas()
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }


  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    this.updateCanvas()
  }

  updateCanvas = () => {
    const ctx = this.refs.canvas.getContext('2d')
    ctx.fillStyle = "#880022";
    ctx.fillRect(0,0, 100, 100);

    ctx.beginPath()
    ctx.moveTo(this.state.width ,300)
    ctx.lineTo(50,400)
    ctx.lineTo(250,100)
    ctx.stroke()
  }

  render() {
    console.log(this.state);
    return (
      <div className="main-container">
        <canvas ref="canvas" className='canvas' width={this.state.width} height={this.state.height}/>

      </div>
    )
  }

}

export default Canvas
