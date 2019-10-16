<template>
  <div class="brawserHome_C">
    <aside>
      <div class="muneList_C" v-for="(item,index) in muneList" :key="index" v-on:click="viewTheCom(index)" v-bind:class="{active_C:indexed == index}">{{ item.name }}</div>
      <button class="muneBnt_C" v-on:click="goBack">返回</button>
    </aside>
    <section>
      <webStorage v-if="indexed == 0"></webStorage>
      <H5label v-if="indexed == 1"></H5label>
      <fullScreen v-if="indexed == 2"></fullScreen>
    </section>
  </div>
</template>
<script>
import webStorage from '@/views/brawser/webStorage';
import H5label from '@/views/brawser/H5label';
import fullScreen from '@/views/brawser/fullScreen';
export default {
  components: {
    webStorage,
    H5label,
    fullScreen
  },
  data () {
    return {
      muneList: [
        {name: 'webStorage'},
        {name: 'H5label'},
        {name: 'fullScreen'}
      ],
      indexed: 2
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
<style>
.brawserHome_C {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>