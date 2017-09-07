<template>
  <div
   v-if="!shouldTheSpinnerSpin"
   class="hello border">
<pre>     __
    / _|
    | |_ __ _ _ __ ___ __ _ ___   _ __ ___   ___ 
    |  _/ _` | '__/ __/ _` / __| | '_ ` _ \ / _ \
    | || (_| | | | (_| (_| \__ \_| | | | | |  __/
    |_| \__,_|_|  \___\__,_|___(_)_| |_| |_|\___|</pre>
    <div class="links">
      <a href="http://github.com/dmfarcas" target="_blank">GitHub</a>
      <a href="http://twitter.com/dmfarcas" target="_blank">Twitter</a>
      <a href="http://instagram.com/dmfarcas" target="_blank">Instagram</a>
      <a href="https://www.linkedin.com/in/farcas-dan-mihai-518376109/" target="_blank">LinkedIn</a>
    </div> 
    <p>{{ introMessage }}</p>
    <pre>{{ linesToBeDisplayed }}</pre> 
    
    <div v-if="shouldTheInputWork">
      <span v-if="linesToBeDisplayed === ''">$ </span><input class="cursor" autofocus v-on:keyup.enter="bamboozle" v-model="terminalText"></input>
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
import { getCommand, output } from '../commands/getCommand';

export default {
  name: 'firstPage',
  data () {
    return {
      terminalText: '',
      linesToBeDisplayed: output.current,
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
       output.appendToOutput(getCommand(this.terminalText));
       this.linesToBeDisplayed = output.current;
       this.terminalText = "";
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
$default-green-color:  #99ff00;
pre {
  // margin-bottom:0!important;
}
.links {
  margin-left:63px;
  margin-bottom: 30px;
  a {
    text-decoration: none;
    margin-left: 5px;
    color: white;
  }
}
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
  color: $default-green-color;
}
.spinner-is-spinning {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
p, input, span, pre, a {
  color: $default-green-color;
  font-size:2em;
  letter-spacing: 0.1em;
  font-family: VT323;
  &:not(input) {
    padding-left: 15px;
  }
}
</style>
