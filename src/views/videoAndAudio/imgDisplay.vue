<template>
  <div class="imgDisplay_C pagePosition">
    <p class="imgDisplay_title">音频可视化分享</p>
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
/**
 * 目前来讲这个应用场景并不多见
 * 之前也是发现这个是处理音频文件的又提供可很多强大的功能
 * 但发现这个对也处理音频 解码并没有什么帮助
 * 处理音频方法还是原有的audioNode的方法
 * 
 * 我目前看到的音频可视化的项目大都是别人分享的技术网站 简单的demo 没有集成到大的项目里
 * 
 * 类似用到的向 k歌 之类的声音和原歌曲数据比较打分 这一类看到的比较多
 * 还有就是结合系统动态桌面
 * 
 * 很多音频可视化都是结合WebGL做成网页3d效果 粒子效果
 * 
 * 网上很多图片 音频动态效果都是AE效果图
 * 真实的音频数据如果放上去效果不会很美观 大部分都是截取其中一部分数据在做计算处理显示出来的
 * 
 * 网易云音乐团队也在做这一类的，但我没找到相关的项目
 * 
 * （找图片）
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
.imgDisplay_title {
  font-size: 30px;
  line-height: 100px;
}
</style>
