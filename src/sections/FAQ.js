import React from 'react'
import ReactDOM from 'react-dom'

import * as THREE from 'three'


const questions = [
  {
    title: "О СООТНОШЕНИИ УСТРОЙСТВА И ПРОСТРАНСТВА",
    text: <>
      Внимание - это перформативный чат-бот, расположившийся прямо в вашем устройстве. 
      <br />
      На восприятие будет влиять всё, что связано с параметрами вашего телефона: размер экрана и качество картинки. Если вы возьмете планшет, то всё соответственно изменится. Наличие или отсутствие наушников тоже играет свою роль: в наушниках звук объемнее, поэтому контакт с изображением лучше. Но самое главное - где и когда вы юзаете перформанс. Так как у этого проекта нет времени начала, а также конкретного пространства для его реализации, открывается возможность экспериментировать с контекстом. Вы можете взаимодействовать с перформансом в любое время суток, прерываясь на любой срок, а потом снова возвращаться к нему. Вы можете расположиться в любом пространстве: например, дома, или в общественном транспорте, или вообще гуляя по тем местам в Тюмени, которые показаны здесь в чат-боте; если вы не из Тюмени, то можно изучать свой город вместе с Вниманием, проецируя смыслы на ваше место жизни.
      <br />
      Важно осознать связь устройства и пространства, потому что любая версия будет как-то влиять на качество того, что вы испытаете. Предлагаем вам поискать свои варианты.
    </>,
    color: "red",
  },
  {
    title: "О ТОМ КАК ЮЗАТЬ",
    text: <>
      Перформанс Внимание напоминает книгу с её привычной структурой глав. Только вместо текста кинематографические линии героев. Каждая линия разбита на некоторое количество эпизодов. При прохождении перформанса вы можете путешествовать из одной линии в другую, формируя свою собственную монтажную последовательность. Получается, что вам предоставлена возможность свободно лепить композицию эпизодов, будто вы режиссёр монтажа. То есть - вы режиссер монтажа.
      <br />
      Помимо видео в перформансе есть ещё подкаст, он тоже является главой общей формы и монтируется со всем остальным.
      <br />
      Такой принцип позволяет не только самому взаимодействовать с Вниманием, но и показывать его другим людям, либо самостоятельно, либо вместе определяя композицию рассказа. Если воспринять это как возможность, то здесь открываются игровые просторы. Главное, как всегда, для начала разобраться с интерфейсом. Он довольно симпатичный и простой. Предлагаем вам изучить эти варианты монтажной последовательности.
    </>,
    color: "yellow",
  },
  {
    title: "",
    text: <>
      Авторам было очень интересно заниматься работой над этим проектом. Правда. Мир сразу начинает открываться, если в него вглядываться. Если у вас возникло желание что-то обсудить, то в разделе с именами создателей есть ссылки на на наши соцсети. Пишите - ответим. А также к проекту прикручен чат, куда мы вас тоже приглашаем общаться, дискутировать, обмениваться информацией. 
    </>,
    color: "green",
  },
]

var posA = new THREE.Vector2(0, 0)
var posB = new THREE.Vector2(0, 0)
var movA = new THREE.Vector2(0, 0)
var movB = new THREE.Vector2(0, 0)
var distance = new THREE.Vector2(0, 0)
var distanceNormalized = new THREE.Vector2(0, 0)
const threshold = .35
const speed = .35

const outOfRange = number =>
  number < 0 || number > 100

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentQuestion: undefined,
      pos: [
        {
          x: 10,
          y: 10,
        },
        {
          x: 90,
          y: 10,
        },
        {
          x: 50,
          y: 90,
        },
      ],
      mov: [
        {
          x: Math.random() - .5 * 2,
          y: Math.random() - .5 * 2,
        },
        {
          x: Math.random() - .5 * 2,
          y: Math.random() - .5 * 2,
        },
        {
          x: Math.random() - .5 * 2,
          y: Math.random() - .5 * 2,
        },
      ],
    }
  }

  componentDidMount = () => {
    this.frameId = window.requestAnimationFrame(this.animate)

  }

  componentWillUnmount = () =>
    cancelAnimationFrame(this.frameId)

  animate = () => {
    console.log("a")
    let pos = this.state.pos.slice()
    let mov = this.state.mov.slice()

    // walls collision
    for (let index in pos) {
      if (outOfRange(pos[index].x + mov[index].x * threshold))
        mov[index].x *= -1
      if (outOfRange(pos[index].y + mov[index].y * threshold))
        mov[index].y *= -1
    }

    // items collision
    for (let i = 0; i < pos.length - 1; i++)
      for (let j = i + 1; j < pos.length; j++) {
        posA
          .set(pos[i].x, pos[i].y)
          .add(
            movA
              .set(mov[i].x, mov[i].y)
              .multiplyScalar(speed))
        posB
          .set(pos[j].x, pos[j].y)
          .add(
            movB
              .set(mov[j].x, mov[j].y)
              .multiplyScalar(speed))

        distance.subVectors(posA, posB)

        if (distance.length() < 15) {
          distanceNormalized.copy(distance).normalize()
          movA.set(mov[i].x, mov[i].y)
          movB.set(mov[j].x, mov[j].y)
          
          //used as new movA
          posA
            .copy(distanceNormalized)
            .multiplyScalar(distanceNormalized.dot(movA) * -2)
            .add(movA)
            .normalize()

          //used as new movB
          posB
            .copy(distanceNormalized)
            .multiplyScalar(distanceNormalized.dot(movB) * -2)
            .add(movB)
            .normalize()
            
          mov[i].x = posA.x
          mov[i].y = posA.y
          mov[j].x = posB.x
          mov[j].y = posB.y
        }
      }

    // add movement
    for (let index in pos) {
      pos[index].x += mov[index].x * speed
      pos[index].y += mov[index].y * speed
    }

    this.setState({
      pos: pos,
      mov: mov,
    })

    this.frameId = requestAnimationFrame(this.animate)
  }

  renderWindow = props =>
    props &&
      <>
        <div
          className={`faq__background faq__background--${props.color}`}
          onClick={() => this.setState({currentQuestion: undefined})}
        />
        <div className="faq__window">
          <div
            className="faq__window__cross"
            onClick={() => this.setState({currentQuestion: undefined})}
          />
          <div className="faq__window__title">
            {props.title}
          </div>
          <div className="faq__window__text">
            {props.text}
          </div>
        </div>
      </>

  render = () =>
    <div className="container">
      <div className="faq">
        <h1>FAQ</h1>
        <div className="faq__container">
          {questions.map((item, index) =>
            <div
              onClick={() => this.setState({currentQuestion: item})}
              className={`faq__item faq__item--${item.color}`}
              style={{
                top: this.state.pos[index].x + "%",
                left: this.state.pos[index].y + "%",
              }}
            >
              ?
            </div>
          )}
        </div>
      </div>
      {ReactDOM.createPortal(
        this.renderWindow(this.state.currentQuestion)
        , document.getElementById("root"))}
    </div>
}