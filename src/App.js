import React, { Component } from 'react';
import { Header, CommandLine, Output } from './components';
import { getCommand, output } from './lib/OutputGatherer';
import { bringBackFocus, scrollToBottom } from './lib/AppHelpers';
import './App.css';

class App extends Component {
  state = {
    currentOutput: output.current,
    commandLine: '',
    commandHistory: [],
    arrowKeyPressCounter: 0
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.setState({commandLine: ''})

    output.appendToOutput(this.state.commandLine, 'input')

    if (this.state.commandLine !== '') {
      this.setState({
        commandHistory: [...this.state.commandHistory, this.state.commandLine]
      })
    }

    this.setState({currentOutput: output.current});

    getCommand(this.state.commandLine)
    .then(appendThis => {
      output.appendToOutput(appendThis, 'output')
      this.setState({currentOutput: output.current});
    })
    .catch(e => this.setState({currentOutput: e}))
  }

  handleInputChange = (ev) => {
    this.setState({commandLine: ev.target.value});
  }

  onKeyDown = (ev) => {
    const up = 38;
    const down = 40;
    const enter = 13;

    if (ev.keyCode === enter) {
      this.setState({
        arrowKeyPressCounter: 0
      })
      scrollToBottom('.container');
    }

    if (ev.keyCode === up) {
      ev.preventDefault();
      if (this.state.arrowKeyPressCounter === this.state.commandHistory.length) return;
      // this.setState({
      //   arrowKeyPressCounter: this.state.arrowKeyPressCounter+=1,
      //   commandLine: this.state.commandHistory[this.state.arrowKeyPressCounter+=1]
      // }) //TODO
    } else if(ev.keyCode === down) {
      ev.preventDefault();
      if (this.state.arrowKeyPressCounter === 0) return
      // this.setState({
      //   arrowKeyPressCounter: this.state.arrowKeyPressCounter-=1,
      //   commandLine: this.state.commandHistory[this.state.arrowKeyPressCounter-=1]
      // }) //TODO
    }
  }

  componentDidMount() {
    bringBackFocus('#input');
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <Output output={this.state.currentOutput}/>
        <CommandLine
          commandLine={this.state.commandLine}
          handleInputChange={this.handleInputChange}
          onKeyDown={this.onKeyDown}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
