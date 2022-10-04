import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAccelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  onBreak = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div>
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
        </div>
        <h1 className="passage-1">Speed is {speed}mph</h1>
        <p className="passage-2">Min limit is 0mph, Max limit is 200mph</p>
        <div className="buttons-container">
          <button
            type="button"
            onClick={this.onAccelerate}
            className="accelerate-button"
          >
            Accelerate
          </button>
          <button type="button" onClick={this.onBreak} className="brake-button">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
