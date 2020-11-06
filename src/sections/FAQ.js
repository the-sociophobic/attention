import React from 'react'
import ReactDOM from 'react-dom'

import * as THREE from 'three'


const questions = [
  {
    title: "О СООТНОШЕНИИ УСТРОЙСТВА И ПРОСТРАНСТВА",
    text: <>
      Внимание — это перформативный чат-бот, расположившийся прямо в вашем устройстве. 
      <br />
      На восприятие будет влиять всё, что связано с параметрами вашего телефона: размер экрана и качество картинки. Если вы возьмете планшет, то всё соответственно изменится. Наличие или отсутствие наушников тоже играет свою роль: в наушниках звук объемнее, поэтому контакт с изображением лучше. Но самое главное — где и когда вы юзаете перформанс. Так как у этого проекта нет времени начала, а также конкретного пространства для его реализации, открывается возможность экспериментировать с контекстом. Вы можете взаимодействовать с перформансом в любое время суток, прерываясь на любой срок, а потом снова возвращаться к нему. Вы можете расположиться в любом пространстве: например, дома, или в общественном транспорте, или вообще гуляя по тем местам в Тюмени, которые показаны здесь в чат-боте; если вы не из Тюмени, то можно изучать свой город вместе с Вниманием, проецируя смыслы на ваше место жизни.
      <br />
      Важно осознать связь устройства и пространства, потому что любая версия будет как-то влиять на качество того, что вы испытаете. Предлагаем вам поискать свои варианты.
    </>,
    color: "red",
  },
  {
    title: "О ТОМ КАК ЮЗАТЬ",
    text: <>
      Перформанс Внимание напоминает книгу с её привычной структурой глав. Только вместо текста кинематографические линии героев. Каждая линия разбита на некоторое количество эпизодов. При прохождении перформанса вы можете путешествовать из одной линии в другую, формируя свою собственную монтажную последовательность. Получается, что вам предоставлена возможность свободно лепить композицию эпизодов, будто вы режиссёр монтажа. То есть — вы режиссер монтажа.
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
      Авторам было очень интересно заниматься работой над этим проектом. Правда. Мир сразу начинает открываться, если в него вглядываться. Если у вас возникло желание что-то обсудить, то в разделе с именами создателей есть ссылки на на наши соцсети. Пишите — ответим. А также к проекту прикручен чат, куда мы вас тоже приглашаем общаться, дискутировать, обмениваться информацией. 
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
const speed = 1.35


export default class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentQuestion: undefined,
      diameter: 15,
      W: 100,
      H: 100,
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
          x: (Math.random() - .5) * speed * 1.4,
          y: (Math.random() - .5) * speed * 1.4,
        },
        {
          x: (Math.random() - .5) * speed * 1.4,
          y: (Math.random() - .5) * speed * 1.4,
        },
        {
          x: (Math.random() - .5) * speed * 1.4,
          y: (Math.random() - .5) * speed * 1.4,
        },
      ],
    }

    this.fieldRef = React.createRef()
    this.itemRef = React.createRef()
  }

  componentDidMount = () => {
    this.setState({
      W: this.fieldRef.current.clientWidth,
      H: this.fieldRef.current.clientHeight,
      diameter: this.itemRef.current.clientWidth,
      pos: [
        {
          x: 10 / 100 * (this.fieldRef.current.clientHeight - this.itemRef.current.clientWidth),
          y: 10 / 100 * (this.fieldRef.current.clientWidth - this.itemRef.current.clientWidth),
        },
        {
          x: 10 / 100 * (this.fieldRef.current.clientHeight - this.itemRef.current.clientWidth),
          y: 90 / 100 * (this.fieldRef.current.clientWidth - this.itemRef.current.clientWidth),
        },
        {
          x: 90 / 100 * (this.fieldRef.current.clientHeight - this.itemRef.current.clientWidth),
          y: 50 / 100 * (this.fieldRef.current.clientWidth - this.itemRef.current.clientWidth),
        },
      ],
    })

    this.frameId = window.requestAnimationFrame(this.animate)
  }

  componentWillUnmount = () =>
    cancelAnimationFrame(this.frameId)

  outOfRangeW = number =>
    number < 0 || number > this.state.H - this.state.diameter

  outOfRangeH = number =>
    number < 0 || number > this.state.W - this.state.diameter

  animate = () => {
    let pos = this.state.pos.slice()
    let mov = this.state.mov.slice()

    // walls collision
    for (let index in pos) {
      if (this.outOfRangeW(pos[index].x + mov[index].x * threshold))
        mov[index].x *= -1
      if (this.outOfRangeH(pos[index].y + mov[index].y * threshold))
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
              .multiplyScalar(threshold))
        posB
          .set(pos[j].x, pos[j].y)
          .add(
            movB
              .set(mov[j].x, mov[j].y)
              .multiplyScalar(threshold))

        distance.subVectors(posA, posB)

        if (distance.length() < this.state.diameter) {
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
          <div className="faq__window__content">
            <div className="faq__window__content__title">
              {props.title}
            </div>
            <div className="faq__window__content__text">
              {props.text}
            </div>
          </div>
        </div>
      </>

  render = () =>
    <>
      <div
        className="faq"
        ref={this.fieldRef}
      >
        <h1>F.A.Q.</h1>
        <div className="faq__container">
          {questions.map((item, index) =>
            <div
              onClick={() => {
                this.setState({currentQuestion: item})
                this.props.changeColor()
              }}
              className={`faq__item faq__item--${item.color}`}
              style={{
                top: this.state.pos[index].x + "px",
                left: this.state.pos[index].y + "px",
              }}
              {...(index === 0 && {ref: this.itemRef})}
            >
              ?
            </div>
          )}
        </div>
      </div>
      {ReactDOM.createPortal(
        this.renderWindow(this.state.currentQuestion)
        , document.getElementById("root"))}
    </>
}