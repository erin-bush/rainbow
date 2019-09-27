import React, { Component } from 'react'
import RainbowColorContainer from './RainbowColorContainer'

export class RedRainbowColor extends Component {
  renderRedColor({ colorClass, toggleSpinning }) {
    return (
      <li
        onClick={toggleSpinning}
        className={colorClass}
        style={
          {	
            width: '12.5%',
            height: '25%',
            borderColor: '#fd96aa',
            zIndex: '7',
          }
        }
      />
    )
  }

  render() {
    return (
      <RainbowColorContainer 
        render={this.renderRedColor}
      />
    )
  }
}

export default RedRainbowColor