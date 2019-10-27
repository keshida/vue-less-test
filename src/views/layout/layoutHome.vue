<template>
  <div class="onePage layoutHome_C">
    <aside>
      <div class="muneList_C" v-for="(item,index) in muneList" :key="index" v-on:click="viewTheCom(index)" v-bind:class="{active_C:indexed == index}">{{ item.name }}</div>
      <button class="muneBnt_C" v-on:click="goBack">返回</button>
    </aside>
    <section>
      <flexbox v-if="indexed == 0"></flexbox>
      <gird v-if="indexed == 1"></gird>
      <responsive v-if="indexed == 2"></responsive>
    </section>
  </div>
</template>
<script>
import flexbox from '@/views/layout/flexbox';
import gird from '@/views/layout/gird';
import responsive from '@/views/layout/responsive';
export default {
  components: {
    flexbox,
    gird,
    responsive
  },
  data () {
    return {
      muneList: [
        {name: 'flexbox'},
        {name: 'gird'},
        {name: 'responsive'}
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