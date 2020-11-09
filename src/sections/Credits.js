import React from 'react'

import Frame from 'components/Frame'
import ExternalLink from 'components/ExternalLink'


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

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

        <b>Идея</b> {this.renderLink("https://instagram.com/anttomilin", "Антон Томилин")}
        <br />
        <b>Концептмейкеры</b> {this.renderLink("https://instagram.com/arttomilov", "Артём Томилов")} и {this.renderLink("https://instagram.com/freestyler_13", "Ваня Наумов")}
        <br />
        <b>Съёмка и координация в Тюмени</b><br />{this.renderLink("https://instagram.com/zurikova", "Ирина Вадачкория")} и {this.renderLink("https://vk.com/ignatiev_e", "Евгений Игнатьев")}
        <br />
        <b>Дизайнер</b> {this.renderLink("https://instagram.com/wow.desigon", "Анна Сурина")}
        <br />
        <b>Композитор</b> {this.renderLink("http://alexzender.tilda.ws", "Alex Zender")}
        <br />
        <b>Монтаж</b> {this.renderLink("https://www.facebook.com/ivnmv", "Freestyler")}
        <br />
        <b>Чат-бот</b> {this.renderLink("https://instagram.com/igelfanger", "Артём Васич")}
        <br />
        <b>Лэндинг</b> {this.renderLink("https://instagram.com/the_sociophobic", "Лев Васильев")}
        <br />
        <br />
        <b>Спасибо за помощь в съёмке</b> {this.renderLink("https://instagram.com/aaaa.smr", "Андрею Смирнову")}
        <br />
        <br />
        <b>Участники</b> Яна Либерман, Марина Либерман, Екатерина Захарчук, Илья Захарчук, Рита Пушкина, Евгений Игнатьев, Алексей Киреев
      </div>
    </Frame>
}