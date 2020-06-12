<template>
  <div class="shadowBox_C pagePosition">
    <div class="shadow_btn g-left"></div>
    <div class="shadow_btn g-both"></div>
    <div class="shadow_btn g-slide"></div>
    <div class="shadow1">
      <div class="box"></div>
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
// <style type="text/less" lang="scss" rel="stylesheet/scss" scoped>
</script>
<style scoped>
.shadow_btn {
  position: relative;
  width: 300px;
  height: 50px;
  margin: 3vmin auto 3vmin;
  background: hsl(48, 100%, 50%);
  border-radius: 10px;
  box-shadow: 0 0 3px 1px hsl(48, 100%, 45%);
}

.g-left::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 5%;
  right: 5%;
  bottom: 0;
  border-radius: 10px;
  background: hsl(48, 100%, 20%);
  transform: translate(0, -15%) rotate(-4deg);
  transform-origin: center center;
  box-shadow: 0 0 10px 7px hsl(48, 100%, 20%);
  z-index: -1;
}

.g-both {
  background: hsl(199, 98%, 48%);
  box-shadow: 0 0 3px 1px hsl(199, 98%, 40%);
}

.g-both::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 5%;
  right: 5%;
  bottom: 15%;
  border-radius: 5px;
  background: hsl(199, 98%, 20%);
  transform: translate(0, -20%) rotate(-4deg);
  transform-origin: center center;
  box-shadow: 0 0 10px 7px hsl(199, 98%, 20%);
  z-index: -1;
}

.g-both::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 5%;
  right: 5%;
  bottom: 15%;
  border-radius: 5px;
  background: hsl(199, 98%, 20%);
  transform: translate(0, -20%) rotate(4deg);
  transform-origin: center center;
  box-shadow: 0 0 10px 7px hsl(199, 98%, 20%);
  z-index: -1;
}

.g-slide {
  background: hsl(150, 62%, 52%);
  box-shadow: 0 0 5px 2px hsl(150, 62%, 40%);
}

.g-slide::before {
  content: "";
  position: absolute;
  top: 15%;
  bottom: 20%;
  left: 90%;
  right: 5%;
  border-radius: 5px;
  background: hsl(150, 62%, 20%);
  transform: translate(105%, 10%) rotate(15deg);
  transform-origin: center center;
  box-shadow: 0 0 5px 3px hsl(150, 62%, 20%);
  z-index: -1;
}

.g-slide::after {
  content: "";
  position: absolute;
  top: 15%;
  bottom: 20%;
  left: 5%;
  right: 90%;
  border-radius: 10px;
  background: hsl(150, 62%, 20%);
  transform: translate(-105%, 10%) rotate(-15deg);
  transform-origin: center center;
  box-shadow: 0 0 5px 3px hsl(150, 62%, 20%);
  z-index: -1;
}

.shadow1 {
  background: linear-gradient(90deg, hsl(199, 98%, 50%), hsl(199, 98%, 38%));
  overflow: hidden;
  height: 500px;
  width: 100%;
  position: relative;
}
.box {
  position: relative;
  width: 30vmin;
  height: 30vmin;
  background: #fff;
  margin: 20px auto;
}
.box::before,
.box::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.box::before {
  transform-origin: 0 50%;
  transform: translate(100%, 0) skewY(45deg) scaleX(0.6);
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.3), transparent);
  animation: shadowMoveY 5s infinite linear alternate;
}

.box::after {
  transform-origin: 0 0;
  transform: translate(0%, 100%) skewX(45deg) scaleY(0.6);
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.3), transparent);
  animation: shadowMoveX 5s infinite linear alternate;
}

@keyframes shadowMoveX {
  to {
    transform: translate(0%, 100%) skewX(50deg) scaleY(0.6);
  }
}

@keyframes shadowMoveY {
  to {
    transform: translate(100%, 0) skewY(40deg) scaleX(0.6);
  }
}
</style>
