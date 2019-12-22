<template>
  <div class="filterCss_C pagePosition">
    <div class="item">
      <div class="left">增加曝光</div>
      <div class="right">
        <img class="right-img right-img_1" src="../../assets/images/filter/1.jpg" alt="">
      </div>
    </div>
    <div class="item">
      <div class="left">模糊</div>
      <div class="right">
        <img class="right-img right-img_2" src="../../assets/images/filter/1.jpg" alt="">
      </div>
    </div>
    <div class="item item-gray">
      <div class="left">黑白灰色</div>
      <div class="right">
        <img class="right-img" src="../../assets/images/filter/1.jpg" alt="">
      </div>
    </div>
    <div class="item">
      <div class="left"></div>
      <div class="right simulation">
        <!-- <img class="right-img" src="../../assets/images/filter/1.jpg" alt=""> -->
      </div>
    </div>
    <div class="item">
      <div class="left">融合</div>
      <div class="right fusion">
        <div class="f-l"></div>
        <div class="f-r"></div>
      </div>
    </div>
    <div class="div3" id="div3"> 
      
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
  methods: {
    
  }
}
</script>
<style>
.filterCss_C {
  --size-se: 150px;
  --size-hw: 180px;
  display: flex;
  flex-direction: column;
}
.filterCss_C .item {
  display: flex;
}
.filterCss_C .item .left {
  width: 200px;
  flex-shrink: 0;
}
.filterCss_C .item .right { 
  flex: 1;
}
.filterCss_C .item .right-img {
  width: 200px;
  height: auto;
}
.right-img_1:hover {
  transition: filter 10.3s;
  filter: brightness(5.5) contrast(50%);
}
.right-img_2:hover {
  /*transition: filter .3s;*/
  filter: blur(10px) brightness(80%) opacity(.8);
}
.item-gray {
  width: 100%;
  -webkit-filter: grayscale(100%); 
  /* Chrome, Safari, Opera */
  filter: grayscale(100%);
}


.simulation {
  height: 150px;
  /* 改变--c 背景图片色值变化 类似滤镜效果 */
  --c: #ff000088;
  background: linear-gradient(var(--c),var(--c)),url("../../assets/images/filter/1.jpg");
  background-size: cover;
  
}

.fusion{
  position: relative;
  filter: contrast(100);
  height: 200px;
}
.f-l {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height:var(--size-hw);
  width: var(--size-hw);
  background: red;
  border-radius: 50%;
  filter: blur(5px);
}
.f-r {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 100px;
  height: var(--size-hw);
  width: var(--size-hw);
  background: black;
  border-radius: 50%;
  filter: blur(5px);
}

</style>
