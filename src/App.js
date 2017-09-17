import React, {Component} from 'react';
import {Header, CommandLine, Output} from './components';
import {getCommand, output} from './lib/OutputGatherer';

import {bringBackFocus} from './lib/AppHelpers';
import './App.css';

class App extends Component {
  state = {
    currentOutput: output.current,
    commandLine: ''
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    const outputReturnedForThisCommand = getCommand(this.state.commandLine);
    const shouldIClearOutput = this.state.commandLine === "clear";
    output.appendToOutput(outputReturnedForThisCommand, shouldIClearOutput);
    this.setState({currentOutput: output.current, commandLine: ''});
  }

  handleInputChange = (ev) => {
    this.setState({commandLine: ev.target.value});
  }

  componentDidMount() {
    bringBackFocus();
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <Output output={this.state.currentOutput}/>
        <CommandLine commandLine={this.state.commandLine} handleInputChange={this.handleInputChange} handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
