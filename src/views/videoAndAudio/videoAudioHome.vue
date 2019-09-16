<template>
  <div class="onePage videoAudioHome_C">
    <aside>
      <div class="muneList_C" v-for="(item,index) in muneList" :key="index" v-on:click="viewTheCom(index)" v-bind:class="{active_C:indexed == index}">{{ item.name }}</div>
      <button class="muneBnt_C" v-on:click="goBack">返回</button>
    </aside>
    <section>
      <audioFirst v-if="indexed == 0"></audioFirst>
      <browserSound v-if="indexed == 1"></browserSound>
      <audioVisualization v-if="indexed == 2"></audioVisualization>
      <speakVisualization v-if="indexed == 3"></speakVisualization>
      <remotelyVisualization v-if="indexed == 4"></remotelyVisualization>
      <differentSpeed v-if="indexed == 5"></differentSpeed>
    </section>
  </div>
</template>
<script>
import audioFirst from '@/views/videoAndAudio/audioFirst';
import browserSound from '@/views/videoAndAudio/browserSound';
import audioVisualization from '@/views/videoAndAudio/audioVisualization';
import speakVisualization from '@/views/videoAndAudio/speakVisualization';
import remotelyVisualization from '@/views/videoAndAudio/remotelyVisualization';
import differentSpeed from '@/views/videoAndAudio/differentSpeed';
export default {
  components: {
    audioFirst,
    browserSound,
    audioVisualization,
    speakVisualization,
    remotelyVisualization,
    differentSpeed
  },
  data () {
    return {
      muneList: [
        {name: 'audioFirst'},
        {name: 'browserSound'},
        {name: 'audioVisualization'},
        {name: 'speakVisualization'},
        {name: 'remotelyVisualization'},
        {name: 'differentSpeed'}
      ],
      indexed: 5
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