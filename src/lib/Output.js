export default class Output {
  constructor() {
    this.inputChar = "$";
    this.currentOutput = ``;
    this.outputChar = ">";
  }

  get current() {
    return this.currentOutput;
  }

  appendToOutput(output) {
    if (output === 'clear') return
    this.currentOutput += `${this.outputChar} ${output}\n`;
  }

  clear() {
    this.currentOutput = '';
  }
}
