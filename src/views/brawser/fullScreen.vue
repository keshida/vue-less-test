<template>
  <div class="fullScreen_C pagePosition">
    <button class="" v-on:click="fullscreen('win')">窗口全屏</button>
    <button class="" v-on:click="fullscreen('div')">div全屏</button>
    <button class="" v-on:click="fullscreen('img')">img全屏</button>
    <button class="" v-on:click="fullscreen('close')">退出全屏</button>
    <div class="imgDiv" id="imgDiv">
        <img class="img" id="img" src="../../assets/images/audio/sealevel.jpg">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  created () {
    
  },
  mounted () {
  },
  methods: {
    
    fullscreen (e) {
      if (e === 'win') {
        document.body.requestFullscreen();
      } else if (e === 'div') {
        document.getElementById('imgDiv').requestFullscreen();
      } else if (e === 'img') {
        document.getElementById('img').requestFullscreen();
      } else if (e === 'close') {
        document.exitFullscreen()
      }
    },
    toFullVideo (videoDom) {
      if (videoDom.requestFullscreen) {
        return videoDom.requestFullscreen();
      } else if (videoDom.webkitRequestFullScreen) {
        return videoDom.webkitRequestFullScreen();
      } else if (videoDom.mozRequestFullScreen) {
        return videoDom.mozRequestFullScreen();
      } else if (videoDom.msRequestFullscreen) {
        return videoDom.msRequestFullscreen();
      }
    },
    exitfull () {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  },
  onunload () {},
  onbeforeunload () {}
}
</script>

<style>
.imgDiv {
  height: 100px;
  width: 100px;
}
.imgDiv img {
  height: 100px;
  width: 100px;

}
</style>
