import React from 'react'

import isTouchDevice from 'utils/isTouchDevice'


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isWhite: true
    }
  }

  render = () =>
    <>
      <div className="Header">
        <div
          className="Header__logo"
          onClick={() => this.props.changeColor()}
          onMouseEnter={() => !isTouchDevice() && this.props.changeColor()}
        />
      </div>
      <div className="Header">
        <div
          className="Header__logo Header__logo--cosmos"
          onClick={() => this.props.changeColor()}
          onMouseEnter={() => !isTouchDevice() && this.props.changeColor()}
        />
      </div>
    </>
}