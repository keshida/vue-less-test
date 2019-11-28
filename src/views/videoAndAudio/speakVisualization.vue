<template>
  <div class="speakVisualization_C pagePosition">
    <canvas class="canvasC" id="speakCanvas"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      audioCtx: {}, // 音频上下文
      oscillator: {}, // 振荡器
      gainNode: {}, // 增益节点
      analyser: {}, // 分析器
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

    this.init();
    this.initAnalyser();
  },
  beforeDestroy() {
    this.audioCtx.close();
  },
  methods: {
    init() {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(
        // 浏览器 调用 机器音频接收器
        // 一般调用此功能 都会经过用户同意
        // http 不被允许
        stream => {
          // 返回 流文件
          this.audioSource = this.audioCtx.createMediaStreamSource(stream);
          // createMediaStreamSource 接受流文件创建音频源
          this.audioSource.connect(this.analyser);
          this.audioSource.connect(this.gainNode);
          this.audioSource.connect(this.audioCtx.destination);
          // 用于音频源播放
          this.bindDrawEvent();
        },
        error => {
          console.log(error);
          alert('出错，请确保已允许浏览器获取音频权限');
        }
      ).catch(function(err) {
        console.log('The following gUM error occured: ' + err);
      });
    },
    initAnalyser() {
      // 创建分析器
      this.analyser = this.audioCtx.createAnalyser();
      // 快速傅里叶变换参数
      // 一般都用256 这个用到了数学公式算 英文文档里 没看懂计算经过
      this.analyser.fftSize = 256;
      //bufferArray长度 fftSize值的一半
      this.bufferLength = this.analyser.frequencyBinCount;
      //创建bufferArray，用来装音频数据
      this.dataArray = new Uint8Array(this.bufferLength);
      this.gainNode = this.audioCtx.createGain();
      this.initScriptProcessor();
    },
    initScriptProcessor() {
      // 创建处理器，参数分别是缓存区大小、输入声道数、输出声道数
      this.scriptProcessor = this.audioCtx.createScriptProcessor(2048, 1, 1);
      // 分析器连接处理器
      this.analyser.connect(this.scriptProcessor);
      // 处理器连接扬声器 用于可视化数据显示
      this.scriptProcessor.connect(this.audioCtx.destination);
    },
    bindDrawEvent() {
      this.scriptProcessor.onaudioprocess = this.draw;
    },
    draw() {
      let canvas = document.getElementById('speakCanvas');

      const cWidth = (canvas.width = canvas.offsetWidth),
        cHeight = (canvas.height = canvas.offsetHeight),
        barWidth = parseInt((0.5 * cWidth) / this.bufferLength, 0);

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
.speakVisualization_C {
  text-align: left;
  padding: 20px;
  box-sizing: border-box;
}
.speakVisualization_C .canvasC {
  height: 100px;
  width: 100%;
  background: #2c3e50;
}
</style>
