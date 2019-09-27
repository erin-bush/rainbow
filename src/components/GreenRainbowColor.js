import React, { Component } from 'react'

export class GreenRainbowColor extends Component {
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
            width: '50%',
            height: '100%',
            borderColor: '#96fd96',
            zIndex: '4',
          }
        }
      />
    )
  }
}

export default GreenRainbowColor