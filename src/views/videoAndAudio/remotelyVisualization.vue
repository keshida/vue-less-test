<template>
  <div class="remotelyVisualization_C pagePosition">
    <ul>
      <li v-for="(item,index) in audioList" :key="index" v-on:click="requestSong(item.src)">{{ item.name }}</li>
    </ul>
    <canvas class="canvasC" id="remotelyId"></canvas>
  </div>
</template>
<script>
export default {
  /**
   * 远程请求
   * 通过request请求 返回数据
   */
  props: {
    audioList: {
      type: Array
    }
  },
  data() {
    return {
      audioCtx: {}, // 音频上下文
      gainNode: {}, // 增益节点
      analyser: {},// 分析器
      scriptProcessor: {},// 处理器
      bufferLength: '',
      dataArray: [],
      audioSource: {},
      isBegin: false
    };
  },
  created() {},
  mounted() {
    this.init()
  },
  beforeDestroy () {
    this.audioCtx.close()
  },
  methods: {
    init () {
      //实例化音频对象
      if (!AudioContext) {
        alert('您的浏览器不支持audioContext!');
        return;
      }
      this.audioCtx = new AudioContext();
      this.audioSource = this.audioCtx.createBufferSource();
      this.analyser = this.audioCtx.createAnalyser();
      this.scriptProcessor = this.audioCtx.createScriptProcessor(0, 2, 2);
      this.gainNode = this.audioCtx.createGain();
      this.analyser.fftSize = 256;
      this.bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(this.bufferLength);
      this.connection()
    },
    connection () {
      this.scriptProcessor.connect(this.audioCtx.destination);
      this.analyser.connect(this.scriptProcessor);
    },
    requestSong (url) {
      /**
       * request请求
       * AudioContext.decodeAudioData
       * 用于异步解码音频文件中
       * 
       * 这个处理数据比较耗时 有明显的停顿
       */
      const request = new XMLHttpRequest();

      request.open('GET', url, true);
      request.responseType = 'arraybuffer';
      request.onload = () => {
        this.audioCtx.decodeAudioData(request.response, buffer => {
          this.playSound(buffer);
        });
      };
      request.send();
    },
    playSound (buffer) {
      /**
       * 一个 AudioBufferSourceNode 只能被播放一次
       * 此处stop(0)将 AudioBufferSourceNode 相当用于清除了 
       * 每次调用 start() 之后 必须重新创建 并连接
       */
      if (this.isBegin) {
        this.audioSource.stop(0);
      }
      this.isBegin = true;
      this.audioSource = this.audioCtx.createBufferSource();
      this.audioSource.connect(this.analyser);
      this.audioSource.connect(this.gainNode);
      this.audioSource.connect(this.audioCtx.destination);

      this.audioSource.buffer = buffer;
      this.audioSource.start(0);// 计划0s之后播放
      this.bindDrawEvent();
    },
    bindDrawEvent () {
      this.scriptProcessor.onaudioprocess = this.draw;
    },
    draw () {
      let canvas = document.getElementById('remotelyId');

      const cWidth = canvas.width = canvas.offsetWidth,
        cHeight = canvas.height = canvas.offsetHeight,
        barWidth = parseInt(0.5 * cWidth / this.bufferLength, 0);

      let barHeight = 0,
        x = 0;

      const cxt = canvas.getContext('2d');

      cxt.clearRect(0, 0, cWidth, cHeight);
      this.analyser.getByteFrequencyData(this.dataArray);
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
.remotelyVisualization_C {
  text-align: left;
  padding: 20px;
  box-sizing: border-box;
}
.remotelyVisualization_C .canvasC {
  height: 100px;
  width: 100%;
  background: #2c3e50;
}
</style>
