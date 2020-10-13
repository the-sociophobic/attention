import React, { Component } from 'react'
import TrackVisibility from 'react-on-screen'

import insertLineBreaks from 'utils/insertLineBreaks'


const textChangeInterval = 30000
const letterTypeInterval = 42
const caretFlashInterval = 600
const caretCooldownVisibilityInterval = 100

class TypeAnimation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      largestText: props.texts
        .reduce((maxIndex, text, index, texts) =>
          text.length > texts[maxIndex].length ? index : maxIndex, 0
        ),
      currentTextIndex: 0,
      currentLetterIndex: 0,
      caretVisible: true,
      caretCooldownVisibility: false,
    }
  }

  componentDidMount() {
    this._ismounted = true

    /* Type Letter */
    const typeLetterRandomInterval = () => {
      if (this._ismounted) {
        // if (!this._wasReached && this.props.isVisible)
        //   this._wasReached = true

        // if (this._wasReached && this.state.currentLetterIndex < this.props.texts[this.state.currentTextIndex].length) {
        if (this.state.currentLetterIndex < this.props.texts[this.state.currentTextIndex].length) {
          this.setState({
            caretCooldownVisibility: true,
            currentLetterIndex: this.state.currentLetterIndex + 1,
          })
          setTimeout(() => this.setState({caretCooldownVisibility: false}),
          this.props.caretCooldownVisibilityInterval || caretCooldownVisibilityInterval)
        }
        setTimeout(typeLetterRandomInterval,
          Math.floor((Math.random() + .5) * (this.props.letterTypeInterval || letterTypeInterval)))
      }
    }
    typeLetterRandomInterval()

    /* Change word */
    // this.currentTextCaller = setInterval(() => {
    //   if (this._ismounted)
    //     this.setState({
    //       currentTextIndex: (this.state.currentTextIndex + 1) % this.props.texts.length,
    //       currentLetterIndex: 0,
    //     })
    // }, this.props.textChangeInterval || textChangeInterval)

    /* Flashy caret */
    this.caretFlashCaller = setInterval(() => {
      if (this._ismounted)
        this.setState({caretVisible: !this.state.caretVisible})
    }, this.props.caretFlashInterval || caretFlashInterval)
  }

  componentWillUnmount() {
    this._ismounted = false
    clearInterval(this.currentTextCaller)
    clearInterval(this.caretFlashCaller)
  }

  render () {
    const currentText = this.props.texts[this.state.currentTextIndex]
      .slice(0, this.state.currentLetterIndex)

    return (
      <div className="type-animation__text-area">
        <div className="type-animation__invisible-text">
          {insertLineBreaks(this.props.texts[this.state.largestText])}
        </div>
        <div className="type-animation__visible-text">
          {insertLineBreaks(currentText)}
          <div className={"type-animation__caret " +
            ((this.state.caretVisible || this.state.caretCooldownVisibility) && "type-animation__caret--visible")}
          >|</div>
        </div>
      </div>
    )
  }
}

export default props =>
  <TrackVisibility>
    <TypeAnimation
      {...props}
    />
  </TrackVisibility>
