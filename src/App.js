import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = { value: 0 };
    this.update = this.update.bind(this)
  }

  update(){
    let newValue = this.state.value += 1

    this.setState({ value: newValue })
  }

  render() {
    return (
      <div>
        <span className="value">{this.state.value}</span>
        <button id="inc" onClick={this.update}>Incrementa</button>
      </div>
    );
  }
}

export default App;
