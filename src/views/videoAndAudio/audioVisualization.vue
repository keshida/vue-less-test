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
  /**
   * AudioContext 生成音频的上下文 都有操作都会在AudioContext之下完成
   * 首先要获取一个音频源 audio标签 new Audio() 请求的数据流 或者是浏览器接受的话筒设备
   * 
   * 这个是个简单的例子，canvas上根据音频流绘制简单的方形动画效果
   * requestAnimationFrame
   */
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
    this.init();
  },
  beforeDestroy () {
    this.audioCtx.close()
  },
  methods: {
    init () {
      // 实例化音频对象
      if (!AudioContext) {
        alert('您的浏览器不支持audioContext!');
        return;
      }
      /**
       * new AudioContext() 创建音频对象
       */
      this.audioCtx = new AudioContext();

      /**
       * 这个例子是new Audio()
       */
      this.musicPlayer = new Audio();
      this.musicPlayer.src= this.audioList[0].src;
      this.musicPlayer.loop = true;

      /**
       * 通过createMediaElementSource 根据文档音频文件来源 创建音频源
       */
      this.audioSource = this.audioCtx.createMediaElementSource(this.musicPlayer);
      this.initAnalyser()
    },
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
      /**
       * 创建分析器
       * 这个相当于可视化的核心
       * 音频播放中的所有数据返回都是analyser返回的
       */
      this.analyser = this.audioCtx.createAnalyser();
      /**
       * 快速傅里叶变换参数 这个参数设置规定2的倍数 一般指定为256 有个文档是讲这个的 但都是英文 还有计算公式 没怎么看
       */
      this.analyser.fftSize = 256;
      /**
       * bufferArray长度 默认为fftSize的1/2
       * 图上显示的是绘制128个竖线，但音频 我也不太清除是 音调还是跟高低音有关，后面很多都是0 就像现在显示的样子
       */
      this.bufferLength = this.analyser.frequencyBinCount;
      //创建bufferArray，用来装音频数据
      this.dataArray = new Uint8Array(this.bufferLength);
      /**
       * gainNode用来控制音频图的总体增益(或音量)
       */
      this.gainNode = this.audioCtx.createGain();
      this.initScriptProcessor()
    },
    initScriptProcessor () {
      /**
       * 创建处理器，参数分别是缓存区大小、输入声道数、输出声道数
       * 监听音频播放 靠这个一直更新数据变化
       */
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
