<template>
  <div class="speakVisualization_C pagePosition">
    <ul>
      <li v-for="(item,index) in audioList" :key="index" v-on:click="changAudio(index)">{{ item.name }}</li>
    </ul>
    <canvas class="canvasC" id="speakCanvas"></canvas>
    说话人x:<input v-model="pannerPosition.x">
    <input v-model="pannerPosition.x" type="range" min="-100" max="100"><br>
    说话人y:<input v-model="pannerPosition.y">
    <input v-model="pannerPosition.y" type="range" min="-100" max="100"><br>
    说话人z:<input v-model="pannerPosition.z">
    <input v-model="pannerPosition.z" type="range" min="-100" max="100"><br>
    听话人x:<input v-model="camera.x">
    <input v-model="camera.x" type="range" min="-100" max="100"><br>
    听话人y:<input v-model="camera.y">
    <input v-model="camera.y" type="range" min="-100" max="100"><br>
    听话人z:<input v-model="camera.z">
    <input v-model="camera.z" type="range" min="-100" max="100"><br>
    听方向x:<input v-model="forward.x">
    <input v-model="forward.x" type="range" min="-100" max="100"><br>
    听方向y:<input v-model="forward.y">
    <input v-model="forward.y" type="range" min="-100" max="100"><br>
    听方向z:<input v-model="forward.z">
    <input v-model="forward.z" type="range" min="-100" max="100">
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
        z: 0,
      },
      camera: {
        x: 0,
        y: 0,
        z: 0,
      },
      forward: {
        x: 0,
        y: 0,
        z: 0,
      },
      bufferLength: "",
      dataArray: [],
      audioSource: {},
    };
  },
  created() {},
  mounted() {
    //实例化音频对象
    if (!AudioContext) {
      alert("您的浏览器不支持audioContext!");
      return;
    }
    this.audioCtx = new AudioContext();

    this.initAnalyser();
  },
  beforeDestroy() {
    this.audioCtx.close();
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
    init() {
      this.musicPlayer = new Audio();
      this.musicPlayer.loop = true;
      this.musicPlayer.src= this.audioList[6].src;
      this.musicPlayer.play()
      this.audioSource = this.audioCtx.createMediaElementSource(this.musicPlayer);// 创建音频源

      this.audioSource.connect(this.analyser);
      this.audioSource.connect(this.gainNode);
      this.audioSource.connect(this.pannerNode);
      // this.audioSource.connect(this.audioCtx.destination);
      this.pannerNode.connect(this.audioCtx.destination);
      // 用于音频源播放
      this.bindDrawEvent();
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
      this.scriptProcessor = this.audioCtx.createScriptProcessor(2048, 2, 2);
      // 分析器连接处理器
      this.analyser.connect(this.scriptProcessor);
      // 处理器连接扬声器 用于可视化数据显示
      this.scriptProcessor.connect(this.audioCtx.destination);
      this.initCreatePanner()
    },
    initCreatePanner () {
      this.pannerNode = this.audioCtx.createPanner();
      // 将发声体坐标传给PannerNode
      this.pannerNode.setPosition(this.pannerPosition.x,this.pannerPosition.y,this.pannerPosition.z);
      this.pannerNode.panningModel = 'HRTF';
      this.pannerNode.distanceModel = 'inverse';
      this.pannerNode.refDistance = 1;
      this.pannerNode.maxDistance = 10000;
      this.pannerNode.rolloffFactor = 1;
      this.pannerNode.coneInnerAngle = 360;
      this.pannerNode.coneOuterAngle = 0;
      this.pannerNode.coneOuterGain = 0;

      this.listener = this.audioCtx.listener;
      // 声音接受位置
      this.listener.setPosition(this.camera.x,this.camera.y,this.camera.z);
      // 声音接受方向
      this.listener.forwardX.value = this.forward.x;
      this.listener.forwardY.value = this.forward.y;
      this.listener.forwardZ.value = this.forward.z;
      this.init();
    },
    bindDrawEvent() {
      this.scriptProcessor.onaudioprocess = this.draw;
    },
    draw() {
      this.pannerNode.setPosition(this.pannerPosition.x,this.pannerPosition.y,this.pannerPosition.z);
      this.listener.setPosition(this.camera.x,this.camera.y,this.camera.z);
      this.listener.forwardX.value = this.forward.x;
      this.listener.forwardY.value = this.forward.y;
      this.listener.forwardZ.value = this.forward.z;
      let canvas = document.getElementById("speakCanvas");

      const cWidth = (canvas.width = canvas.offsetWidth),
        cHeight = (canvas.height = canvas.offsetHeight),
        barWidth = parseInt((0.5 * cWidth) / this.bufferLength, 0);

      let barHeight = 0,
        x = 0;

      const cxt = canvas.getContext("2d");

      cxt.clearRect(0, 0, cWidth, cHeight);
      //分析器获取音频数据“切片”
      this.analyser.getByteFrequencyData(this.dataArray);

      //把每个音频“切片”画在画布上
      cxt.fillStyle = "#3498db";
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
