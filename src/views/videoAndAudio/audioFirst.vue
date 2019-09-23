<template>
  <div class="audioFirst_C pagePosition">
    <div class="audioFirstLeft">
      <div class="audioFirstLeftLists">
        <p class="audioFirstLeftList" v-for="(item,index) in audioList" :key="index" v-on:click="changAudio(index)">{{ item.name }}</p>
      </div>
      <div class="audioFirstLeftInfor">
        <p>{{ audioInfor.songName }}</p>
        <p>{{ audioInfor.songTimeMinutes }}</p>
        <p>{{ audioInfor.artist }}</p>
        <img class="audioFirstLeftInforImg" playbackRate :src="audioInfor.pic" alt="">
      </div>
      <div class="audioFirstLeftLyrics">
        <p v-for="(item,index) in audioLyrics" :key="index">{{ item.lineLyric }}</p>
      </div>
    </div>
    <div class="audioFirstRight">
      <div class="audioOriginal">
        <audio controls src="../../../static/audio/1.mp3"></audio>
        <video controls></video>
        <button id="saveBtn" v-on:click="saveAudio">{{ btnText }}</button>
        <button id="sssaveBtn">fasdfsd</button>
      </div>
      <div class="audioDisplay" id="audioDisplayId">
        <canvas id="canvasId"></canvas>
      </div>
      <div class="audioOperating">
        <div>
          <button v-on:click="play">开始</button>
          <button v-on:click="pause">暂停</button>
          <button id="btnSer">btnSer</button>
        </div>
        <div>
          <input type="text" v-model="currentTime">
          <button v-on:click="playCurrentTime">指定时间</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      musicPlayer: {},
      audioSource: {},// 音频源
      vidoeSource: {},// 视频源 
      sourceBuffer: {},
      currentTime: 0,
      audioList: [
        {name: '来自尘埃的光', src: '../../../static/audio/1.mp3', file: '1.json'},
        {name: '知否知否应是绿肥红瘦', src: '../../../static/audio/2.mp3', file: '2.json'},
        {name: '从别后', src: '../../../static/audio/3.aac', file: '3.json'},
        {name: '永夜', src: '../../../static/audio/4.mp3', file: '4.json'},
        {name: '巅峰之上', src: '../../../static/audio/5.mp3', file: '5.json'},
        {name: '需要人陪', src: '../../../static/audio/6.mp3', file: '6.json'},
        {name: 'she', src: '../../../static/audio/she.mp3'}
      ],
      audioLyrics: [],
      audioInfor: {},
      clicked: true,
      btnText: 'Make sine wave',
      chunks: [],
      mediaRecorder: {}
    }
  },
  created () {},
  mounted () {
    //获取音频文件
    // this.musicPlayer = document.getElementById('musicPlayer')
    this.musicPlayer = new Audio();
    this.musicPlayer.src= this.audioList[0].src;
    this.musicPlayer.loop = true;
    // this.canvasStart()
    // this.getStream()
    // this.destination()

    // this.createStereoPanner();
    //this.setScriptProcessor()
    // var playButton = document.getElementById('sssaveBtn');
    // var source = this.audioCtx.createBufferSource();
    // var scriptNode = this.audioCtx.createScriptProcessor(0, 2, 2);
    // function getData() {
    //   let request = new XMLHttpRequest();
    //   request.open('get', '../../../static/audio/1.mp3', true);
    //   request.responseType = 'arraybuffer';
    //   request.onload = function() {
    //     this.audioCtx.decodeAudioData(request.response, function(buffer) {
    //       source.buffer = buffer;
    //     });
    //   }
    //   request.send();
    // }
    // getData();
    // scriptNode.onaudioprocess = function(audioProcessingEvent) {
    //   var inputBuffer = audioProcessingEvent.inputBuffer;
    //   var outputBuffer = audioProcessingEvent.outputBuffer;
    //   for (var channel = 0; channel < outputBuffer.numberOfChannels; channel++) {
    //     var inputData = inputBuffer.getChannelData(channel);
    //     var outputData = outputBuffer.getChannelData(channel);
    //     for (var sample = 0; sample < inputBuffer.length; sample++) {
    //       outputData[sample] = inputData[sample];
    //     }
    //   }
    // }
    // playButton.onclick = function() {
    //   source.connect(scriptNode);
    //   scriptNode.connect(this.audioCtx.destination);
    //   source.start();
    // }
    // source.onended = function() {
    //   source.disconnect(scriptNode);
    //   scriptNode.disconnect(this.audioCtx.destination);
    // }
  },
  methods: {
    changAudio (index) {
      this.musicPlayer.src= this.audioList[index].src;
      console.log(this.musicPlayer.duration)
      // this.musicPlayer.playbackRate= 1;
      this.musicPlayer.play()
      if (this.audioList[index].file) {
        this.getJsonHttp(index)
      }
    },
    play() {
      this.musicPlayer.play()
    },
    playCurrentTime () {
      this.musicPlayer.currentTime = this.currentTime;
    },
    pause() {
      this.musicPlayer.pause()
    },
    getJsonHttp(index) {
      let newHttp = new XMLHttpRequest();
      
      newHttp.open('get', `../../../static/audio/${this.audioList[index].file}`,true);
      newHttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      newHttp.setRequestHeader('dataType', 'json');
      newHttp.send();
      newHttp.onreadystatechange = () => {
        if (newHttp.readyState === 4 && newHttp.status === 200) {
          let resData = JSON.parse(newHttp.responseText)

          this.audioLyrics = resData.data.lrclist;
          this.audioInfor = resData.data.songinfo;
        }
      }
    },
    setScriptProcessor () {},
    createStereoPanner() {
      let myAudio = document.querySelector('audio');

      myAudio.crossOrigin = 'anonymous';
      //这将防止CORS访问限制。
      
      let source = this.audioCtx.createMediaElementSource(myAudio);

      // Create a stereo panner
      let panNode = this.audioCtx.createStereoPanner();

      panNode.pan.value = 0.1;
      // connect the MediaElementAudioSourceNode to the panNode
      // and the panNode to the destination, so we can play the
      // music and adjust the panning using the controls
      source.connect(panNode);
      panNode.connect(this.audioCtx.destination);
    },
    destination () {
      this.osc = this.audioCtx.createOscillator();
      let dest = this.audioCtx.createMediaStreamDestination();

      this.mediaRecorder = new MediaRecorder(dest.stream);
      this.osc.connect(dest);
 
      this.mediaRecorder.ondataavailable = function(evt) {
        // push each chunk (blobs) in an array
        this.chunks.push(evt.data);
      };
      this.mediaRecorder.onstop = function() {
        // Make blob out of our blobs, and open it.
        let blob = new Blob(this.chunks, { 'type' : 'audio/ogg; codecs=opus' });

        document.querySelector('audio').src = URL.createObjectURL(blob);
      };
    },
    saveAudio () {
      if (this.clicked) {
        this.mediaRecorder.start();
        this.osc.start(0);
        this.btnText = 'Stop recording';
      } else {
        this.mediaRecorder.stop();
        this.osc.stop(0);
      }
    },
    getStream () {
      let video = document.querySelector('video');

      if (navigator.mediaDevices) {
        navigator.mediaDevices.getUserMedia({ audio: true, video: true })
          .then(function(stream) {
            video.srcObject = stream;
            video.onloadedmetadata = function() {
              video.play();
              video.muted = true;
              
              // Create a MediaStreamAudioSourceNode
              // Feed the HTMLMediaElement into it
              let source = this.audioCtx.createMediaStreamSource(stream);
              // Create a biquadfilter
              let biquadFilter = this.audioCtx.createBiquadFilter();

              biquadFilter.type = 'lowshelf';
              biquadFilter.frequency.value = 1000;
              biquadFilter.gain.value = 32;
              // connect the AudioBufferSourceNode to the gainNode
              // and the gainNode to the destination, so we can play the
              // music and adjust the volume using the mouse cursor
              source.connect(biquadFilter);
              biquadFilter.connect(this.audioCtx.destination);
              // Get new mouse pointer coordinates when mouse is moved
              // then set new gain value
            };
          })
          .catch(function(err) {
            console.log('The following gUM error occured: ' + err);
          });
      }
    },
    canvasStart () {
      let canvasId = document.getElementById('canvasId');
      let audioDisplayId = document.getElementById('audioDisplayId');

      canvasId.width = audioDisplayId.offsetWidth;
      canvasId.height = audioDisplayId.offsetHeight;
      // let ctx = canvasId.getContext('2d');
      // let RAF = this.setTimer();

      // 通过使用 createMediaElementSource() 方法
      // 创建了一个音源,将其通过 GainNode 节点,输出到AudioDestinationNode 节点以播放
      // audioSource 为音频源
      let audioSource = this.audioCtx.createMediaElementSource(this.musicPlayer)

      // Create a gain node 音频的声音处理模块
      let gainNode = this.audioCtx.createGain();

      // connect the AudioBufferSourceNode to the gainNode
      // and the gainNode to the destination, so we can play the
      // music and adjust the volume using the mouse cursor
      gainNode.gain.value = 0.3;
      audioSource.connect(gainNode);
      gainNode.connect(this.audioCtx.destination);

      let channels = 2;
      // 创建一个 采样率与音频环境(AudioContext)相同的 时长2秒的 音频片段。
      let frameCount = this.audioCtx.sampleRate * 3.0;

      let myArrayBuffer = this.audioCtx.createBuffer(channels, frameCount, this.audioCtx.sampleRate/2);

      let btnSer = document.getElementById('btnSer')

      btnSer.onclick = function() {
        // 使用白噪声填充;
        // 就是 -1.0 到 1.0 之间的随机数
        for (let channel = 0; channel < channels; channel++) {
        // 这允许我们读取实际音频片段(AudioBuffer)中包含的数据
          let nowBuffering = myArrayBuffer.getChannelData(channel);

          for (let i = 0; i < frameCount; i++) {
            // Math.random() is in [0; 1.0]
            // audio needs to be in [-1.0; 1.0]
            nowBuffering[i] = Math.random() * 2 - 1;
          }
        }
        // 获取一个 音频片段源节点(AudioBufferSourceNode)。
        // 当我们想播放音频片段时，我们会用到这个源节点。
        let source = this.audioCtx.createBufferSource();

        // 把刚才生成的片段加入到 音频片段源节点(AudioBufferSourceNode)。
        source.buffer = myArrayBuffer;
        // 把 音频片段源节点(AudioBufferSourceNode) 连接到
        // 音频环境(AudioCtx) 的终节点，这样我们就能听到声音了。
        source.connect(this.audioCtx.destination);
        // 开始播放声源
        source.start();
      }
    },
    setTimer () {
      //计时器
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    }
  }
}
</script>
<style>
.audioFirst_C {
  display: flex;
}
.audioFirstLeft {
  width: 200px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
}
.audioFirstLeftLists {
  cursor: pointer;
}
.audioFirstLeftList {
  text-align: left;
}
.audioFirstLeftInfor {
  height: 200px;
  flex-shrink: 0;
}
.audioFirstLeftInforImg {
  width: 50%;
  height: auto;
}
.audioFirstLeftLyrics {
  flex: 1;
  overflow: auto;
}

.audioFirstRight {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.audioOriginal {
  height: 200px;
  flex-shrink: 0;
}
.audioDisplay {
  flex: 1;
}
.audioOperating {
  height: 60px;
}

video {
  width: 200px;
  height: 100px;
}
</style>
