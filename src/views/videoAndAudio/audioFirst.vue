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
    this.musicPlayer = document.getElementById('musicPlayer')
    this.musicPlayer.src= this.audioList[0].src;
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

      // audioSource 为音频源，bufferSource为buffer源
      let audioSource, bufferSource;

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

      gainnode.gain.value = 1;

      let RAF = this.setTimer();

      let musicPlayer = document.getElementById('musicPlayer');

      audioSource = AC.createMediaElementSource(musicPlayer)
      // audioSource.connect(analyser);
      // analyser.fftSize = 256;
      
      // Create a gain node
      let gainNode = AC.createGain();

      // Create variables to store mouse pointer Y coordinate
      // and HEIGHT of screen
      let CurY;
      let HEIGHT = window.innerHeight;

      // Get new mouse pointer coordinates when mouse is moved
      // then set new gain value

      document.onmousemove = updatePage;

      function updatePage(e) {
        CurY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
        gainNode.gain.value = CurY/HEIGHT;
      }


      // connect the AudioBufferSourceNode to the gainNode
      // and the gainNode to the destination, so we can play the
      // music and adjust the volume using the mouse cursor
      audioSource.connect(gainNode);
      gainNode.connect(AC.destination);
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
  height: 100px;
  flex-shrink: 0;
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
