import React, { Component } from 'react'

export class VioletRainbowColor extends Component {
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
            width: '87.5%',
            height: '175%',
            borderColor: '#c996fd',
            zIndex: '1',
          }
        }
      />
    )
  }
}

export default VioletRainbowColor