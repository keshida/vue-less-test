<template>
  <div class="audioVisualization_C pagePosition">
    <ul>
      <li v-for="(item,index) in audioList" :key="index" v-on:click="changAudio(index)">{{ item.name }}</li>
    </ul>
    <canvas class="canvasC" id="audioCanvas"></canvas>
  </div>
</template>

<script>
export default {
  props: {
    audioList: {
      type: Array
    }
  },
  data() {
    return {
      audioCtx: {}, // 音频上下文
      oscillator: {}, // 振荡器
      gainNode: {}, // 增益节点
      analyser: {},// 分析器
      scriptProcessor: {},// 处理器
      bufferLength: '',
      dataArray: [],
      audioSource: {}
    };
  },
  created() {},
  mounted() {
    //实例化音频对象
    if (!AudioContext) {
      alert('您的浏览器不支持audioContext!');
      return;
    }
    this.audioCtx = new AudioContext();
    
    this.musicPlayer = new Audio();
    this.musicPlayer.src= this.audioList[0].src;
    this.musicPlayer.loop = true;
    this.audioSource = this.audioCtx.createMediaElementSource(this.musicPlayer);

    this.initAnalyser()
  },
  beforeDestroy () {
    this.audioCtx.close()
  },
  methods: {
    changAudio (index) {
      this.musicPlayer.src= this.audioList[index].src;
      this.musicPlayer.play()
      this.setAudio()
    },
    setAudio () {
      this.audioSource.connect(this.analyser);
      this.audioSource.connect(this.gainNode);
      this.audioSource.connect(this.audioCtx.destination);

      this.bindDrawEvent(); 
    },
    initAnalyser () {
      //创建分析器
      this.analyser = this.audioCtx.createAnalyser();
      //快速傅里叶变换参数
      this.analyser.fftSize = 256;
      //bufferArray长度
      this.bufferLength = this.analyser.frequencyBinCount;
      //创建bufferArray，用来装音频数据
      this.dataArray = new Uint8Array(this.bufferLength);
      this.gainNode = this.audioCtx.createGain();
      this.initScriptProcessor()
    },
    initScriptProcessor () {
      //创建处理器，参数分别是缓存区大小、输入声道数、输出声道数
      this.scriptProcessor = this.audioCtx.createScriptProcessor(2048, 1, 1);
      //分析器连接处理器，处理器连接扬声器
      this.analyser.connect(this.scriptProcessor);
      this.scriptProcessor.connect(this.audioCtx.destination);
    },
    bindDrawEvent () {
      this.scriptProcessor.onaudioprocess = this.draw;
    },
    draw () {
      let canvas = document.getElementById('audioCanvas');

      const cWidth = canvas.width = canvas.offsetWidth,
        cHeight = canvas.height = canvas.offsetHeight,
        barWidth = parseInt(0.5 * cWidth / this.bufferLength, 0);

      let barHeight = 0,
        x = 0;

      const cxt = canvas.getContext('2d');

      cxt.clearRect(0, 0, cWidth, cHeight);
      //分析器获取音频数据“切片”
      this.analyser.getByteFrequencyData(this.dataArray);
    
      //把每个音频“切片”画在画布上
      cxt.fillStyle = '#3498db';
      for (let i = 0; i < this.bufferLength; i++) {
        barHeight = parseInt(0.2 * this.dataArray[i], 0);
        cxt.fillRect(x, cHeight, barWidth, -barHeight);
        x += barWidth + 3;
      }
    }
  }
};
</script>
<style>
.audioVisualization_C {
  text-align: left;
  padding: 20px;
  box-sizing: border-box;
}
.audioVisualization_C .canvasC {
  height: 100px;
  width: 100%;
  background: #2c3e50;
}
</style>
