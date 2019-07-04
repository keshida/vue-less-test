<template>
  <div class="webStorage_C">
    <button v-on:click="setSessionData">setSession</button>
    <button v-on:click="setLocalData">setLocalData</button>
    <button v-on:click="setCookie">setCookie</button>
    <button v-on:click="goOtherHref">goOtherHref</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      adsfa: '',
      list: []
    }
  },
  created () {
    
  },
  mounted () {
    // const options = { frequency: 60, referenceFrame: 'device' };
    // const sensor = new AbsoluteOrientationSensor(options);

    // sensor.addEventListener('reading', () => {
    //   // model is a Three.js object instantiated elsewhere.
    //   model.quaternion.fromArray(sensor.quaternion).inverse();
    // });
    // sensor.AddEventListener('error', error => {
    //   if (event.error.name == 'NotReadableError') {
    //     alert("Sensor is not available.");
    //   }
    // });
    // sensor.start();
  },
  methods: {
    setSessionData () {
      window.sessionStorage.setItem('session','asdfasdfasdfas')
    },
    setLocalData () {
      window.localStorage.setItem('session','asdfasdfasdfas')
    },
    // setCookie () {
    //   window.setCookie('setCookie','asdfasdfasdfas')
    // },
    setCookie() {
      document.cookie = 'setCookie=asdfasdfasdfas'
    },
    goOtherHref () {
      window.location.href = 'http://192.168.1.59:8081/#/'
    }
  },
  onunload () {},
  onbeforeunload () {}
}
</script>

<style>
.webStorage_C {
  height: 100%;
  width: 100%;
}
audio {
  width: 200px;
  height: 100px;
}
</style>
