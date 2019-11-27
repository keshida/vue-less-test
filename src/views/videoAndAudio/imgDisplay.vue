<template>
  <div class="imgDisplay_C pagePosition">
    <img class="disImg" src="../../assets/images/audio/dis1.jpg" alt="">
    <img class="disImg" src="../../assets/images/audio/dis2.jpg" alt="">
    <img class="disImg" src="../../assets/images/audio/dis3.jpg" alt="">
    <img class="disImg" src="../../assets/images/audio/dis4.gif" alt="">
  </div>
</template>

<script>
/**
 * 今天给大家分享的是音频可视化就向图片上的这些比较酷炫的效果
 * 动画跟随着音频的节奏跳动
 * 这个效果基本是 结合js的AudioContext + canvas完成的
 * 音频流转化为数据然后在canvas上添加相应的动画效果绘制出来
 */
export default {
  props: {
    audioList: {
      type: Array
    }
  },
  data () {
    return {
      alindex: 0,
      musicPlayer: {},
      audioLyrics: [],
      audioInfor: {}
    }
  },
  created () {
  },
  mounted () {
    //获取音频文件
    this.musicPlayer = new Audio();
    this.musicPlayer.src= this.audioList[0].src;
    this.musicPlayer.loop = true;
  },
  methods: {
  }
}
</script>
<style>
.imgDisplay_C {
  box-sizing: border-box;
}
.disImg {
  height: auto;
  width: 80%;
}
</style>
