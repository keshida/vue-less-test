<template>
  <div class="onePage videoAudioHome_C">
    <aside>
      <div class="muneList_C" v-for="item in muneList" :key="item.id" v-on:click="viewTheCom(item.id)" v-bind:class="{active_C:item.id == activeId}">{{ item.name }}</div>
      <button class="muneBnt_C" v-on:click="goBack">返回</button>
    </aside>
    <section>
      <Crossword v-if="activeId === 'Crossword'"></Crossword>
      <Bump v-if="activeId === 'Bump'"></Bump>
    </section>
  </div>
</template>
<script>
import Crossword from '@/views/game/Crossword.vue';
import Bump from '@/views/game/Bump.vue';
export default {
  components: {
    Crossword,
    Bump
  },
  data () {
    return {
      activeId: 'Bump',
      muneList: [
        {name: '填字游戏', id: 'Crossword'},
        {name: '对对碰', id: 'Bump'}
      ]
    }
  },
  created () {
    this.init()
  },
  mounted () {},
  methods: {
    init () {
    },
    viewTheCom (id) {
      this.activeId = id;
    },
    goBack () {
      this.$router.go(-1);//返回上一层
    }
  }
}
</script>