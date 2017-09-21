import React, { Component } from 'react';
import { Header, CommandLine, Output } from './components';
import { getCommand } from './lib/OutputGatherer';
import { bringBackFocus, scrollToBottom } from './lib/helpers';
import './App.css';

class App extends Component {
  state = {
    currentOutput: [],
    commandLine: '',
    commandHistory: [],
    arrowKeyPressCounter: 0
  }

  handleSubmit = async (ev) => {
    ev.preventDefault()

    if (this.state.commandLine !== '') {
      this.setState({
        commandHistory: [this.state.commandLine, ...this.state.commandHistory]
      })
    }

    if (this.state.commandLine === 'clear') {
      this.setState({
        currentOutput: [],
        commandLine: ''
       });
    } else {
      // async await is love...
      const cmd = await getCommand(this.state.commandLine);
      const cmdOutput = await cmd.output;

      this.setState({
        currentOutput: [...this.state.currentOutput, {type: cmd.type, input: this.state.commandLine, output: cmdOutput}],
        commandLine: ''
       });
       setTimeout(e => scrollToBottom('.container'), 500) // heh heh
    }
  }

  handleInputChange = (ev) => {
    this.setState({commandLine: ev.target.value});
  }

  onKeyDown = (ev) => { // TODO dead code, yay.
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

      this.setState((prevState, props) => ({
        commandLine: this.state.commandHistory[this.state.arrowKeyPressCounter],
        arrowKeyPressCounter: this.state.arrowKeyPressCounter  + 1,
      }))

    } else if(ev.keyCode === down) {
      ev.preventDefault();
      if (this.state.arrowKeyPressCounter === 0) return

      this.setState((prevState, props) => ({
        commandLine: this.state.commandHistory[this.state.arrowKeyPressCounter - 1],
        arrowKeyPressCounter: this.state.arrowKeyPressCounter - 1,
      }))
    }
  }

  componentDidMount() {
    bringBackFocus('#input');
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <Output
          output={this.state.currentOutput}/>
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
