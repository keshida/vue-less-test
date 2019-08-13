<template>
  <div class="china_C pagePosition">
    <p>音频测试</p>
    <div>
      <!-- <audio controls="controls" src="../../assets/audio/test.ogg"></audio> -->
      <!-- <audio controls="controls" src="https://m701.music.126.net/20190813174030/f4626096f04761848b9e239e29e9db24/jdyyaac/0459/5108/040f/33f890a63ffb0358ab803e8013df9841.m4a"></audio> -->
      <audio controls="controls" :src="asdf"></audio>
      <!-- <video controls="controls"  src="../../assets/audios/she.mp3"></video> -->
    </div>
    
  </div>
</template>

<script>
// import asdf from '@/assets/audio/she.mp3'
export default {
  data () {
    return {
      asdf: '../../assets/audio/she.mp3'
    }
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style>
</style>
