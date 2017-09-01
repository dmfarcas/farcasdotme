<template>
  <div class="hello">
    <p>This is another terminal portfolio. Type 'pls stuff' for stuff.</p>
    <pre>{{ linesToBeDisplayed }}</pre> 
    <span>$ </span><input autofocus v-on:keyup.enter="bamboozle" v-model="terminalText"></input>

  </div>
</template>

<script>


export default {
  name: 'firstPage',
  data () {
    return {
      terminalText: '',
      linesToBeDisplayed: '',
      counter: 0
    }
  },
  methods: {
     bamboozle() {
       this.linesToBeDisplayed += `$ ${this.terminalText}\n`;

       if (this.counter === 3) {
         this.counter += 1;
         this.linesToBeDisplayed += "If you insist...\n"
         this.terminalText = "";
         return;
       }
       if(this.terminalText === 'pls stuff') {
         this.linesToBeDisplayed += "> Awesome! Going to the next view. Heeere it comes!\n"
       } else {
         this.counter +=1;
         this.linesToBeDisplayed += "> You don't like to do what you're told, eh?\n"
       }
       this.terminalText = "";

    }
  }
}
</script>

<style scoped>
.hello {
  height: 100vh;
  width: 100vw;
  background-color: #000000; 
  color: #99ff00;
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
  @import url('https://fonts.googleapis.com/css?family=VT323');
  color: #99ff00;
  font-size:2em;
  letter-spacing: 0.1em;

  font-family: VT323;
}
pre {
  margin-bottom: 0;
}
p {
  margin: 0;
}
</style>
