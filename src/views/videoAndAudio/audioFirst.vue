<template>
  <div class="audioFirst_C pagePosition">
    <div class="list">
      <p class="item" v-bind:class="{active : index == alindex}" v-for="(item,index) in audioList" :key="index" v-on:click="changAudio(index)">{{ item.name }}</p>
    </div>
    <div class="lyrics">
      <p v-for="(item,index) in audioLyrics" :key="index">{{ item.lineLyric }}</p>
    </div>
    <div class="right">
      <div class="info">
        <p>{{ audioInfor.songName }}</p>
        <p>{{ audioInfor.songTimeMinutes }}</p>
        <p>{{ audioInfor.artist }}</p>
        <img class="audioFirstLeftInforImg" playbackRate :src="audioInfor.pic" alt="">
      </div>
      <div class="control">
        <button v-on:click="play">开始</button>
        <button v-on:click="pause">暂停</button>
        <button id="btnSer">btnSer</button>
      </div>
    </div>
  </div>
</template>

<script>
// 目标： 音乐播放界面
//   播放顺序： 单曲 随机 顺序
//   歌词： 跟随滚动 标记变色
export default {
  props: {
    audioList: {
      type: Array
    }
  },
  data () {
    return {
      alindex: 0,
      musicPlayer: {},
      audioLyrics: [],
      audioInfor: {}
    }
  },
  created () {
  },
  mounted () {
    //获取音频文件
    this.musicPlayer = new Audio();
    this.musicPlayer.src= this.audioList[0].src;
    this.musicPlayer.loop = true;
  },
  methods: {
    changAudio (index) {
      this.alindex = index;
      this.musicPlayer.src= this.audioList[index].src;
      // this.musicPlayer.playbackRate= 1;
      this.musicPlayer.play()
      if (this.audioList[index].file) {
        this.getJsonHttp(index)
      }
    },
    play() {
      this.musicPlayer.play()
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
    }
  }
}
</script>
<style>
.audioFirst_C {
  display: flex;
  box-sizing: border-box;
}

.list {
  width: 20%;
  flex-shrink: 0;
  padding-left: 10px;
  box-sizing: border-box;
}
.right {
  width: 20%;
  flex-shrink: 0;
}
.lyrics {
  flex: 1;
  height: 100%;
  overflow-y: auto;
}
.list .item {
  font-size: 18px;
  color: #333;
  cursor: pointer;
  margin-bottom: 10px;
  text-align: left;
}
.list .item.active {
  color: #000;
  font-weight: 600;
}
.lyrics::-webkit-scrollbar {
  display: none;
}
</style>
