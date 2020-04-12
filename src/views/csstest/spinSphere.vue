<template>
  <div class="spinSphere_C pagePosition" id>
    <div class="ball">
      <div class="ball_box">
        <div class="x1"></div>
        <div class="x2"></div>
        <div class="x3"></div>
        <div class="x4"></div>
        <div class="x5"></div>
        <div class="x6"></div>
        <div class="x7"></div>
        <div class="x8"></div>
        <div class="x9"></div>
        <div class="y1"></div>
        <div class="y2"></div>
        <div class="y3"></div>
        <div class="y4"></div>
        <div class="y5"></div>
        <div class="y6"></div>
        <div class="y7"></div>
        <div class="y8"></div>
        <div class="y9"></div>
      </div>
    </div>
    <div class="wrap">
      <!--包裹所有元素的容器-->
      <div class="cube">
        <!--前面图片 -->
        <div class="out_front outDiv">
          <!-- <img src="./images/5.jpg" class="pic" /> -->
        </div>
        <!--后面图片 -->
        <div class="out_back outDiv">
          <!-- <img src="./images/5.jpg" class="pic" /> -->
        </div>
        <!--左面图片 -->
        <div class="out_left outDiv">
          <!-- <img src="./images/5.jpg" class="pic" /> -->
        </div>
        <!--右面图片 -->
        <div class="out_right outDiv">
          <!-- <img src="./images/5.jpg" class="pic" /> -->
        </div>
        <!--上面图片 -->
        <div class="out_top outDiv">
          <!-- <img src="./images/5.jpg" class="pic" /> -->
        </div>
        <!--下面图片 -->
        <div class="out_bottom outDiv">
          <!-- <img src="./images/5.jpg" class="pic" /> -->
        </div>

        <!--小正方体 -->
        <span class="in_front inDiv">
          <!-- <img src="./images/1.jpg" class="in_pic" /> -->
        </span>
        <span class="in_back inDiv">
          <!-- <img src="./images/1.jpg" class="in_pic" /> -->
        </span>
        <span class="in_left inDiv">
          <!-- <img src="./images/1.jpg" class="in_pic" /> -->
        </span>
        <span class="in_right inDiv">
          <!-- <img src="./images/1.jpg" class="in_pic" /> -->
        </span>
        <span class="in_top inDiv">
          <!-- <img src="./images/1.jpg" class="in_pic" /> -->
        </span>
        <span class="in_bottom inDiv">
          <!-- <img src="./images/1.jpg" class="in_pic" /> -->
        </span>
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
<style>
.spinSphere_C {
  background: #333;
  position: relative;
}
.ball {
  height: 500px;
  width: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -250px 0 0 -250px;
  transition: all 0.6s;
}
.ball:hover {
  transform: scale(1.2);
}

.ball_box {
  width: 100%;
  height: 100%;
  animation: rotate3d 20s infinite linear;
}
.ball div {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: solid 1px #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -50% 0 0 -50%;
  transform-style: preserve-3d;
}
.ball .x1 {
  transform: rotateY(0deg);
}
.ball .x2 {
  transform: rotateY(20deg);
}
.ball .x3 {
  transform: rotateY(40deg);
}
.ball .x4 {
  transform: rotateY(60deg);
}
.ball .x5 {
  transform: rotateY(80deg);
}
.ball .x6 {
  transform: rotateY(100deg);
}
.ball .x7 {
  transform: rotateY(120deg);
}
.ball .x8 {
  transform: rotateY(140deg);
}
.ball .x9 {
  transform: rotateY(160deg);
}

.ball .y1 {
  transform: rotateX(90deg) translateZ(200px) scale(0.6);
}
.ball .y2 {
  transform: rotateX(90deg) translateZ(150px) scale(0.8);
}
.ball .y3 {
  transform: rotateX(90deg) translateZ(100px) scale(0.92);
}
.ball .y4 {
  transform: rotateX(90deg) translateZ(50px) scale(0.98);
}
.ball .y5 {
  transform: rotateX(90deg) translateZ(0);
}
.ball .y6 {
  transform: rotateX(90deg) translateZ(-50px) scale(0.98);
}
.ball .y7 {
  transform: rotateX(90deg) translateZ(-100px) scale(0.92);
}
.ball .y8 {
  transform: rotateX(90deg) translateZ(-150px) scale(0.8);
}
.ball .y9 {
  transform: rotateX(90deg) translateZ(-200px) scale(0.6);
}

@keyframes rotate3d {
  0% {
    transform: rotate(-20deg) rotateX(-20deg) rotateY(0deg);
  }
  100% {
    transform: rotate(-20deg) rotateX(-180deg) rotateY(360deg);
  }
}

/*最外层容器样式*/
.wrap {
  width: 200px;
  height: 200px;
  margin: 200px;
  position: relative;
}

/*包裹所有容器样式*/
.cube {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  transform-style: preserve-3d;
  transform: rotateX(-30deg) rotateY(-80deg);
  animation: rotate linear 20s infinite;
}

@keyframes rotate {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  /* 20% {
      transform: rotateX(360deg) rotateY(360deg);
  }
  40% {
      transform: rotateX(360deg) rotateY(360deg);
  }
  60% {
      transform: rotateX(360deg) rotateY(360deg);
  }
  80% {
      transform: rotateX(360deg) rotateY(360deg);
  } */
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

.cube div {
  position: absolute;
  width: 200px;
  height: 200px;
  opacity: 0.8;
  transition: all 0.4s;
}

/*定义所有图片样式*/
.pic {
  width: 200px;
  height: 200px;
}

.cube .out_front {
  /* transform: rotateY(0deg) translateZ(100px); */
  animation: move1 linear 4s infinite alternate;
}
.cube:hover .out_front {
  transform: rotateY(0deg) translateZ(200px);
}
@keyframes move1 {
  0% {
    transform: rotateY(0deg) translateZ(100px);
  }
  10% {
    transform: rotateY(0deg) translateZ(190px);
  }
  20% {
    transform: rotateY(0deg) translateZ(150px);
  }
  30% {
    transform: rotateY(0deg) translateZ(100px);
  }
  40% {
    transform: rotateY(0deg) translateZ(160px);
  }
  50% {
    transform: rotateY(0deg) translateZ(140px);
  }
  60% {
    transform: rotateY(0deg) translateZ(120px);
  }
  70% {
    transform: rotateY(0deg) translateZ(150px);
  }
  80% {
    transform: rotateY(0deg) translateZ(180px);
  }
  90% {
    transform: rotateY(0deg) translateZ(120px);
  }
  100% {
    transform: rotateY(0deg) translateZ(200px);
  }
}

.cube .out_back {
  /* transform: translateZ(-100px) rotateY(180deg); */
  animation: move2 linear 4s infinite alternate;
}
.cube:hover .out_back {
  transform: translateZ(-200px) rotateY(180deg);
}
@keyframes move2 {
  0% {
    transform: translateZ(-100px) rotateY(180deg);
  }
  10% {
    transform: translateZ(-190px) rotateY(180deg);
  }
  20% {
    transform: translateZ(-150px) rotateY(180deg);
  }
  30% {
    transform: translateZ(-100px) rotateY(180deg);
  }
  40% {
    transform: translateZ(-160px) rotateY(180deg);
  }
  50% {
    transform: translateZ(-140px) rotateY(180deg);
  }
  60% {
    transform: translateZ(-120px) rotateY(180deg);
  }
  70% {
    transform: translateZ(-150px) rotateY(180deg);
  }
  80% {
    transform: translateZ(-180px) rotateY(180deg);
  }
  90% {
    transform: translateZ(-120px) rotateY(180deg);
  }
  100% {
    transform: translateZ(-200px) rotateY(180deg);
  }
}

.cube .out_left {
  /* transform: rotateY(-90deg) translateZ(100px); */
  animation: move3 linear 4s infinite alternate;
}
.cube:hover .out_left {
  transform: rotateY(-90deg) translateZ(200px);
}
@keyframes move3 {
  0% {
    transform: rotateY(-90deg) translateZ(100px);
  }
  10% {
    transform: rotateY(-90deg) translateZ(190px);
  }
  20% {
    transform: rotateY(-90deg) translateZ(150px);
  }
  30% {
    transform: rotateY(-90deg) translateZ(100px);
  }
  40% {
    transform: rotateY(-90deg) translateZ(160px);
  }
  50% {
    transform: rotateY(-90deg) translateZ(140px);
  }
  60% {
    transform: rotateY(-90deg) translateZ(120px);
  }
  70% {
    transform: rotateY(-90deg) translateZ(150px);
  }
  80% {
    transform: rotateY(-90deg) translateZ(180px);
  }
  90% {
    transform: rotateY(-90deg) translateZ(120px);
  }
  100% {
    transform: rotateY(-90deg) translateZ(200px);
  }
}

.cube .out_right {
  /* transform: rotateY(90deg) translateZ(100px); */
  animation: move4 linear 4s infinite alternate;
}
.cube:hover .out_right {
  transform: rotateY(90deg) translateZ(200px);
}

@keyframes move4 {
  0% {
    transform: rotateY(90deg) translateZ(100px);
  }
  10% {
    transform: rotateY(90deg) translateZ(190px);
  }
  20% {
    transform: rotateY(90deg) translateZ(150px);
  }
  30% {
    transform: rotateY(90deg) translateZ(100px);
  }
  40% {
    transform: rotateY(90deg) translateZ(160px);
  }
  50% {
    transform: rotateY(90deg) translateZ(140px);
  }
  60% {
    transform: rotateY(90deg) translateZ(120px);
  }
  70% {
    transform: rotateY(90deg) translateZ(150px);
  }
  80% {
    transform: rotateY(90deg) translateZ(180px);
  }
  90% {
    transform: rotateY(90deg) translateZ(120px);
  }
  100% {
    transform: rotateY(90deg) translateZ(200px);
  }
}

.cube .out_top {
  /* transform: rotateX(90deg) translateZ(100px); */
  animation: move5 linear 4s infinite alternate;
}
.cube:hover .out_top {
  transform: rotateX(90deg) translateZ(200px);
}

@keyframes move5 {
  0% {
    transform: rotateX(90deg) translateZ(100px);
  }
  10% {
    transform: rotateX(90deg) translateZ(190px);
  }
  20% {
    transform: rotateX(90deg) translateZ(150px);
  }
  30% {
    transform: rotateX(90deg) translateZ(100px);
  }
  40% {
    transform: rotateX(90deg) translateZ(160px);
  }
  50% {
    transform: rotateX(90deg) translateZ(140px);
  }
  60% {
    transform: rotateX(90deg) translateZ(120px);
  }
  70% {
    transform: rotateX(90deg) translateZ(150px);
  }
  80% {
    transform: rotateX(90deg) translateZ(180px);
  }
  90% {
    transform: rotateX(90deg) translateZ(120px);
  }
  100% {
    transform: rotateX(90deg) translateZ(200px);
  }
}

.cube .out_bottom {
  /* transform: rotateX(-90deg) translateZ(100px); */
  animation: move6 linear 4s infinite alternate;
}
.cube:hover .out_bottom {
  transform: rotateX(-90deg) translateZ(200px);
}
@keyframes move6 {
  0% {
    transform: rotateX(-90deg) translateZ(100px);
  }
  10% {
    transform: rotateX(-90deg) translateZ(190px);
  }
  20% {
    transform: rotateX(-90deg) translateZ(150px);
  }
  30% {
    transform: rotateX(-90deg) translateZ(100px);
  }
  40% {
    transform: rotateX(-90deg) translateZ(160px);
  }
  50% {
    transform: rotateX(-90deg) translateZ(140px);
  }
  60% {
    transform: rotateX(-90deg) translateZ(120px);
  }
  70% {
    transform: rotateX(-90deg) translateZ(150px);
  }
  80% {
    transform: rotateX(-90deg) translateZ(180px);
  }
  90% {
    transform: rotateX(-90deg) translateZ(120px);
  }
  100% {
    transform: rotateX(-90deg) translateZ(200px);
  }
}

/*定义小正方体样式*/
.cube span {
  display: block;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50px;
  left: 50px;
}

.cube .in_pic {
  width: 100px;
  height: 100px;
}

.cube .in_front {
  transform: rotateY(0deg) translateZ(50px);
}

.cube .in_back {
  transform: translateZ(-50px) rotateY(180deg);
}

.cube .in_left {
  transform: rotateY(-90deg) translateZ(50px);
}

.cube .in_right {
  transform: rotateY(90deg) translateZ(50px);
}

.cube .in_top {
  transform: rotateX(90deg) translateZ(50px);
}

.cube .in_bottom {
  transform: rotateX(-90deg) translateZ(50px);
}

.outDiv {
  border: 1px solid #fff;
}
.inDiv {
  border: 1px solid #fff;
  border-radius: 50px;
}
</style>
