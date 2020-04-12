<template>
  <div class="onePage videoAudioHome_C">
    <aside>
      <div class="muneList_C" v-for="item in muneList" :key="item.id" v-on:click="viewTheCom(item.id)" v-bind:class="{active_C:item.id == activeId}">{{ item.name }}</div>
      <button class="muneBnt_C" v-on:click="goBack">返回</button>
    </aside>
    <section>
      <confession v-if="activeId === 'confession'"></confession>
    </section>
  </div>
</template>
<script>
import confession from '@/views/canvasTest/confession';
export default {
  components: {
    confession
  },
  data () {
    return {
      muneList: [
        {name: '粒子表白', id: 'confession'}
      ],
      activeId: 'confession'
    }
  },
  created () {},
  mounted () {},
  methods: {
    viewTheCom (id) {
      this.activeId = id;
    },
    goBack () {
      this.$router.go(-1);//返回上一层
    }
  }
}
</script>