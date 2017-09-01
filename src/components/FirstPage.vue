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
      counter: 0,
      successCounter: null
    }
  },
  methods: {
     bamboozle() {
       this.linesToBeDisplayed += `$ ${this.terminalText}\n`;

       if (this.counter === 3) {
         this.counter += 1;
         this.linesToBeDisplayed += "> If you insist..."
       } else if(this.terminalText === 'pls stuff') {
         this.linesToBeDisplayed += "> Awesome! Going to the next view. Heeere it comes!"
         this.successCounter = 3;
         const successInterval = setInterval(() => {
         if (this.successCounter === 0) {
            clearInterval(successInterval);
            this.linesToBeDisplayed += "> Done!\n"
            return;
          }
           this.linesToBeDisplayed += `> ${this.successCounter} \n`
           this.successCounter -= 1;
         }, 1000);
       } else {
         this.counter +=1;
         this.linesToBeDisplayed += "> You don't like to do what you're told, eh?"
       }

       this.linesToBeDisplayed += "\n";
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
.x:after {
      content: "Loading ...";
      display: flex;
      align-items: center;
      justify-content: center;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      font-size: 24px;
      color: #fff;
      background-color: rgba(mediumspringgreen, 0.5);
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
}
pre {
  margin-bottom: 0;
}
p {
  margin: 0;
}
</style>
