<template>
  <div class="onePage cssTestHome_C">
    <aside>
      <div class="muneList_C" v-for="(item,index) in muneList" :key="index" v-on:click="viewTheCom(item.name)" v-bind:class="{active_C:activeName == item.name}">{{ item.name }}</div>
      <button class="muneBnt_C" v-on:click="goBack">返回</button>
    </aside>
    <section>
      <tiltingParallax v-if="activeName == 'tiltingParallax'"></tiltingParallax>
      <imageTransform v-if="activeName == 'imageTransform'"></imageTransform>
      <filterCss v-if="activeName == 'filterCss'"></filterCss>
      <ballShadow v-if="activeName == 'ballShadow'"></ballShadow>
      <pageTurning v-if="activeName == 'pageTurning'"></pageTurning>
      <myPageTurn v-if="activeName == 'myPageTurn'"></myPageTurn>
      <lessTest v-if="activeName == 'lessTest'"></lessTest>
      <loadingCylinder v-if="activeName == 'loadingCylinder'"></loadingCylinder>
      <faceRecognition v-if="activeName == 'faceRecognition'"></faceRecognition>
      <eclipse v-if="activeName == 'eclipse'"></eclipse>
      <clipStyle v-if="activeName == 'clipStyle'"></clipStyle>
      <spinSphere v-if="activeName == 'spinSphere'"></spinSphere>
      <solarSystem v-if="activeName == 'solarSystem'"></solarSystem>
      <weather v-if="activeName == 'weather'"></weather>
      <btnStyle v-if="activeName == 'btnStyle'"></btnStyle>
      <textLabel v-if="activeName == 'textLabel'"></textLabel>
      <shadowBox v-if="activeName == 'shadowBox'"></shadowBox>
    </section>
  </div>
</template>
<script>
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
import clipStyle from '@/views/csstest/clipStyle';
import spinSphere from '@/views/csstest/spinSphere';
import solarSystem from '@/views/csstest/solarSystem';
import weather from '@/views/csstest/weather';
import btnStyle from '@/views/csstest/btnStyle';
import textLabel from '@/views/csstest/textLabel';
import shadowBox from '@/views/csstest/shadowBox';

export default {
  components: {
    tiltingParallax,
    imageTransform,
    filterCss,
    ballShadow,
    pageTurning,
    myPageTurn,
    lessTest,
    loadingCylinder,
    faceRecognition,
    eclipse,
    clipStyle,
    spinSphere,
    solarSystem,
    weather,
    btnStyle,
    textLabel,
    shadowBox
  },
  data () {
    return {
      muneList: [
        {name: 'tiltingParallax'},
        {name: 'imageTransform'},
        {name: 'filterCss'},
        {name: 'ballShadow'},
        {name: 'pageTurning'},
        {name: 'myPageTurn'},
        {name: 'lessTest'},
        {name: 'loadingCylinder'},
        {name: 'faceRecognition'},
        {name: 'eclipse'},
        {name: 'clipStyle'},
        {name: 'spinSphere'},
        {name: 'solarSystem'},
        {name: 'weather'},
        {name: 'btnStyle'},
        {name: 'textLabel'},
        {name: 'shadowBox'}
      ],
      activeName: 'tiltingParallax'
    }
  },
  created () {},
  mounted () {},
  methods: {
    viewTheCom (name) {
      this.activeName = name;
    },
    goBack () {
      this.$router.go(-1);//返回上一层
    }
  }
}
</script>
<style>
</style>
