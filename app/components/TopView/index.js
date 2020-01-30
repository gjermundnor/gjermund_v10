import React from 'react'

require('./topview.scss')

class TopView extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount () {
    this.imageAnimation()
  }

  imageAnimation () {
    const myListener = function (event) {
      const x = event.clientX
      const y = event.clientY
      const vw = window.innerWidth
      const vh = window.innerHeight

      const positionXPersent = (((x / vw) * 100) / 5) + 0
      const positionYPersent = (((y / vh) * 100) / 8) + 50

      document.getElementById('bigText').style.backgroundPosition = `${positionXPersent}% ${positionYPersent}%`
    }

    document.addEventListener('mousemove', myListener, false)
  }

  render () {
    return (
      <div className="topview-wrapper container">
        <h1 className="name">Gjermund Norderhaug</h1>
        <p className="email">gjermundnor@gmail.com</p>
        <div>
          <h2 id="bigText" className="big-text">Hi</h2>
        </div>
        <p>Currently working as a front end developer at <a className="link" href="https://www.kindly.ai/" target="_blank">Kindly.ai</a>.</p>
        <p>Oslo, Norway.</p>
      </div>
    )
  }
}

export default TopView
