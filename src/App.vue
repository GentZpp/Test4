<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-link to="/hello">hello</router-link>
    <router-link to="/test1">test1</router-link>
    <router-link to="/test2">test2</router-link>
    <router-link to="/test3">test3</router-link>
    <router-link to="/test4">test4</router-link>
    <router-link to="/basic">basic</router-link>
    <!--<router-link to="/basic">basic</router-link>
    <router-link to="/basic">basic</router-link>-->
    <router-view/>
  </div>
</template>

<script>
export default {
name: 'App'
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
