<template>
  <div id="pong-container">
    <div class="message">    
      <h1>{{message}}</h1>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        message: "Let's play a game of pong. Press any key to begin!"
      }
    }
  }
</script>

<style>
@keyframes appear-and-disappear {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 100;
  }
  100% {
    opacity: 0;
  }
}

.message {
  display: flex;
  align-content: center;
  border: 1px solid green;
  background-color: grey;
  animation-fill-mode: forwards;
  /* animation-name: appear-and-disappear; */
  /* animation-duration: 1s; */
  /* animation-iteration-count: infinite; */

}

#pong-container {
  height: 100vh;
  width: 100wh;
  background-color: black;
}

</style>
