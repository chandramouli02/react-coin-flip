import './index.css'
import {Component} from 'react'

class CoinToss extends Component {
  state = {headsCount: 0, tailsCount: 0, isHead: true}

  onTossClick = () => {
    const TossCoin = Math.floor(Math.random() * 2)
    //  gets random Head: 0, or Tails:1
    if (TossCoin === 0) {
      return this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        isHead: true,
      }))
    }
    return this.setState(prevState => ({
      tailsCount: prevState.tailsCount + 1,
      isHead: false,
    }))
  }

  render() {
    const {isHead, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="main-container">
        <div className="elements-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="heads-tails-text">Heads (or) Tails</p>
          {isHead && (
            <img
              className="img-style"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              alt="toss result"
            />
          )}
          {!isHead && (
            <img
              className="img-style"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              alt="toss result"
            />
          )}
          <button
            className="flip-button"
            type="button"
            onClick={this.onTossClick}
          >
            Toss Coin
          </button>
          <div className="counts-container">
            <p>Total: {totalCount}</p>
            <p>Heads: {headsCount}</p>
            <p>Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
