<template>
  <div class="ringVisualization_C pagePosition">
    <ul>
      <li v-for="(item,index) in audioList" :key="index" v-on:click="selectAudio(index)">{{ item.name }}</li>
    </ul>
    <canvas class="canvasC" id="audioCanvas"></canvas>
    <button @click="carryOn">继续</button>
    <button @click="pause">暂停</button>
  </div>
</template>
<script>
/**
 * 这个是例子 是绘制圆形的可视化图形
 * 圆点跳动 折线跳动
 * 这个跳动节奏 只是取得返回数据中的的第一个值 * 0-1随机数
 * 这个我自己做的例子如果按照和方形取值相同的话会出现一部分圆弧数据为0不动
 * 
 * 添加 暂停 继续
 * 
 * 取消this.scriptProcessor.onaudioprocess 处理器调用图形绘制
 * 采用 window.requestAnimationFrame 动画帧 默认每秒60次 我加了定时器改为150ms 
 * 优点是在浏览器空闲的时候调用函数 不会影响其他函数的调用
 */
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
      audioSource: {},
      isPause: false
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
      if (!AudioContext) {
        alert('您的浏览器不支持audioContext!');
        return;
      }
      this.audioCtx = new AudioContext();
      this.musicPlayer = new Audio();
      this.audioSource = this.audioCtx.createMediaElementSource(this.musicPlayer);
      this.initAnalyser()
    },
    selectAudio (index) {
      // 选择音频
      this.musicPlayer.src= this.audioList[index].src;
      this.musicPlayer.play()
      this.bindDrawEvent();
    },
    carryOn () {
      this.isPause = false;
      this.musicPlayer.play();
      this.canvasDraw();
    },
    pause () {
      this.isPause = true;
      this.musicPlayer.pause();
    },
    initAnalyser () {
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 256;
      this.bufferLength = this.analyser.frequencyBinCount;
      this.dataArray = new Uint8Array(this.bufferLength);
      this.gainNode = this.audioCtx.createGain();
      this.initScriptProcessor()
    },
    initScriptProcessor () {
      this.scriptProcessor = this.audioCtx.createScriptProcessor(2048, 1, 1);
      this.connection();
    },
    connection () {
      this.audioSource.connect(this.analyser);
      this.audioSource.connect(this.gainNode);
      this.audioSource.connect(this.audioCtx.destination);
      this.analyser.connect(this.scriptProcessor);
      this.scriptProcessor.connect(this.audioCtx.destination);
    },
    bindDrawEvent () {
      // this.scriptProcessor.onaudioprocess = this.canvasDraw;
      this.canvasDraw();
    },
    canvasDraw () {
      let canvas = document.getElementById('audioCanvas');

      const cWidth = canvas.width = canvas.offsetWidth,
        cHeight = canvas.height = canvas.offsetHeight;

      let x = cWidth / 2,
        y = cHeight / 2,
        radius = 100,
        startAngle = 0,
        endAngle = Math.PI,
        l = 32,
        // r = 2,
        angle = (Math.PI * 2) / l;
      
      const cxt = canvas.getContext('2d');

      cxt.beginPath()
      cxt.translate(x,y)
      cxt.arc(0, 0, radius, startAngle, endAngle * 2, true);
      cxt.strokeStyle = '#3498db';
      cxt.stroke();
      cxt.closePath()

      this.analyser.getByteFrequencyData(this.dataArray);

      // for (let i = 0; i < l; i++ ) {
      //   cxt.beginPath()
      //   const R = radius + this.setRandom(this.dataArray[0]) / 10;

      //   cxt.arc(0 + R * Math.sin(angle * i), 0 + R * Math.cos(angle * i), r, 0, Math.PI * 2, false);
      //   cxt.strokeStyle = '#fff';
      //   cxt.stroke();
      //   cxt.closePath()
      // }

      cxt.beginPath()
      for (let i = 0; i < l; i++ ) {
        const R = radius + this.setRandom(this.dataArray[0]) / 10;

        if (i === 0) {
          cxt.moveTo(0 + R * Math.sin(angle * i), 0 + R * Math.cos(angle * i));
        } else {
          cxt.lineTo(0 + R * Math.sin(angle * i), 0 + R * Math.cos(angle * i));
        }
      }
      cxt.closePath()
      cxt.strokeStyle = '#fff';
      cxt.stroke();
      if (this.isPause) {
        return
      }
      setTimeout(() => {
        window.requestAnimationFrame(this.canvasDraw);
      },150)
    },
    setRandom (val) {
      return Math.random(1) * val;
    }
  }
};
</script>
<style>
.ringVisualization_C {
  text-align: left;
  padding: 20px;
  box-sizing: border-box;
}
.ringVisualization_C .canvasC {
  height: 500px;
  width: 100%;
  background: #2c3e50;
}
</style>
