<template>
  <div class="onePage videoAudioHome_C">
    <aside>
      <div class="muneList_C" v-for="item in muneList" :key="item.id" v-on:click="viewTheCom(item.id)" v-bind:class="{active_C:item.id == activeId}">{{ item.name }}</div>
      <button class="muneBnt_C" v-on:click="goBack">返回</button>
    </aside>
    <section>
      <audioFirst :audioList="audioList" v-if="'audioFirst' == activeId"></audioFirst>
      <browserSound :audioList="audioList" v-if="'browserSound' == activeId"></browserSound>
      <audioVisualization :audioList="audioList" v-if="'audioVisualization' == activeId"></audioVisualization>
      <speakVisualization :audioList="audioList" v-if="'speakVisualization' == activeId"></speakVisualization>
      <remotelyVisualization :audioList="audioList" v-if="'remotelyVisualization' == activeId"></remotelyVisualization>
      <ringVisualization :audioList="audioList" v-if="'ringVisualization' == activeId"></ringVisualization>
      <maxaci :audioList="audioList" v-if="'maxaci' == activeId"></maxaci>
      <audioSpatialization :audioList="audioList" v-if="'audioSpatialization' == activeId"></audioSpatialization>
      <imgDisplay :audioList="audioList" v-if="'imgDisplay' == activeId"></imgDisplay>
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
        {name: '开篇', id: 'imgDisplay'},
        {name: '音频可视化1', id: 'audioVisualization'},
        {name: '音频可视化2', id: 'ringVisualization'},
        {name: '远程音频', id: 'remotelyVisualization'},
        {name: '振荡器声音', id: 'browserSound'},
        {name: '麦克风可视化', id: 'speakVisualization'},
        {name: '音频空间化', id: 'audioSpatialization'},
        {name: 'maxaci', id: 'maxaci'},
        {name: 'audioFirst', id: 'audioFirst'}
      ],
      activeId: 'audioSpatialization',
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
    viewTheCom (id) {
      this.activeId = id;
    },
    goBack () {
      this.$router.go(-1);//返回上一层
    }
  }
}
</script>