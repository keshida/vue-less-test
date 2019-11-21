<template>
  <div class="navigator_C pagePosition">
    <div>appCodeName: {{ navigatorObj.appCodeName }}</div>
    <div>appName: {{ navigatorObj.appName }}</div>
    <div>appVersion: {{ navigatorObj.appVersion }}</div>
    <div>language: {{ navigatorObj.language }}</div>
    <div>platform: {{ navigatorObj.platform }}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      navigatorObj: {},
      list: []
    }
  },
  created () {
    console.log(navigator)
    this.navigatorObj = navigator
  },
  mounted () {
  },
  methods: {
    setSessionData () {

    }
  }
}
</script>

<style>
.navigator_C {
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
