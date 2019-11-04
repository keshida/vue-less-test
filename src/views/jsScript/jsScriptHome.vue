<template>
  <div class="textSpecialEffectHome_C">
    <aside>
      <div class="muneList_C" v-for="(item,index) in muneList" :key="index" v-on:click="viewTheCom(index)" v-bind:class="{active_C:indexed == index}">{{ item.name }}</div>
      <button class="muneBnt_C" v-on:click="goBack">返回</button>
    </aside>
    <section>
      <vueDrag v-if="indexed == 0"></vueDrag>
      <prototypejs v-if="indexed == 1"></prototypejs>
      <exceltest v-if="indexed == 2"></exceltest>
      <ImplicitConversion v-if="indexed == 3"></ImplicitConversion>
    </section>
  </div>
</template>
<script>
import vueDrag from '@/views/jsScript/vueDrag';
import prototypejs from '@/views/jsScript/prototypejs';
import exceltest from '@/views/jsScript/exceltest';
import ImplicitConversion from '@/views/jsScript/ImplicitConversion';
export default {
  components: {
    vueDrag,
    prototypejs,
    exceltest,
    ImplicitConversion
  },
  data () {
    return {
      muneList: [
        {name: 'vueDrag'},
        {name: 'prototypejs'},
        {name: 'exceltest'},
        {name: 'ImplicitConversion'}
      ],
      indexed: 3
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
.textSpecialEffectHome_C {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
