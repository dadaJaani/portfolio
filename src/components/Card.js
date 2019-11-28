import React, { Component } from 'react'

import '../styles/card.css'

class Card extends Component {

  render() {
    return (


    <div className='card-container'>
      <div className='card-description'>{this.props.description}</div>
      <div className='card-title'>{this.props.title}</div>
    </div>
    )

  }
}

export default Card
