<template>
  <div id="app">
    <FormElement />
  </div>
</template>

<script>
import FormElement from './components/FormElement.vue'

export default {
  name: 'App',
  components: {
    FormElement
  }
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
