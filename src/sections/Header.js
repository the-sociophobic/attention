import React from 'react'


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
        onMouseEnter={() => this.props.changeColor()}
      />
    </div>
}