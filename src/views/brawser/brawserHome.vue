<template>
  <div class="brawserHome_C">
    <aside>
      <div class="muneList_C" v-for="item in muneList" :key="item.id" v-on:click="viewTheCom(item.id)" v-bind:class="{active_C:item.id == activeId}">{{ item.name }}</div>
      <button class="muneBnt_C" v-on:click="goBack">返回</button>
    </aside>
    <section>
      <webStorage v-if="activeId == 'webStorage'"></webStorage>
      <H5label v-if="activeId == 'H5label'"></H5label>
      <fullScreen v-if="activeId == 'fullScreen'"></fullScreen>
      <desktopIcon v-if="activeId == 'desktopIcon'"></desktopIcon>
      <Navigator v-if="activeId == 'Navigator'"></Navigator>
      <htmlStyleChange v-if="activeId == 'htmlStyleChange'"></htmlStyleChange>
    </section>
  </div>
</template>
<script>
import webStorage from '@/views/brawser/webStorage';
import H5label from '@/views/brawser/H5label';
import fullScreen from '@/views/brawser/fullScreen';
import desktopIcon from '@/views/brawser/desktopIcon';
import Navigator from '@/views/brawser/Navigator';
import htmlStyleChange from '@/views/brawser/htmlStyleChange';
export default {
  components: {
    webStorage,
    H5label,
    fullScreen,
    desktopIcon,
    Navigator,
    htmlStyleChange
  },
  data () {
    return {
      muneList: [
        {name: 'webStorage', id: 'webStorage'},
        {name: 'H5label', id: 'H5label'},
        {name: 'fullScreen', id: 'fullScreen'},
        {name: 'desktopIcon', id: 'desktopIcon'},
        {name: 'Navigator', id: 'Navigator'},
        {name: 'htmlStyleChange', id: 'htmlStyleChange'}
      ],
      activeId: 'webStorage'
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
<style>
.brawserHome_C {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>