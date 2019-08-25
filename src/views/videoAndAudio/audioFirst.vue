<template>
  <div class="china_C pagePosition">
    <p v-for="(item,index) in audioList" :key="index" v-on:click="changAudio(index)" @dblclick="dbchangAudio(index)">{{ item.name }}</p>
    <div>
      <!-- <audio controls="controls" loop="loop" muted="muted" preload="none" id="musicPlayer">
        <source src="../../../static/audio/she.mp3" type="audio/mpeg"/>
        <source src="../../../static/audio/she.ogg" type="audio/ogg"/>
      </audio> -->
      <audio controls="controls" loop="loop" src="" muted="muted" id="musicPlayer">
        <!-- <source src="../../../static/audio/1.mp3" type="audio/mpeg"/> -->
      </audio>
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
      currentTime: 0,
      audioList: [
        {name: '来自尘埃的光', src: '../../../static/audio/1.mp3'},
        {name: '知否知否应是绿肥红瘦', src: '../../../static/audio/2.mp3'},
        {name: 'she', src: '../../../static/audio/she.mp3'}
      ]
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
    this.musicPlayer.src= this.audioList[0].src;
  },
  methods: {
    changAudio (index) {
      this.musicPlayer.src= this.audioList[index].src;
    },
    dbchangAudio (index) {
      this.musicPlayer.src= this.audioList[index].src;
      this.musicPlayer.play()
    },
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
