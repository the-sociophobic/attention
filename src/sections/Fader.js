import React from 'react'


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      transparent: false,
      hidden: false,
    }
  }

  componentDidMount = () => {
    setTimeout(() => this.setState({transparent: true}), 500)

    setTimeout(() => this.setState({hidden: true}), 2000)
  }

  render = () =>
    <div
      className={`fader ${this.state.transparent && "fader--transparent"} ${this.state.hidden && "fader--hidden"}`}
    />
}