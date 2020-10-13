import React from 'react'

import ExternalLink from 'components/ExternalLink'


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render = () =>
    <div className="container">
      <ExternalLink newTab to="https://t.me/tgftstbot" changeColor={this.props.changeColor}>
        <div className="start">
          <b>начать</b>
        </div>
      </ExternalLink>
    </div>
}