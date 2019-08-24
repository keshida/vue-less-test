<template>
  <div class="textSpecialEffectHome_C">
    <aside>
      <div class="muneList_C" v-for="(item,index) in muneList" :key="index" v-on:click="viewTheCom(index)" v-bind:class="{active_C:indexed == index}">{{ item.name }}</div>
      <button class="muneBnt_C" v-on:click="goBack">返回</button>
    </aside>
    <section>
      <vueDrag v-if="indexed == 0"></vueDrag>
      <prototypejs v-if="indexed == 1"></prototypejs>
    </section>
  </div>
</template>
<script>
import vueDrag from '@/views/jsScript/vueDrag';
import prototypejs from '@/views/jsScript/prototypejs';
export default {
  components: {
    vueDrag,
    prototypejs
  },
  data () {
    return {
      muneList: [
        {name: 'vueDrag'},
        {name: 'prototypejs'}
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
.textSpecialEffectHome_C {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
