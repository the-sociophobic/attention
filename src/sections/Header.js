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
    <div className="Header">
      <div
        className="Header__logo"
        onClick={() => this.props.changeColor()}
        onMouseEnter={() => !isTouchDevice() && this.props.changeColor()}
      />
      <div
        className="Header__cosmos"
        onClick={() => this.props.changeColor()}
        onMouseEnter={() => !isTouchDevice() && this.props.changeColor()}
      />
      <div
        className="Header__age"
        onClick={() => this.props.changeColor()}
        onMouseEnter={() => !isTouchDevice() && this.props.changeColor()}
      >
        12+
      </div>

      <div className="Header__gull" />
      <div className="Header__bicycle" />
      <div className="Header__gang" />

      <div className="Header__line Header__line--top" />
      <div className="Header__line Header__line--left" />
      <div className="Header__line Header__line--right" />

      <div className="Header__bottom">
        <div className="Header__bottom__left" />
        <div className="Header__bottom__text">
          чат-бот<span className="desktop-only"> перформанс</span>
        </div>
        <div className="Header__bottom__right" />
      </div>
    </div>
}