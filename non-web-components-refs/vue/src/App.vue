<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <MyTodo />
  </div>
</template>

<script>
import MyTodo from './components/my-todo'

export default {
  name: 'app',
  components: {
    MyTodo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
