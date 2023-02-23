import React, { Component } from 'react'

const button={
  backgroundColor:"#3BB",
  borderRadius: 5,
  borderColor:'transparent',
  minWidth: 80,
  minHeight: 70,
}

const text={
  fontSize: 24,
  fontWeight: '700',
  color:'white'
}

export default class Button extends Component {
  render() {
    return (
      <div>
        <button style={button}>
          <p style={text}>100</p></button>
      </div>
    )
  }
}


