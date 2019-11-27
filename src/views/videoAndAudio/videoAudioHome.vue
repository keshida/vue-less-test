<template>
  <div class="onePage videoAudioHome_C">
    <aside>
      <p>音频可视化分享</p>
      <div class="muneList_C" v-for="(item,index) in muneList" :key="index" v-on:click="viewTheCom(index)" v-bind:class="{active_C:indexed == index}">{{ item.name }}</div>
      <button class="muneBnt_C" v-on:click="goBack">返回</button>
    </aside>
    <section>
      <audioFirst :audioList="audioList" v-if="indexed == 0"></audioFirst>
      <browserSound :audioList="audioList" v-if="indexed == 1"></browserSound>
      <audioVisualization :audioList="audioList" v-if="indexed == 2"></audioVisualization>
      <speakVisualization :audioList="audioList" v-if="indexed == 3"></speakVisualization>
      <remotelyVisualization :audioList="audioList" v-if="indexed == 4"></remotelyVisualization>
      <ringVisualization :audioList="audioList" v-if="indexed == 5"></ringVisualization>
      <maxaci :audioList="audioList" v-if="indexed == 6"></maxaci>
      <audioSpatialization :audioList="audioList" v-if="indexed == 7"></audioSpatialization>
      <imgDisplay :audioList="audioList" v-if="indexed == 8"></imgDisplay>
    </section>
  </div>
</template>
<script>
import imgDisplay from '@/views/videoAndAudio/imgDisplay';
import audioFirst from '@/views/videoAndAudio/audioFirst';
import browserSound from '@/views/videoAndAudio/browserSound';
import audioVisualization from '@/views/videoAndAudio/audioVisualization';
import speakVisualization from '@/views/videoAndAudio/speakVisualization';
import remotelyVisualization from '@/views/videoAndAudio/remotelyVisualization';
import ringVisualization from '@/views/videoAndAudio/ringVisualization';
import maxaci from '@/views/videoAndAudio/maxaci';
import audioSpatialization from '@/views/videoAndAudio/audioSpatialization';
export default {
  components: {
    imgDisplay,
    audioFirst,
    browserSound,
    audioVisualization,
    speakVisualization,
    remotelyVisualization,
    ringVisualization,
    maxaci,
    audioSpatialization
  },
  data () {
    return {
      muneList: [
        {name: 'audioFirst'},
        {name: 'browserSound'},
        {name: 'audioVisualization'},
        {name: 'speakVisualization'},
        {name: 'remotelyVisualization'},
        {name: 'ringVisualization'},
        {name: 'maxaci'},
        {name: 'audioSpatialization'},
        {name: 'imgDisplay'}
      ],
      indexed: 5,
      audioList: [
        {name: '来自尘埃的光', src: '../../../static/audio/1.mp3', file: '1.json'},
        {name: '知否知否应是绿肥红瘦', src: '../../../static/audio/2.mp3', file: '2.json'},
        {name: '从别后', src: '../../../static/audio/3.aac', file: '3.json'},
        {name: '永夜', src: '../../../static/audio/4.mp3', file: '4.json'},
        {name: '巅峰之上', src: '../../../static/audio/5.mp3', file: '5.json'},
        {name: '需要人陪', src: '../../../static/audio/6.mp3', file: '6.json'},
        {name: '江湖笑', src: '../../../static/audio/7.mp3', file: '7.json'},
        {name: 'she', src: '../../../static/audio/she.mp3'}
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {
    viewTheCom (index) {
      this.indexed = index;
    },
    goBack () {
      this.$router.go(-1);//返回上一层
    }
  }
}
</script>