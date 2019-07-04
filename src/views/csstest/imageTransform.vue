<template>
  <div class="imageTransform_C">
    <img class="transImg_C" src="../../assets/images/tiltParallax/jpeg.jpeg" alt="">
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
.imageTransform_C {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fefefe;
  perspective: 900px;
}
.transImg_C {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 340px;
  margin: -170px 0 0 -100px;
  /* background: url(jpeg.jpeg) 0 0 / 200px 340px no-repeat; */
  box-shadow: -7px 10px 10px #333;
  transform: rotateX(60deg) rotateY(3deg) rotateZ(-25deg);
  transform-origin: 50% 50%;
  transition: all 1s;
}

.transImg_C:hover {
  transform: rotate3d(0, 0, 0, 0deg);
  box-shadow: -100px 100px 20px rgba(0,0,0,0);
}

</style>
