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
      <Theme v-if="indexed == 3"></Theme>
    </section>
  </div>
</template>
<script>
import flexbox from '@/views/layout/flexbox';
import gird from '@/views/layout/gird';
import responsive from '@/views/layout/responsive';
import Theme from '@/views/layout/Theme';
export default {
  components: {
    flexbox,
    gird,
    responsive,
    Theme
  },
  data () {
    return {
      muneList: [
        {name: 'flexbox'},
        {name: 'gird'},
        {name: 'responsive'},
        {name: 'Theme'}
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