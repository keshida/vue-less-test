<template>
  <div class="shadowBox_C pagePosition">
    <div class="shadhow0">
      <div class="shadow_btn g-left"></div>
      <div class="shadow_btn g-both"></div>
      <div class="shadow_btn g-slide"></div>
    </div>
    <div class="shadow1">
      <div class="box"></div>
    </div>
    <div class="shadow2" data-name="Solid Shadow Word">Solid Shadow Word</div>
    <div class="shadow3">Hover Me</div>
    <div class="shadow4"></div>
    <div class="shadow5">
      <div class="left"> TxT Long Shadow</div>
      <div class="right">Txt Shadow</div>
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
<style lang="scss">
.shadhow0 {
  width: 100%;

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
}

.shadow1 {
  /* background: linear-gradient(90deg, hsl(199, 98%, 50%), hsl(199, 98%, 38%)); */
  overflow: hidden;
  height: 100px;
  width: 100%;
  position: relative;
  .box {
    position: relative;
    width: 50px;
    height: 50px;
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
}

.shadow2 {
  font-family: Times New Roman, "serif";
  position: relative;
  font-size: 50px;
  line-height: 100px;
  margin: 20px auto;
  text-align: center;
  text-shadow: 4px 4px 1px #333;

  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: linear-gradient(
      -45deg,
      #fff 0%,
      #fff 25%,
      transparent 25%,
      transparent 50%,
      #fff 50%,
      #fff 75%,
      transparent 75%,
      transparent 100%
    );
    background-size: 6px 6px;
    z-index: 1;
  }

  &::after {
    position: absolute;
    content: attr(data-name);
    top: -4px;
    left: -2px;
    right: 6px;
    bottom: 6px;
    color: #333;
    z-index: 2;
    text-shadow: 3px 3px #fff;
  }
}

.shadow3 {
  width: 200px;
  height: 60px;
  line-height: 60px;
  margin: 20px auto;
  text-align: center;
  border: 1px solid #666;
  cursor: pointer;
  transition: all 0.1s;
  &:hover {
    box-shadow: 0 0 0 20vmax rgba(0, 0, 0, 0.5);
  }
}
.shadow4 {
  position: relative;
  width: 250px;
  height: 250px;
  border: 1px solid #333;
  box-sizing: border-box;
  margin: 50px auto;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    top: -50px;
    left: -50px;
    box-shadow: 50px 50px, 150px 50px, 250px 50px, 50px 100px, 150px 100px,
      250px 100px, 50px 150px, 150px 150px, 250px 150px, 50px 200px, 150px 200px,
      250px 200px, 50px 250px, 150px 250px, 250px 250px;
    animation: move 3s infinite linear;
  }
  
  @keyframes move {
    25% {
      transform: translate(50px);
      color: coral;
      box-shadow: 50px 50px, 150px 50px, 250px 50px, 50px 100px, 150px 100px,
        250px 100px, 50px 150px, 150px 150px, 250px 150px, 50px 200px, 150px 200px,
        250px 200px, 50px 250px, 150px 250px, 250px 250px;
    }
    50% {
      transform: translate(0px);
      color: brown;
      border-radius: 0;
      box-shadow: 50px 50px, 150px 50px, 250px 50px, 100px 100px, 200px 100px,
        300px 100px, 50px 150px, 150px 150px, 250px 150px, 100px 200px,
        200px 200px, 300px 200px, 50px 250px, 150px 250px, 250px 250px;
    }
    75% {
      transform: translate(0px);
      color: teal;
      border-radius: 50%;
      box-shadow: 50px 50px, 150px 50px, 250px 50px, 100px 100px, 200px 100px,
        300px 100px, 50px 150px, 150px 150px, 250px 150px, 100px 200px,
        200px 200px, 300px 200px, 50px 250px, 150px 250px, 250px 250px;
    }
    100% {
      border-radius: 0%;
      box-shadow: 50px 50px, 150px 50px, 250px 50px, 50px 100px, 150px 100px,
        250px 100px, 50px 150px, 150px 150px, 250px 150px, 50px 200px, 150px 200px,
        250px 200px, 50px 250px, 150px 250px, 250px 250px;
    }
  }
}

.shadow5 {
  width: 100%;
  text-align: center;
  font-size: 20px;
  line-height: 50px;

  @function makelongrightshadow($color) {
    $val: 0px 0px $color;
    @for $i from 1 through 50 {
      $color: fade-out(desaturate($color, 1%), .02);
      $val: #{$val}, #{$i}px #{$i}px #{$color};
    }
    @return $val;
  }

  @function makelongleftshadow($color) {
    $val: 0px 0px $color;
    @for $i from 1 through 50 {
      $color: fade-out(desaturate($color, 1%), .02);
      $val: #{$val}, -#{$i}px #{$i}px #{$color};
    }
    @return $val;
  }

  .right {
    text-shadow: makelongrightshadow(hsla(14, 100%, 30%, 1));
    color: hsl(14, 100%, 60%);
  }

  .left {
    text-shadow: makelongleftshadow(hsla(231, 50%, 30%, 1));
    color: hsl(231, 50%, 60%);
  }
}
</style>
