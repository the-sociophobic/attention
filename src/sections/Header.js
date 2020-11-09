import React from 'react'

import isTouchDevice from 'utils/isTouchDevice'


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      alphaX: 0,
      alphaY: 0,
    }

    if (isTouchDevice())
      window.addEventListener("scroll", e => this.setState({
        alphaX: window.scrollY / window.innerHeight - .5,
        alphaY: window.scrollY / window.innerHeight - .5,
      }))
    else
      window.addEventListener("mousemove", e => this.setState({
        alphaX: .5 - e.clientX / window.innerWidth,
        alphaY: .5 - e.clientY / window.innerHeight,
      }))
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

      <div
        className="Header__gull"
        style={{
          transform: `translate(${(this.state.alphaX - .3) * 35}%, ${(this.state.alphaY + .6) * 35}%)`
        }}
      />
      <div
        className="Header__bicycle"
        style={{
          transform: `translate(${(this.state.alphaX + .4) * 12}%, ${(this.state.alphaY - .2) * 12}%)`
        }}
      />
      <div
        className="Header__gang"
        style={{
          transform: `translate(${(this.state.alphaX - .35) * 42}%, ${(this.state.alphaY - .35) * 22}%)`
        }}
      />

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