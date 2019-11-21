<template>
  <div class="speakVisualization_C pagePosition">
    <canvas class="canvasC" id="speakCanvas"></canvas>
    <input type="range" min="1" max="40">
    <ul class="freq-response-output"></ul>
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
      scriptProcessor: {}, // 处理器
      bufferLength: "",
      dataArray: [],
      audioSource: {},
      reco: null
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

    this.init();
    this.initAnalyser();
  },
  beforeDestroy() {
    this.audioCtx.close();
  },
  methods: {
    setInit() {
      var myAudio = document.querySelector("audio");
      var video = document.querySelector("video");
      var range = document.querySelector("input");
      var freqResponseOutput = document.querySelector(".freq-response-output");
      // create float32 arrays for getFrequencyResponse
      var myFrequencyArray = new Float32Array(5);
      myFrequencyArray[0] = 1000;
      myFrequencyArray[1] = 2000;
      myFrequencyArray[2] = 3000;
      myFrequencyArray[3] = 4000;
      myFrequencyArray[4] = 5000;
      var magResponseOutput = new Float32Array(5);
      var phaseResponseOutput = new Float32Array(5);
      // getUserMedia block - grab stream
      // put it into a MediaStreamAudioSourceNode
      // also output the visuals into a video element
      if (navigator.mediaDevices) {
        console.log("getUserMedia supported.");
        navigator.mediaDevices
          .getUserMedia({
            audio: true,
            video: false
          })
          .then(function(stream) {
            video.srcObject = stream;
            video.onloadedmetadata = function(e) {
              video.play();
              video.muted = true;
            };
            // Create a MediaStreamAudioSourceNode
            // Feed the HTMLMediaElement into it
            var audioCtx = new AudioContext();
            var source = audioCtx.createMediaStreamSource(stream);
            // Create a biquadfilter
            var biquadFilter = audioCtx.createBiquadFilter();
            biquadFilter.type = "lowshelf";
            biquadFilter.frequency.value = 1000;
            biquadFilter.gain.value = range.value;
            // connect the AudioBufferSourceNode to the gainNode
            // and the gainNode to the destination, so we can play the
            // music and adjust the volume using the mouse cursor
            source.connect(biquadFilter);
            biquadFilter.connect(audioCtx.destination);
            // Get new mouse pointer coordinates when mouse is moved
            // then set new gain value
            range.oninput = function() {
              biquadFilter.gain.value = range.value;
            };

            function calcFrequencyResponse() {
              biquadFilter.getFrequencyResponse(
                myFrequencyArray,
                magResponseOutput,
                phaseResponseOutput
              );
              for (i = 0; i <= myFrequencyArray.length - 1; i++) {
                var listItem = document.createElement("li");
                listItem.innerHTML =
                  "" +
                  myFrequencyArray[i] +
                  "Hz: Magnitude " +
                  magResponseOutput[i] +
                  ", Phase " +
                  phaseResponseOutput[i] +
                  " radians.";
                freqResponseOutput.appendChild(listItem);
              }
            }
            calcFrequencyResponse();
          })
          
      }
    },
    init() {
      navigator.mediaDevices.getUserMedia({ audio: true }).then(
        stream => {
          console.log(stream)
          this.audioSource = this.audioCtx.createMediaStreamSource(stream);
          this.reco = new Recorder
          this.audioSource.connect(this.analyser);
          this.audioSource.connect(this.gainNode);
          this.audioSource.connect(this.audioCtx.destination);
          this.bindDrawEvent();
        },
        error => {
          console.log(error);
          alert("出错，请确保已允许浏览器获取音频权限");
        }
      ).catch(function(err) {
        console.log("The following gUM error occured: " + err);
      });
    },
    initAnalyser() {
      //创建分析器
      this.analyser = this.audioCtx.createAnalyser();
      //快速傅里叶变换参数
      this.analyser.fftSize = 256;
      //bufferArray长度
      this.bufferLength = this.analyser.frequencyBinCount;
      //创建bufferArray，用来装音频数据
      this.dataArray = new Uint8Array(this.bufferLength);
      this.gainNode = this.audioCtx.createGain();
      this.initScriptProcessor();
    },
    initScriptProcessor() {
      //创建处理器，参数分别是缓存区大小、输入声道数、输出声道数
      this.scriptProcessor = this.audioCtx.createScriptProcessor(2048, 1, 1);
      //分析器连接处理器，处理器连接扬声器
      this.analyser.connect(this.scriptProcessor);
      this.scriptProcessor.connect(this.audioCtx.destination);
    },
    bindDrawEvent() {
      this.scriptProcessor.onaudioprocess = this.draw;
    },
    draw() {
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
