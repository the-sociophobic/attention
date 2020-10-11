import React from 'react'

import Head from 'components/Head'
import Header from 'sections/Header'
import Description from 'sections/Description'
import FAQ from 'sections/FAQ'
import Credits from 'sections/Credits'
import Start from 'sections/Start'


export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isWhite: true
    }
  }

  render = () =>
    <div className={`App App--${this.state.isWhite ? "white" : "black"}`}>
      <Head />
      <Header changeColor={() => this.setState({isWhite: !this.state.isWhite})} />
      <Description changeColor={() => this.setState({isWhite: !this.state.isWhite})} />
      <FAQ changeColor={() => this.setState({isWhite: !this.state.isWhite})} />
      <Credits changeColor={() => this.setState({isWhite: !this.state.isWhite})} />
      <Start changeColor={() => this.setState({isWhite: !this.state.isWhite})} />
    </div> 
}
