<template>
  <div class="filterCss_C pagePosition">
    <div class="div1">
    </div>
    <div class="div2">
    </div>
    <div class="div3" id="div3"> 
      <div class="db" id="d1"></div>
      <div class="dr" id="d2"></div>
    </div>
    <div class="simulation"></div>
    <div class="page-gray">
      <div class="page-gray_1"></div>
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
  width: 100%;
  height: 100%;
  --size-se: 150px;
  --size-hw: 180px;
}

.div1 {
  width: 200px;
  height: 200px;
  background: url("../../assets/images/filter/1.jpg") no-repeat;
  background-size: 100% auto;
}
.div1:hover {
  transition: filter 10.3s;
  filter: brightness(5.5) contrast(50%);
 }
.div2 {
  width: 200px;
  height: 200px;
  background: url("../../assets/images/filter/1.jpg") no-repeat;
  background-size: 100% auto;
}
.div2:hover {
  /*transition: filter .3s;*/
  filter: blur(10px) brightness(80%) opacity(.8);
}
.div3 {
  /*background: #f1f1f1;*/
}
.div3{
  position: relative;
  filter: contrast(100);
}
.db {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  height:var(--size-hw);
  width: var(--size-hw);
  background: black;
  border-radius: 100%;
  filter: blur(5px);
}
.dr {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  height: var(--size-hw);
  width: var(--size-hw);
  background: black;
  border-radius: 100%;
  filter: blur(5px);
}

.simulation {
  height: 200px;
  width: 300px;
  /* 改变--c 背景图片色值变化 类似滤镜效果 */
  --c: #ff000088;
  background: linear-gradient(var(--c),var(--c)),url("../../assets/images/filter/1.jpg");
  background-size: cover;
  
}
.page-gray {
  height: 200px;
  width: 100%;
  -webkit-filter: grayscale(100%); 
  /* Chrome, Safari, Opera */
  filter: grayscale(100%);
}
.page-gray_1 {
  background: red;
  width: 50px;
  height: 50px;
}
</style>
