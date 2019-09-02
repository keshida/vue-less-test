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
        <img class="audioFirstLeftInforImg" :src="audioInfor.pic" alt="">
      </div>
      <div class="audioFirstLeftLyrics">
        <p v-for="(item,index) in audioLyrics" :key="index">{{ item.lineLyric }}</p>
      </div>
    </div>
    <div class="audioFirstRight">
      <div class="audioOriginal"><audio controls="controls" crossOrigin="anonymous" autoplay="autoplay" loop="loop" src="" muted="muted" id="musicPlayer"></audio></div>
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
      audioInfor: {}
    }
  },
  created () {
    // var audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    // var oscillatorNode = audioCtx.createOscillator()
    // var gainNode = audioCtx.createGain()
    // var finish = audioCtx.destination
  },
  mounted () {
    //获取音频文件
    // this.musicPlayer = document.getElementById('musicPlayer')
    this.musicPlayer = new Audio();
    this.musicPlayer.src= this.audioList[0].src;
    this.musicPlayer.loop = true;
    this.musicPlayer.play();
    this.canvasStart()
  },
  methods: {
    changAudio (index) {
      this.musicPlayer.src= this.audioList[index].src;
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
    canvasStart () {
      let canvasId = document.getElementById('canvasId');
      let audioDisplayId = document.getElementById('audioDisplayId');

      canvasId.width = audioDisplayId.offsetWidth;
      canvasId.height = audioDisplayId.offsetHeight;
      let ctx = canvasId.getContext('2d');

      //实例化音频对象
      let AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;

      if (!AudioContext) {
        alert('您的浏览器不支持audio API，请更换浏览器（chrome、firefox）再尝试')
        return;
      }

      let AC = new AudioContext();

      // analyser为analysernode，具有频率的数据，用于创建数据可视化
      let analyser = AC.createAnalyser();

      // gain为gainNode，音频的声音处理模块
      let gainnode = AC.createGain();

      let RAF = this.setTimer();

      // let musicPlayer = document.getElementById('musicPlayer');

      // 通过使用 createMediaElementSource() 方法
      // 创建了一个音源,将其通过 GainNode 节点,输出到AudioDestinationNode 节点以播放
      // audioSource 为音频源
      let audioSource = AC.createMediaElementSource(this.musicPlayer)

      // Create a gain node
      let gainNode = AC.createGain();

      // connect the AudioBufferSourceNode to the gainNode
      // and the gainNode to the destination, so we can play the
      // music and adjust the volume using the mouse cursor
      gainNode.gain.value = 0.3;
      audioSource.connect(gainNode);
      gainNode.connect(AC.destination);

      let channels = 2;
      // 创建一个 采样率与音频环境(AudioContext)相同的 时长2秒的 音频片段。
      let frameCount = AC.sampleRate * 3.0;

      let myArrayBuffer = AC.createBuffer(channels, frameCount, AC.sampleRate/2);

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
        let source = AC.createBufferSource();
        // 把刚才生成的片段加入到 音频片段源节点(AudioBufferSourceNode)。
        source.buffer = myArrayBuffer;
        // 把 音频片段源节点(AudioBufferSourceNode) 连接到
        // 音频环境(AudioContext) 的终节点，这样我们就能听到声音了。
        source.connect(AC.destination);
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
  height: 60px;
  flex-shrink: 0;
}
.audioDisplay {
  flex: 1;
}
.audioOperating {
  height: 60px;
}
</style>
