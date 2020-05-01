<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld v-bind:msg="message" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import configuration from './configuration'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: () => ({ message: configuration.message })
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
