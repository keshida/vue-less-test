<template>
  <div class="theme_C pagePosition">
    <div class="left">
      <!-- 表单项 -->
      <div v-for="item in formList" :key="item.id" class="item" @dragstart="dragstarts" @drag="drags">{{ item.type }}</div>
    </div>
    <div class="middle">
      <!-- 放置项 -->
      2
    </div>
    <div class="right">
      <!-- 配置项 -->
      3
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formList: [
        {id: 1, type: 'select'},
        {id: 2, type: 'select'},
        {id: 3, type: 'select'},
        {id: 4, type: 'select'},
        {id: 5, type: 'select'}
      ]
    }
  },
  created () {},
  mounted () {},
  methods: {
    drags() {

    },
    dragstarts() {

    }
  }
}
</script>

<style lang="scss" scoped>
.theme_C {
  display: flex;
  .left {
    width: 200px;
    height: inherit;
    box-sizing: border-box;
    padding: 10px;
    .item {
      width: 100%;
      height: 30px;
      border: 1px solid #333;
      margin-bottom: 10px;
      line-height: 30px;
      cursor: move;
    }
  }
  .middle {
    flex: 1;
    height: inherit;
  }
  .right {
    width: 200px;
    height: inherit;
  }
}
</style>
