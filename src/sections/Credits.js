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

          <b>Идея:</b> Антон Томилин
          <br />
          <b>Концептмейкеры:</b> <ExternalLink newTab changeColor={this.props.changeColor} to="https://instagram.com/arttomilov">Артём Томилов</ExternalLink> и <ExternalLink newTab changeColor={this.props.changeColor} to="https://instagram.com/freestyler_13">Ваня Наумов</ExternalLink>
          <br />
          <b>Съёмка и координация в Тюмени:</b> <ExternalLink newTab changeColor={this.props.changeColor} to="https://instagram.com/zurikova">Ирина Вадачкория</ExternalLink> и <ExternalLink newTab changeColor={this.props.changeColor} to="https://vk.com/ignatiev_e">Евгений Игнатьев</ExternalLink>
          <br />
          <b>Дизайнер:</b> <ExternalLink newTab changeColor={this.props.changeColor} to="https://instagram.com/wow.desigon">Анна Сурина</ExternalLink>
          <br />
          <b>Чат-бот:</b> <ExternalLink newTab changeColor={this.props.changeColor} to="https://instagram.com/igelfanger">Артём Васич</ExternalLink>
          <br />
          <b>Лэндинг:</b> <ExternalLink newTab changeColor={this.props.changeColor} to="https://instagram.com/the_sociophobic">Лев Васильев</ExternalLink>
          <br />
          <br />
          <b>Спасибо за помощь в съёмке</b> <ExternalLink newTab changeColor={this.props.changeColor} to="https://instagram.com/aaaa.smr">Андрею Смирнову</ExternalLink>
          <br />
          <br />
          <b>Участники:</b> Яна Либерман, Марина Либерман, Екатерина Захарчук, Илья Захарчук, Рита Пушкина, Евгений Игнатьев, Алексей Киреев
        </div>
      </Frame>
    </div>
}