import React from 'react'

import Frame from 'components/Frame'
import ExternalLink from 'components/ExternalLink'


const swapAnimationTime = 500
const swapIntervalTime = 3000
const redrawTime = 50


export default class extends React.Component {
  constructor(props) {
    super(props)

    this.lines = [
      <><b>Идея</b> {this.renderLink("https://instagram.com/anttomilin", "Антон Томилин")}</>,
      <><b>Концептмейкеры</b> {this.renderLink("https://instagram.com/arttomilov", "Артём Томилов")} и {this.renderLink("https://instagram.com/freestyler_13", "Ваня Наумов")}</>,
      <><b>Съёмка и координация в Тюмени</b><br />{this.renderLink("https://instagram.com/zurikova", "Ирина Вадачкория")} и {this.renderLink("https://vk.com/ignatiev_e", "Евгений Игнатьев")}</>,
      <><b>Дизайнер</b> {this.renderLink("https://instagram.com/wow.desigon", "Анна Сурина")}</>,
      <><b>Композитор</b> {this.renderLink("http://alexzender.tilda.ws", "Alex Zender")}</>,
      <><b>Монтаж</b> {this.renderLink("https://www.facebook.com/ivnmv", "Freestyler")}</>,
      <><b>Чат-бот</b> {this.renderLink("https://instagram.com/igelfanger", "Артём Васич")}</>,
      <><b>Лэндинг</b> {this.renderLink("https://instagram.com/the_sociophobic", "Лев Васильев")}</>,
      <><b>Спасибо за помощь в съёмке</b> {this.renderLink("https://instagram.com/aaaa.smr", "Андрею Смирнову")}</>,
      <><b>Участники</b> Яна Либерман, Марина Либерман, Екатерина Захарчук, Илья Захарчук, Рита Пушкина, Евгений Игнатьев, Алексей Киреев</>,
    ]

    this.linesRefs = this.lines.map(line => React.createRef())

    this.state = {
      linesOrder: this.lines.map((line, index) => index),
      linesTop: this.lines.map(line => 0)
    }
    
    this.swapInterval = setInterval(() => this.swapRandom(), swapIntervalTime)
  }

  componentWillUnmount = () =>
    clearInterval(this.swapInterval)

  swapRandom = () => {
    const indexes = this.state.linesOrder.slice().sort( () => .5 - Math.random() )

    this.swap(indexes[0], indexes[1])
  }
      
  swap = (indexA, indexB) => {
    const { linesOrder } = this.state
    const smallerIndex = Math.min(indexA, indexB)
    const largerIndex = Math.max(indexA, indexB)

    this.setState({
      linesOrder: [
        ...linesOrder.slice(0, smallerIndex),
        linesOrder[largerIndex],
        ...linesOrder.slice(smallerIndex, largerIndex),
        ...linesOrder.slice(largerIndex + 1)
      ]
    })

    this.swapTimeout = setTimeout(() =>
      this.setState({
        swappedIndex: this.state.linesOrder[smallerIndex],
        linesTop: this.lines
          .map((line, index) =>
            this.countHeight(
              this.state.linesOrder.indexOf(index)))})
      , redrawTime)

    this.swapTimeout = setTimeout(() =>
      this.setState({ swappedIndex: -1 })
      , swapAnimationTime * 2 + redrawTime)
  }

  countHeight = index =>
    this.state.linesOrder
      .map((lineIndex, lineIndexIndex) =>
        lineIndexIndex < index ?
          this.linesRefs[lineIndex]?.current?.clientHeight
          : 0)
      .reduce((a, b) => (a || 0) + (b || 0))

  renderLines = () =>
    <div className="credits__lines">
      {this.state.linesOrder.map(lineIndex =>
        <div
          key={lineIndex}
          ref={this.linesRefs[lineIndex]}
          className="credits__lines__item"
        >
          {this.lines[lineIndex]}
        </div>
      )}
      {this.lines.map((line, index) =>
        <div
          className={`credits__lines__item__block ${index === this.state.swappedIndex && "credits__lines__item__block--swapped"}`}
          style={{ top: `${this.state.linesTop[index]}px` }}
        >
          {line}
        </div>
    )}
    </div>

  renderLink = (link, name) =>
    <ExternalLink
      newTab
      changeColor={this.props.changeColor}
      to={link}
    >
      {name}
    </ExternalLink>

  render = () =>
    <Frame>
      <div className="credits">
        <h2>Создатели + ссылки</h2>
        <br />
        {this.renderLines()}
      </div>
    </Frame>
}