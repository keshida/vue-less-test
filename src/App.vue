<template>
  <div id="app">
    <!-- <img class="logo_C" src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less'>
@import './less/index.less';
@import './assets/css/base.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // padding-top: 60px;
  height: 100%;
  width: 100%;
}
.logo_C {
  height: auto;
  width: 100px;
}
ul,li {
  list-style: none;
}
</style>
