import React from 'react';
import './App.css'
import Result from './Result';
import KeyPad from './KeyPad';

class App extends React.Component {

  state = {
    currResult: ""
  }

  calculateHandler = () => {
    let calculateResult = "";
    calculateResult = this.state.currResult;
    let stringAns = calculateResult.toString()
    this.setState({
      currResult: eval(stringAns)
    })
  }

  resetHandler = () =>{
    this.setState({
      currResult:""
    })
  }

  onKeyPadClickHandler = (keypad) => {
    if (keypad === "=") {
      this.calculateHandler();
    } else if(keypad === "c"){
      this.resetHandler();
    } 
    else {
      this.setState({
        currResult: this.state.currResult + keypad
      })
    }

  }

  render = () => {
    return (
      <div>
        <Result currResult={this.state.currResult} />
        <KeyPad onKeyPadClickHandler={this.onKeyPadClickHandler} />
      </div>
    )
  }
}

export default App;
