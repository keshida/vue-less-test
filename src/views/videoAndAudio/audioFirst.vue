<template>
  <div class="china_C pagePosition">
    <p>音频测试</p>
    <div>
      <!-- <audio controls="controls" loop="loop" muted="muted" preload="none" id="musicPlayer">
        <source src="../../../static/audio/she.mp3" type="audio/mpeg"/>
        <source src="../../../static/audio/she.ogg" type="audio/ogg"/>
      </audio> -->
      <audio controls="controls" src="https://webfs.yun.kugou.com/201908242120/8f5c5c8c960efe37e7507685ef6af953/G165/M01/18/19/RYcBAF1Kh7uALs57AC4XijezPT0599.mp3">来自尘埃的光</audio>
    </div>
    <div>
      <button v-on:click="play">开始</button>
      <button v-on:click="pause">暂停</button>
      
    </div>
    <div>
      <input type="text" v-model="currentTime">
      <button v-on:click="playCurrentTime">指定时间</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      musicPlayer: {},
      currentTime: 0
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
  },
  methods: {
    play() {
      this.musicPlayer.play()
    },
    playCurrentTime () {
      this.musicPlayer.currentTime = this.currentTime;
    },
    pause() {
      this.musicPlayer.pause()
    }
  }
}
</script>
<style>
</style>
