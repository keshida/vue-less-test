<template>
  <!-- 转移到cssTest，这个暂留给其他的用 -->
  <div class="textSpecialEffectHome_C">
    <aside>
      <div class="muneList_C" v-for="(item,index) in muneList" :key="index" v-on:click="viewTheCom(index)" v-bind:class="{active_C:indexed == index}">{{ item.name }}</div>
      <button class="muneBnt_C" v-on:click="goBack">返回</button>
    </aside>
    <section>
      <textLabel v-if="indexed == 0"></textLabel>
    </section>
  </div>
</template>
<script>
import textLabel from '@/views/textSpecialEffects/textLabel';
export default {
  components: {
    textLabel
  },
  data () {
    return {
      muneList: [
        {name: 'textLabel'}
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
