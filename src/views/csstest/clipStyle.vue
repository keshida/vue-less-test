<template>
  <div class="clipStyle_C pagePosition">
    <div class="solarSystem">
      <div class="sun" v-for="item in 12" :key="item">
        <img src="../../assets/images/filter/1.jpg" alt />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style type="text/less" lang="less" rel="stylesheet/less">
.clipStyle_C {
  .solarSystem {
    padding-top: 200px;
    width: 800px;
  }
  .sun {
    width: 200px;
    height: 180px;
    clip-path: polygon(75% 0, 100% 50%, 75% 100%, 25% 100%, 0 50%, 25% 0);
    float: left;
    margin-right: 100px;
  }
  .sun:nth-child(2n) {
    margin: -90px -50px 0 -150px;
  }
  .sun img {
    width: 400px;
    height: auto;
    object-fit: cover;
  }
}
</style>
