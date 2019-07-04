<template>
  <div class="cueDrag_C">
    <div class="demo">
      <div class="drag"  v-drag></div>
    </div>
    <div class="demo2" v-drag:dragable>
        <div id="dragable"><span>这里可以拖动</span></div>
        <div class="content"><span>这里不可以</span></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style>
.cueDrag_C {
  width: 100%;
  height: 100%;
}
.drag {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 200px;
  height: 200px;
  background: green;
}
</style>
