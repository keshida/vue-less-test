<template>
  <div class="brawserHome_C">
    <aside>
      <div class="muneList_C" v-for="(item,index) in muneList" :key="index" v-on:click="viewTheCom(index)" v-bind:class="{active_C:indexed == index}">{{ item.name }}</div>
      <button class="muneBnt_C" v-on:click="goBack">返回</button>
    </aside>
    <section>
      <webStorage v-if="indexed == 0"></webStorage>
      <H5label v-if="indexed == 1"></H5label>
    </section>
  </div>
</template>
<script>
import webStorage from '@/views/brawser/webStorage';
import H5label from '@/views/brawser/H5label';
export default {
  components: {
    webStorage,
    H5label
  },
  data () {
    return {
      muneList: [
        {name: 'webStorage'},
        {name: 'H5label'}
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
<style>
.brawserHome_C {
  height: 100%;
  width: 100%;
  display: flex;
}
aside {
  height: 100%;
  flex: 1;
  background: #f1f1f1;
  position: relative;
}
.muneList_C {
  height: 30px;
  line-height: 30px;
}
.active_C {
  background: #05ba9a;
  color: #fff;
}
.muneBnt_C {
  position: absolute;
  height: 30px;
  width: 80%;
  background: #c5d2db;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  outline: none;
  color: #fff;
  border-radius: 3px;
}
.muneBnt_C:hover {
  background: #2096ba;
}
.muneBnt_C:active {
  background: #df6e21;
}
section {
  height: 100%;
  flex: 9;
}
</style>