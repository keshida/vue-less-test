<template>
  <div class="svgHome_C">
    <aside>
      <div class="muneList_C" v-for="(item,index) in muneList" :key="index" v-on:click="viewTheCom(index)" v-bind:class="{active_C:indexed == index}">{{ item.name }}</div>
      <button class="muneBnt_C" v-on:click="goBack">返回</button>
    </aside>
    <section>
      <svgOne v-if="indexed == 0"></svgOne>
    </section>
  </div>
</template>
<script>
import svgOne from '@/views/svgHome/svgOne';
export default {
  components: {
    svgOne
  },
  data () {
    return {
      muneList: [
        {name: 'svgOne'}
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
.svgHome_C {
  height: 100%;
  width: 100%;
  display: flex;
}
</style>
