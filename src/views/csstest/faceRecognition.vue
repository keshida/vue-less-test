<template>
  <div class="faceRecognition_C pagePosition">
    <div class="face">
      <img class="face_img" src="../../assets/images/tiltParallax/3dr_chihiro.png" />
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
.faceRecognition_C {

}
.face {
  height: 300px;
  width: 300px;
  position: relative;
}
.face_img {
  height: 100%;
  width: auto;
}
.face::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: 
    linear-gradient(#03a9f4, #03a9f4),
    linear-gradient(90deg, #ffffff33 1px, transparent 0, transparent 19px),
    linear-gradient(#ffffff33 1px, transparent 0, transparent 19px),
    linear-gradient(transparent, #2196f3);
  background-size: 100% 1.5%, 10% 100%, 100% 10%, 100% 100%;
  background-repeat: no-repeat, repeat, repeat, repeat;
  background-position: 0 0, 0 0, 0 0, 0 0;
  clip-path: polygon(0% 0%, 100% 0%, 100% 1.5%, 0% 1.5%);
  animation: move 2s linear infinite;
}
@keyframes move {
  to {
    background-position: 0 100%, 0 0, 0 0, 0 0;
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  }
}
</style>