<template>
  <div class="remotelyVisualization_C pagePosition">
    <ul>
      <li v-for="(item,index) in audioList" :key="index" v-on:click="requestSong(item.src)">{{ item.name }}</li>
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
      buffer: {},
      loading: false,
      playing: false,
      playStart: '',
      playResume: 0,
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
    this.init()
  },
  beforeDestroy () {
    this.audioCtx.close()
  },
  methods: {
    init () {
      this.audioSource = this.audioCtx.createBufferSource();
      //创建分析器
      this.analyser = this.audioCtx.createAnalyser();
      //创建处理器，参数分别是缓存区大小、输入声道数、输出声道数
      this.scriptProcessor = this.audioCtx.createScriptProcessor(0, 2, 2);
      this.gainNode = this.audioCtx.createGain();

      //快速傅里叶变换参数
      this.analyser.fftSize = 256;
      //bufferArray长度
      this.bufferLength = this.analyser.frequencyBinCount;
      //创建bufferArray，用来装音频数据
      this.dataArray = new Uint8Array(this.bufferLength);
      this.connection()
    },
    connection () {
      this.scriptProcessor.connect(this.audioCtx.destination);
      this.analyser.connect(this.scriptProcessor);
      this.audioSource.connect(this.analyser);
      this.audioSource.connect(this.gainNode);
      this.audioSource.connect(this.audioCtx.destination);
    },
    requestSong (url) {
      const request = new XMLHttpRequest();

      request.open('GET', url, true);
      request.responseType = 'arraybuffer';

      this.loading = true;
      request.onload = () => {
        this.audioCtx.decodeAudioData(request.response, buffer => {
          console.log(buffer)
          // buffer.length = buffer.length/2
          this.loading = false;
          this.playing = true;

          this.buffer = buffer;
          this.playSound(buffer);
        });
      };
      request.send();
    },
    playSound (buffer) {
      // this.audioSource.buffer = null;
      setTimeout(() => {
        this.audioSource.buffer = buffer;
        this.audioSource.loop = true;
        this.audioSource.start(0);
        this.playStart = new Date().getTime();
        this.bindDrawEvent();
      }, 200)
    },
    onPlay () {
      //重新播放需要重新创建buffer
      this.audioSource = this.audioCtx.createBufferSource();
      this.audioSource.connect(this.analyser);
      this.audioSource.connect(this.audioCtx.destination);
      this.audioSource.buffer = this.buffer;
      this.audioSource.loop = true;
      this.audioSource.start(0, this.playResume);

      this.playStart = new Date().getTime() - this.playResume * 1000;

      this.playing = true;
    },
    onPause () {
      this.playResume = new Date().getTime();
      this.playResume -= this.playStart;
      this.playResume /= 1000;
      this.playResume %= this.audioSource.buffer.duration;
      this.audioSource.stop();
      this.playing = false;
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
.remotelyVisualization_C {
  text-align: left;
  padding: 20px;
  box-sizing: border-box;
}
.remotelyVisualization_C .canvasC {
  height: 600px;
  width: 100%;
  background: #2c3e50;
}
</style>
