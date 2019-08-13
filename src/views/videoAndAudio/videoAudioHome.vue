<template>
  <div class="onePage videoAudioHome_C">
    <aside>
      <div class="muneList_C" v-for="(item,index) in muneList" :key="index" v-on:click="viewTheCom(index)" v-bind:class="{active_C:indexed == index}">{{ item.name }}</div>
      <button class="muneBnt_C" v-on:click="goBack">返回</button>
    </aside>
    <section>
      <audioFirst v-if="indexed == 0"></audioFirst>
    </section>
  </div>
</template>
<script>
import audioFirst from '@/views/videoAndAudio/audioFirst';
export default {
  components: {
    audioFirst
  },
  data () {
    return {
      muneList: [
        {name: 'audioFirst'}
      ],
      indexed: 0
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