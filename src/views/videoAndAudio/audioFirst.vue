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
      <div class="audioOriginal"><audio controls="controls" loop="loop" src="" muted="muted" id="musicPlayer"></audio></div>
      <div class="audioDisplay">
        
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
          console.log(this.audioLyrics)
          this.audioInfor = resData.data.songinfo;
          console.log(this.audioInfor)
        }
      }
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
