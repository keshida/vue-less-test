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
      <lessTest v-if="indexed == 7"></lessTest>
      <loadingCylinder v-if="indexed == 8"></loadingCylinder>
      <faceRecognition v-if="indexed == 9"></faceRecognition>
      <eclipse v-if="indexed == 10"></eclipse>
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
import lessTest from '@/views/csstest/lessTest';
import loadingCylinder from '@/views/csstest/loadingCylinder';
import faceRecognition from '@/views/csstest/faceRecognition';
import eclipse from '@/views/csstest/eclipse';
export default {
  components: {
    cssborder,
    tiltingParallax,
    imageTransform,
    filterCss,
    ballShadow,
    pageTurning,
    myPageTurn,
    lessTest,
    loadingCylinder,
    faceRecognition,
    eclipse
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
        {name: 'myPageTurn'},
        {name: 'lessTest'},
        {name: 'loadingCylinder'},
        {name: 'faceRecognition'},
        {name: 'eclipse'}

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
</style>
