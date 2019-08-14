<template>
  <div class="china_C pagePosition">
    <p>音频测试</p>
    <div>
      <audio controls="controls" loop="loop" muted="muted" preload="none" id="musicPlayer">
        <source src="../../../static/audio/she.mp3" type="audio/mpeg"/>
        <source src="../../../static/audio/she.ogg" type="audio/ogg"/>
      </audio>
    </div>
    <div>
      <button v-on:click="play">开始</button>
      <button v-on:click="pause">暂停</button>
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      musicPlayer: {}
    }
  },
  created () {
    // var audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    // var oscillatorNode = audioCtx.createOscillator()
    // var gainNode = audioCtx.createGain()
    // var finish = audioCtx.destination
  },
  mounted () {
    //获取音频文件
    this.musicPlayer = document.getElementById('musicPlayer')
    console.log(this.musicPlayer.textTracks)
  },
  methods: {
    play() {
      console.log(this.musicPlayer.currentSrc)
      this.musicPlayer.currentTime = 20;
      this.musicPlayer.play()
    },
    pause() {
      this.musicPlayer.pause()
    }
  }
}
</script>
<style>
</style>
