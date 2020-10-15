import React from 'react'

import ExternalLink from 'components/ExternalLink'
import isTouchDevice from 'utils/isTouchDevice'


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render = () =>
    <div className="container">
      <ExternalLink newTab to="https://t.me/vnimaniebot" changeColor={this.props.changeColor}>
        <div
          className="start"
          onMouseEnter={() => !isTouchDevice() && this.props.changeColor()}
        >
          <b>начать</b>
        </div>
      </ExternalLink>
    </div>
}