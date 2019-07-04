<template>
  <div class="pageTurning_C">
    <ul class="pages">
      <li class="paper" data-left> 
        <div class="page page-1-back">
          <img class="pageImg" src="../../assets/images/page/1.jpg" alt="">
        </div>
        <div class="page page-1">
          <img class="pageImg" src="../../assets/images/page/2.jpg" alt="">
        </div>
      </li>
      <li class="paper" data-right>
        <div class="page page-2-back">
          <img class="pageImg" src="../../assets/images/page/3.jpg" alt="">
        </div>
        <div class="page page-2">
          <img class="pageImg" src="../../assets/images/page/4.jpg" alt="">
        </div>
      </li>
    </ul>
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
<style scoped>
ul, li {
  padding: 0;
  margin: 0;
}
.pageTurning_C {
  width: 100%;
  height: 100%;
  padding: 50px;
}
.pages {
  height: 500px;
  width: 500px;
  position: relative;
}
.page
.pageImg {
  height: 500px;
  width: 250px;
}
.page-1-back,
.page-2-back {
  position: absolute;
  transform: scale(-1,1);
}
.page-1,
.page-2 {
  position: absolute;
  z-index: 1;
}
@keyframes flip-to-left {
  from {
    transform: perspective(1000px) rotateY(0);
  }
  to {
    transform: perspective(1000px) rotateY(-180deg);
  }
}
.paper {
  height: 500px;
  width: 250px;
  display: none;
  position: absolute;
  /* 默认放在右边 */
  right: 0;
}
.paper[data-left],
.paper[data-right] {
    display: block;
    z-index: 1;
}
.paper[data-left] {
    right: auto;
    left: 0;
}
/* 把相邻的paper显示出来 */
.paper[data-right] + .paper {
    display: block;
}
.paper {
    transform-style: preserve-3d;
}
.page-1,
.page-2 {
    transform: translateZ(1px);
}
.paper[data-right] {
    transform-origin: left center;
    animation: flip-to-left 2s ease-in-out forwards;
}
</style>
