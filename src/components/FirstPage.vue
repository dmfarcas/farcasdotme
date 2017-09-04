<template>
  <div
   v-if="!shouldTheSpinnerSpin"
   class="hello border">
    <pre>  
     __                                         
    / _|                                        
    | |_ __ _ _ __ ___ __ _ ___   _ __ ___   ___ 
    |  _/ _` | '__/ __/ _` / __| | '_ ` _ \ / _ \
    | || (_| | | | (_| (_| \__ \_| | | | | |  __/
    |_| \__,_|_|  \___\__,_|___(_)_| |_| |_|\___|                                                                             
    </pre>
    <p>{{ introMessage }}</p>
    <pre>{{ linesToBeDisplayed }}</pre> 
    
    <div v-if="shouldTheInputWork">
      <span>$ </span><input class="cursor" autofocus v-on:keyup.enter="bamboozle" v-model="terminalText"></input>
    </div>
  </div>

  <div
  class="spinner-is-spinning"
  v-else>
    <img src="../assets/loader.gif" alt="">
    Loading ...
  </div>
</template>

<script>
import getCommand from '../commands/getCommand';

export default {
  name: 'firstPage',
  data () {
    return {
      terminalText: '',
      linesToBeDisplayed: '',
      counter: 0,
      successCounter: null,
      shouldTheSpinnerSpin: false,
      shouldTheInputWork: true,
      introMessage: "Hello! Type 'help' for help."
    }
  },
  methods: {
     scrollToBottom() { 
       window.scrollTo(0, document.body.scrollHeight);

            },
     goToPong() {
       this.$router.push('pong')
     },
     bamboozle() {
      this.linesToBeDisplayed += `$ ${this.terminalText}\n`;
      this.linesToBeDisplayed += getCommand(this.terminalText);
      //  if (!this.shouldTheInputWork) return;

      //  //todo: refactor so switch statement
      //  if(this.terminalText === 'clear') {
      //    this.linesToBeDisplayed = '';
      //  } else if(this.terminalText === 'pls load') {
      //    this.linesToBeDisplayed += "> Awesome! Going to the next view. Here it comes!"
      //    this.shouldTheInputWork = false;
      //    this.successCounter = 3;
      //    const successInterval = setInterval(() => {
      //    if (this.successCounter === 0) {
      //       clearInterval(successInterval);
      //       this.linesToBeDisplayed += "> Woop!\n"
      //       return;
      //     }
      //      this.linesToBeDisplayed += `> ${this.successCounter} \n`
      //      this.successCounter -= 1;
      //    }, 1000);
      //  } else if (this.terminalText !== '') { //Blank lines aren't unknown commands
      //     this.linesToBeDisplayed += `> Unknown command: ${this.terminalText}`;
      //  }
       this.linesToBeDisplayed += "\n";
       this.terminalText = "";
      //  this.scrollToBottom();
    }
  },
  mounted() {
    document.querySelector(".cursor").onblur = function() {
      this.focus();
    };

  },
}
</script>

<style lang="scss" scoped>
@keyframes fade-to-white {
    0%   {background-color: black;}
    100% {background-color: white;}
}

img {
  margin: 10px;
}
.border {
  background-color: transparent;
  border-radius: 2rem;
  -webkit-box-shadow: inset 0 0 18rem black,
  inset 0 0 3rem black,
  0 0 10rem black;
  box-shadow: inset 0 0 18rem black,
  inset 0 0 3rem black,
  0 0 10rem black;
  position: absolute;
  top: 1%;
  z-index: 99;
  left: 1%;
}
.hello {
  overflow: auto;
  height: 98vh;
  width: 98vw;
  background-color: #000000; 
  color: #99ff00;
}
.spinner-is-spinning {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  // height: 100vh;
  width: 100vw;
  font-size: 24px;
  overflow: hidden;
  color:black;
  animation-fill-mode: forwards;
  animation-name: fade-to-white;
  animation-duration: 3s;
}

input {
  outline: none;
  border: 0 solid red;
  background-color: black;
  border: none;
}
input:focus {
    border: none;
}
p, input, span, pre {
  color: #99ff00;
  font-size:2em;
  letter-spacing: 0.1em;
  font-family: VT323;
  &:not(input) {
    padding-left: 15px;
  }
}
</style>
