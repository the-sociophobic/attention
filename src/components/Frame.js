import React from 'react'


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render = () =>
    <div className="frame">
      <div className="frame__corner frame__corner--top frame__corner--top--left" />
      <div className="frame__corner frame__corner--top frame__corner--top--right" />
      <div className="frame__corner frame__corner--bottom frame__corner--bottom--left" />
      <div className="frame__corner frame__corner--bottom frame__corner--bottom--right" />

      {/* <div className="frame__content"> */}
        {this.props.children}
      {/* </div> */}
    </div>
}