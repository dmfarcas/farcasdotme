export default class Output {
  constructor() {
    this.inputChar = "$";
    this.currentOutput = ``;
    this.outputChar = ">";
    this.loadingChars = ['◐', '◓', '◑', '◒'] // TODO TODO TODO
    this.history = []
  }

  get current() {
    return this.currentOutput;
  }

  addToHistory(output) {
    this.history = [...this.history, output]
  }

  history() {
    return this.history
  }

  appendToOutput(output, type) {
    if (type === 'input' && output !== 'history') this.addToHistory(output);
    if (output === 'clear') return
    this.currentOutput += `${type === 'output' ? this.outputChar : this.inputChar} ${output}\n`;
  }

  clear() {
    this.currentOutput = '';
  }
}
