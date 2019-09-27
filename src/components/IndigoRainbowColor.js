import React, { Component } from 'react'

export class IndigoRainbowColor extends Component {
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
            width: '75%',
            height: '150%',
            borderColor: '#9696fd',
            zIndex: '2',
          }
        }
      />
    )
  }
}

export default IndigoRainbowColor