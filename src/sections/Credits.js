import React from 'react'

import Frame from 'components/Frame'
import ExternalLink from 'components/ExternalLink'


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render = () =>
    <div className="container">
      <Frame>
        <div className="credits">
          <h2>Создатели + ссылки</h2>

          Идея: Антон Томилин
          <br />
          Концептмейкеры: <ExternalLink newTab changeColor={this.props.changeColor} to="https://instagram.com/arttomilov">Артём Томилов</ExternalLink> и <ExternalLink newTab changeColor={this.props.changeColor} to="https://instagram.com/freestyler_13">Ваня Наумов</ExternalLink>
          <br />
          Съёмка и координация в Тюмени: <ExternalLink newTab changeColor={this.props.changeColor} to="https://instagram.com/zurikova">Ирина Вадачкория</ExternalLink> и <ExternalLink newTab changeColor={this.props.changeColor} to="https://vk.com/ignatiev_e">Евгений Игнатьев</ExternalLink>
          <br />
          Дизайнер: <ExternalLink newTab changeColor={this.props.changeColor} to="https://instagram.com/wow.desigon">Анна Сурина</ExternalLink>
          <br />
          Чат-бот: <ExternalLink newTab changeColor={this.props.changeColor} to="https://instagram.com/igelfanger">Артём Васич</ExternalLink>
          <br />
          Лэндинг: <ExternalLink newTab changeColor={this.props.changeColor} to="https://instagram.com/the_sociophobic">Лев Васильев</ExternalLink>
          <br />
          <br />
          Спасибо за помощь в съёмке <ExternalLink newTab changeColor={this.props.changeColor} to="https://instagram.com/aaaa.smr">Андрею Смирнову</ExternalLink>
          <br />
          <br />
          Участники: Яна Либерман, Марина Либерман, Екатерина Захарчук, Илья Захарчук, Рита Пушкина, Евгений Игнатьев, Алексей Киреев
        </div>
      </Frame>
    </div>
}