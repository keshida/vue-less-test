<template>
  <div class="cssTestHome_C">
    <aside>
      <div class="muneList_C" v-for="(item,index) in muneList" :key="index" v-on:click="viewTheCom(index)" v-bind:class="{active_C:indexed == index}">{{ item.name }}</div>
      <button class="muneBnt_C" v-on:click="goBack">返回</button>
    </aside>
    <section>
      <cssborder v-if="indexed == 0"></cssborder>
      <tiltingParallax v-if="indexed == 1"></tiltingParallax>
      <imageTransform v-if="indexed == 2"></imageTransform>
      <filterCss v-if="indexed == 3"></filterCss>
      <ballShadow v-if="indexed == 4"></ballShadow>
      <pageTurning v-if="indexed == 5"></pageTurning>
      <myPageTurn v-if="indexed == 6"></myPageTurn>
    </section>
  </div>
</template>
<script>
import cssborder from '@/views/csstest/cssborder';
import tiltingParallax from '@/views/csstest/tiltingParallax';
import imageTransform from '@/views/csstest/imageTransform';
import filterCss from '@/views/csstest/filterCss';
import ballShadow from '@/views/csstest/ballShadow';
import pageTurning from '@/views/csstest/pageTurning';
import myPageTurn from '@/views/csstest/myPageTurn';
export default {
  components: {
    cssborder,
    tiltingParallax,
    imageTransform,
    filterCss,
    ballShadow,
    pageTurning,
    myPageTurn
  },
  data () {
    return {
      muneList: [
        {name: 'testborder'},
        {name: 'tiltingParallax'},
        {name: 'imageTransform'},
        {name: 'filterCss'},
        {name: 'ballShadow'},
        {name: 'pageTurning'},
        {name: 'myPageTurn'}
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
.cssTestHome_C {
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
