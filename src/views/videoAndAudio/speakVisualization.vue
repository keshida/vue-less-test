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
    this.init();
  },
  beforeDestroy() {
    this.audioCtx.close();
  },
  methods: {
    init() {
      if (!AudioContext) {
        alert('您的浏览器不支持audioContext!');
        return;
      }
      this.audioCtx = new AudioContext();
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 256;
      this.gainNode = this.audioCtx.createGain();
      this.scriptProcessor = this.audioCtx.createScriptProcessor(2048, 1, 1);
      this.analyser.connect(this.scriptProcessor);
      this.scriptProcessor.connect(this.audioCtx.destination);
      this.bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(this.bufferLength);
      this.getUserMeadiaFc();
    },
    getUserMeadiaFc () {
      /**
       * 浏览器 调用 音频视频接收器 视频的我没有开
       * 一般调用此功能 都会经过用户同意
       * http 不被允许麦克风摄像头
       */
      navigator.mediaDevices.getUserMedia({ audio: true }).then(
        stream => {
          /**
           * createMediaStreamSource 接受流文件创建音频源
           * 其实可以录制下来，利用流文件传输 可以结合WebRtc即时通信 传输数据
           */
          this.audioSource = this.audioCtx.createMediaStreamSource(stream);
          this.audioSource.connect(this.analyser);
          this.audioSource.connect(this.gainNode);
          this.audioSource.connect(this.audioCtx.destination);
          this.bindDrawEvent();
        }
      ).catch(function(err) {
        console.log('The following gUM error occured: ' + err);
      });
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
