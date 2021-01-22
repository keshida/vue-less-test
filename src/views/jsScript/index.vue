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
      <date v-if="indexed == 4"></date>
    </section>
  </div>
</template>
<script>
import vueDrag from '@/views/jsScript/vueDrag';
import prototypejs from '@/views/jsScript/prototypejs';
import exceltest from '@/views/jsScript/exceltest';
import ImplicitConversion from '@/views/jsScript/ImplicitConversion';
import date from '@/views/jsScript/date.vue';
export default {
  components: {
    vueDrag,
    prototypejs,
    exceltest,
    ImplicitConversion,
    date
  },
  data () {
    return {
      muneList: [
        {name: 'vueDrag'},
        {name: 'prototypejs'},
        {name: 'exceltest'},
        {name: 'ImplicitConversion'},
        {name: 'date'}
      ],
      indexed: 4
    }
  },
  created () {},
  mounted () {},
  methods: {
    createNonceStr: function () {
      var str = '',
        range = 20,//min
        arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
 
      // 随机产生
      range = Math.round(Math.random() * (36 - 20)) + 20;
      for (let i = 0; i < range; i++) {
        let pos = Math.round(Math.random() * (arr.length - 1));
        
        str += arr[pos];
      }
      return str;
    },
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
