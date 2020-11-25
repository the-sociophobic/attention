import React from 'react'

import Frame from 'components/Frame'
import ExternalLink from 'components/ExternalLink'


const documents = [
  {
    label: "Вводный скрипт",
    link: "https://docs.google.com/document/d/1-NkZZraCACmrEfRu441C9rUHFEyuTnCbNovpcPP5HR4/edit?usp=sharing",
  },
  {
    label: "Перформативный скрипт",
    link: "https://drive.google.com/file/d/1VDbgubdF-6KSLFVSOqpbO6T_EYN9H3wc/view?usp=sharing",
  },
  {
    label: "Скрипт Ильи Бессмертного",
    link: "https://docs.google.com/document/d/1rzQa2TqTTfn0YpxRgEy6a668tMAZNqcyAeO6WpKIos8/edit?usp=sharing",
  },
  {
    label: "Скрипт нейрохирургов",
    link: "https://docs.google.com/document/d/1kcXmSRQLmqXDMWB_t-POdpGndy8tubFagTd3AO3ULFw/edit?usp=sharing",
  },
  {
    label: "Скрипт Риты Пушкиной",
    link: "https://drive.google.com/file/d/1bDjbQze01fZY9lgZHS2SAvlEScRKfOB-/view?usp=sharing",
  },
  {
    label: "Скрипт Яны Либерман",
    link: "https://docs.google.com/document/d/1OX1LQpr2jZMQUmjS81OPpdT-eDoZQi7jVal8Q7qRaaE/edit?usp=sharing",
  },
]


class Documents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderLink = (link, name) =>
    <ExternalLink
      newTab
      changeColor={this.props.changeColor}
      to={link}
      className="documents__files__item"
    >
      {name}
    </ExternalLink>

  render = () =>
    <div className="documents">
      <Frame>
        <h2 className="h2 text-center">
          Открытое производство
        </h2>
        <br />
        <span className="documents__text">
          Производство “Внимания” — это коммуникация, телемост между Петербургом и Тюменью. Мы даже шутим, что снимали “кино на удаленке”; потому мы решили поместить в открытый доступ письма/скрипты, которые были написаны Ваней Наумовым и Артемом Томиловым (Перфобуфет, СПб) и адресованы Ире Вадачкории и Жене Игнатьеву (Космос, Тюмень). Они, опубликованные ниже тексты — попытки нащупать релевантный язык для производства, описать условия, когда фикционально-поэтическое внедрение не уничтожает ситуации документа.
        </span>
        <br />
        <br />
        <div className="documents__files">
          {documents.map(doc =>
            this.renderLink(doc.link, doc.label)
          )}
        </div>
      </Frame>
    </div>
}


export default Documents