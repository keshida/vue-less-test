<template>
  <div class="pagePosition cueDrag_C">
    <div class="myDrag" @touchstart="sadf" @touchmove="sadf" @touchend="sadfs">
      sadfas
    </div>
    <!-- <div class="demo">
      <div class="drag"  v-drag></div>
    </div>
    <div class="demo2" v-drag:dragable>
        <div id="dragable"><span>这里可以拖动</span></div>
        <div class="content"><span>这里不可以</span></div>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {
    sadf (e) {
      console.log(e)
    },
    sadfs (e) {
      console.log(e)
      console.log(2)
    }
  }
}
</script>
<style>
.drag {
  position: absolute;
  top: 100px;
  left: 100px;
  width: 200px;
  height: 200px;
  background: green;
}
.myDrag {
  height: 50px;
  width: 50px;
  background: red;
  position: absolute;
  top: 200px;
  left: 200px;
}
</style>
