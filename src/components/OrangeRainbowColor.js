import React, { Component } from 'react'

export class OrangeRainbowColor extends Component {
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
            width: '25%',
            height: '50%',
            borderColor: '#fdc996',
            zIndex: '6',
          }
        }
      />
    )
  }
}

export default OrangeRainbowColor