import React from 'react'

import Head from 'components/Head'
import Fader from 'sections/Fader'
import Header from 'sections/Header'
import Description from 'sections/Description'
import FAQ from 'sections/FAQ'
import Credits from 'sections/Credits'
import Start from 'sections/Start'
import Documents from 'sections/Documents'


export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isWhite: Math.round(Math.random() * 25) % 2 === 0
    }
  }

  render = () =>
    <div className={`App App--${this.state.isWhite ? "white" : "black"}`}>
      <div className="container">
        <Head />
        <Header changeColor={() => this.setState({isWhite: !this.state.isWhite})} />
        <Description changeColor={() => this.setState({isWhite: !this.state.isWhite})} />
        <FAQ changeColor={() => this.setState({isWhite: !this.state.isWhite})} />
        <Credits changeColor={() => this.setState({isWhite: !this.state.isWhite})} />
        <Start changeColor={() => this.setState({isWhite: !this.state.isWhite})} />
        <Documents changeColor={() => this.setState({isWhite: !this.state.isWhite})} />
      </div>
      <Fader />
    </div>
}
