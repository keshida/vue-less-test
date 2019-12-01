<template>
  <div class="speakVisualization_C pagePosition">
    <ul>
      <li v-for="(item,index) in audioList" :key="index" v-on:click="changAudio(index)">{{ item.name }}</li>
    </ul>
    <canvas class="canvasC" id="speakCanvas"></canvas>
    说话人x:<input v-model="pannerPosition.x">
    <input v-model="pannerPosition.x" type="range" min="-50" max="50"><br>
    说话人y:<input v-model="pannerPosition.y">
    <input v-model="pannerPosition.y" type="range" min="-50" max="50"><br>
    说话人z:<input v-model="pannerPosition.z">
    <input v-model="pannerPosition.z" type="range" min="-50" max="50"><br>
    听话人x:<input v-model="camera.x">
    <input v-model="camera.x" type="range" min="-50" max="50"><br>
    听话人y:<input v-model="camera.y">
    <input v-model="camera.y" type="range" min="-50" max="50"><br>
    听话人z:<input v-model="camera.z">
    <input v-model="camera.z" type="range" min="-50" max="50"><br>
    听方向x:<input v-model="forward.x">
    <input v-model="forward.x" type="range" min="-50" max="50"><br>
    听方向y:<input v-model="forward.y">
    <input v-model="forward.y" type="range" min="-50" max="50"><br>
    听方向z:<input v-model="forward.z">
    <input v-model="forward.z" type="range" min="-50" max="50">
  </div>
</template>

<script>
/**
 * 音频空间化
 * 这个是用在WebVR
 * 需要外接设备支持
 * 因为声音输入位置和听者位置没法获取 必须设置好
 * 
 */
export default {
  props: {
    audioList: {
      type: Array
    }
  },
  data() {
    return {
      musicPlayer: {},
      audioCtx: {}, // 音频上下文
      oscillator: {}, // 振荡器
      gainNode: {}, // 增益节点
      analyser: {}, // 分析器
      scriptProcessor: {}, // 处理器
      pannerNode: {}, // 音频监听
      listener: {},
      pannerPosition: {
        x: 0,
        y: 0,
        z: 0
      },
      camera: {
        x: 0,
        y: 0,
        z: 0
      },
      forward: {
        x: 0,
        y: 0,
        z: 0
      },
      bufferLength: '',
      dataArray: [],
      audioSource: {}
    }
  },
  created() {},
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.audioCtx.close();
  },
  methods: {
    init () {
      if (!AudioContext) {
        alert('您的浏览器不支持audioContext!');
        return;
      }
      this.audioCtx = new AudioContext();
      this.musicPlayer = new Audio();
      this.musicPlayer.src= this.audioList[0].src;
      this.audioSource = this.audioCtx.createMediaElementSource(this.musicPlayer);// 创建音频源
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 256;
      this.bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(this.bufferLength);
      this.gainNode = this.audioCtx.createGain();
      this.scriptProcessor = this.audioCtx.createScriptProcessor(2048, 2, 2);
      this.initCreatePanner();
    },
    initCreatePanner () {
      this.pannerNode = this.audioCtx.createPanner();
      // 将发声体坐标传给PannerNode
      this.pannerNode.setPosition(this.pannerPosition.x,this.pannerPosition.y,this.pannerPosition.z);
      this.listener = this.audioCtx.listener;
      // 声音接受位置
      this.listener.setPosition(this.camera.x,this.camera.y,this.camera.z);
      // 声音接受方向
      this.listener.forwardX.value = this.forward.x;
      this.listener.forwardY.value = this.forward.y;
      this.listener.forwardZ.value = this.forward.z;
      this.connect();
    },
    connect () {
      this.audioSource.connect(this.analyser);
      this.audioSource.connect(this.gainNode);
      /**
       * 音频源连上pannar
       */
      this.audioSource.connect(this.pannerNode);
      /**
       * 这里音频源没有连接扬声器
       * 而是pannerNode连接扬声器
       * 相当于此处空间位置出声
       */
      this.pannerNode.connect(this.audioCtx.destination);
      this.analyser.connect(this.scriptProcessor);
      this.scriptProcessor.connect(this.audioCtx.destination);
      this.bindDrawEvent();
    },
    changAudio (index) {
      this.musicPlayer.src= this.audioList[index].src;
      this.musicPlayer.play()
    },
    bindDrawEvent() {
      this.scriptProcessor.onaudioprocess = this.draw;
    },
    draw() {
      /**
       * 这个设置了 说话人的位置 听话人的位置 听的方向
       * 如果有个好的耳机应该效果更好点
       */
      this.pannerNode.setPosition(this.pannerPosition.x,this.pannerPosition.y,this.pannerPosition.z);
      this.listener.setPosition(this.camera.x,this.camera.y,this.camera.z);
      this.listener.forwardX.value = this.forward.x;
      this.listener.forwardY.value = this.forward.y;
      this.listener.forwardZ.value = this.forward.z;
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
