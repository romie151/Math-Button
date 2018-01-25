import React from 'react';
import ReactDOM from 'react-dom'

class Buttons extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  handlePlus = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  handleMinus = () => {
    this.setState ({
    count: this.state.count - 1
    })
  }

  handoleReset = () => {
    this.setState ({
      count: 0
    })
  }

  handoleRandom = () => {
    this.setState ({
      count: Math.floor(Math.random() * 10)
    })
  }

  render() {
    return (
      <div>
        <p>The count is: {this.state.count}</p>
        <button onClick={this.handlePlus}>Plus (+)</button>
        <button onClick={this.handleMinus}>Minus (-)</button>
        <button onClick={this.handoleReset}>Reset</button>
        <button onClick={this.handoleRandom}>Random</button>
      </div>
    )
  }
}

ReactDOM.render(<Buttons />, document.getElementById('root'))