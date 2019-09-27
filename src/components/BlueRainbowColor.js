import React, { Component } from 'react'

export class BlueRainbowColor extends Component {
  constructor() {
    super()

    this.state = {
      spinning: false,
    }
  }

  makeItSpin() {
    this.setState({ spinning: !this.state.spinning})
  }

  render() {
    const { spinning } = this.state

    const rainbowColourClasses = spinning ? 'rotate' : null

    return (
      <li
        onClick={this.makeItSpin.bind(this)}
        className={rainbowColourClasses}
        style={
          {	
            width: '62.5%',
            height: '125%',
            borderColor: '#96d3fd',
            zIndex: '3',
          }
        }
      />
    )
  }
}

export default BlueRainbowColor