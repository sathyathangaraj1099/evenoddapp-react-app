import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.count
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="even-or-odd">Count is {displayText}</p>
          <button className="btn" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p>*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
