<template>
  <div class="solarSystem_C pagePosition">
    <p class="text">任何画面，都无法描绘宇宙的浩瀚</p>
    <!--    公转日期  自身半径      距离太阳  
        mercury 5    4  ->4880    193   ->0.387
        venus   11   12 ->12103   366   ->0.723
        earth   18   12 ->12756   500   ->1
        mars    36   6  ->6794    762   ->1.524
        jupiter 213  142->142984  2602  ->5.205
        saturn  580  120->120536  4788  ->9.576
        uranus  1525 51 ->51118   9590  ->19.18
        neptune 3000 49 ->49532   15155 ->30.31
        pluto   1500 2  ->2274    ->距离太阳最近处约59亿公里，最远处为74亿公里
    -->
    <div class="container">
      <div class="solarSystem">
        <div class="sun ball">
          <div class="line x1"></div>
          <div class="line x2"></div>
          <div class="line x3"></div>
          <div class="line x4"></div>
          <div class="line x5"></div>
          <div class="line x6"></div>
          <div class="line x7"></div>
          <div class="line x8"></div>
          <div class="line x9"></div>
          <div class="line s1"></div>
          <div class="line s2"></div>
          <div class="line s3"></div>
          <div class="line s4"></div>
          <div class="line s5"></div>
          <div class="line s6"></div>
          <div class="line s7"></div>
          <div class="line s8"></div>
          <div class="line s9"></div>
        </div>
        <div class="mercuryTrack">
          <div class="track"></div>
          <div class="mercury ball">
            <div class="line x1"></div>
            <div class="line x2"></div>
            <div class="line x3"></div>
            <div class="line x4"></div>
            <div class="line x5"></div>
            <div class="line x6"></div>
            <div class="line x7"></div>
            <div class="line x8"></div>
            <div class="line x9"></div>
            <div class="line me1"></div>
            <div class="line me2"></div>
            <div class="line me3"></div>
            <div class="line me4"></div>
            <div class="line me5"></div>
            <div class="line me6"></div>
            <div class="line me7"></div>
            <div class="line me8"></div>
            <div class="line me9"></div>
          </div>
        </div>
        <div class="venusTrack">
          <div class="track"></div>
          <div class="venus ball">
            <div class="line x1"></div>
            <div class="line x2"></div>
            <div class="line x3"></div>
            <div class="line x4"></div>
            <div class="line x5"></div>
            <div class="line x6"></div>
            <div class="line x7"></div>
            <div class="line x8"></div>
            <div class="line x9"></div>
            <div class="line ve1"></div>
            <div class="line ve2"></div>
            <div class="line ve3"></div>
            <div class="line ve4"></div>
            <div class="line ve5"></div>
            <div class="line ve6"></div>
            <div class="line ve7"></div>
            <div class="line ve8"></div>
            <div class="line ve9"></div>
          </div>
        </div>

        <div class="earthTrack">
          <div class="track"></div>
          <div class="earth ball">
            <div class="line x1"></div>
            <div class="line x2"></div>
            <div class="line x3"></div>
            <div class="line x4"></div>
            <div class="line x5"></div>
            <div class="line x6"></div>
            <div class="line x7"></div>
            <div class="line x8"></div>
            <div class="line x9"></div>
            <div class="line e1"></div>
            <div class="line e2"></div>
            <div class="line e3"></div>
            <div class="line e4"></div>
            <div class="line e5"></div>
            <div class="line e6"></div>
            <div class="line e7"></div>
            <div class="line e8"></div>
            <div class="line e9"></div>
            <div class="moonTrack">
              <div class="track"></div>
              <div class="moon ball">
                <div class="line x1"></div>
                <div class="line x2"></div>
                <div class="line x3"></div>
                <div class="line x4"></div>
                <div class="line x5"></div>
                <div class="line x6"></div>
                <div class="line x7"></div>
                <div class="line x8"></div>
                <div class="line x9"></div>
                <div class="line m1"></div>
                <div class="line m2"></div>
                <div class="line m3"></div>
                <div class="line m4"></div>
                <div class="line m5"></div>
                <div class="line m6"></div>
                <div class="line m7"></div>
                <div class="line m8"></div>
                <div class="line m9"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="marsTrack">
          <div class="track"></div>
          <div class="mars ball">
            <div class="line x1"></div>
            <div class="line x2"></div>
            <div class="line x3"></div>
            <div class="line x4"></div>
            <div class="line x5"></div>
            <div class="line x6"></div>
            <div class="line x7"></div>
            <div class="line x8"></div>
            <div class="line x9"></div>
            <div class="line ma1"></div>
            <div class="line ma2"></div>
            <div class="line ma3"></div>
            <div class="line ma4"></div>
            <div class="line ma5"></div>
            <div class="line ma6"></div>
            <div class="line ma7"></div>
            <div class="line ma8"></div>
            <div class="line ma9"></div>
          </div>
        </div>
        <div class="jupiterTrack">
          <div class="track"></div>
          <div class="jupiter ball">
            <div class="line x1"></div>
            <div class="line x2"></div>
            <div class="line x3"></div>
            <div class="line x4"></div>
            <div class="line x5"></div>
            <div class="line x6"></div>
            <div class="line x7"></div>
            <div class="line x8"></div>
            <div class="line x9"></div>
            <div class="line ju1"></div>
            <div class="line ju2"></div>
            <div class="line ju3"></div>
            <div class="line ju4"></div>
            <div class="line ju5"></div>
            <div class="line ju6"></div>
            <div class="line ju7"></div>
            <div class="line ju8"></div>
            <div class="line ju9"></div>
          </div>
        </div>
        <div class="saturnTrack">
          <div class="track"></div>
          <div class="saturn ball">
            <div class="line x1"></div>
            <div class="line x2"></div>
            <div class="line x3"></div>
            <div class="line x4"></div>
            <div class="line x5"></div>
            <div class="line x6"></div>
            <div class="line x7"></div>
            <div class="line x8"></div>
            <div class="line x9"></div>
            <div class="line sa1"></div>
            <div class="line sa2"></div>
            <div class="line sa3"></div>
            <div class="line sa4"></div>
            <div class="line sa5"></div>
            <div class="line sa6"></div>
            <div class="line sa7"></div>
            <div class="line sa8"></div>
            <div class="line sa9"></div>
          </div>
        </div>
        <div class="uranusTrack">
          <div class="track"></div>
          <div class="uranus ball">
            <div class="line x1"></div>
            <div class="line x2"></div>
            <div class="line x3"></div>
            <div class="line x4"></div>
            <div class="line x5"></div>
            <div class="line x6"></div>
            <div class="line x7"></div>
            <div class="line x8"></div>
            <div class="line x9"></div>
            <div class="line ur1"></div>
            <div class="line ur2"></div>
            <div class="line ur3"></div>
            <div class="line ur4"></div>
            <div class="line ur5"></div>
            <div class="line ur6"></div>
            <div class="line ur7"></div>
            <div class="line ur8"></div>
            <div class="line ur9"></div>
          </div>
        </div>
        <div class="neptuneTrack">
          <div class="track"></div>
          <div class="neptune ball">
            <div class="line x1"></div>
            <div class="line x2"></div>
            <div class="line x3"></div>
            <div class="line x4"></div>
            <div class="line x5"></div>
            <div class="line x6"></div>
            <div class="line x7"></div>
            <div class="line x8"></div>
            <div class="line x9"></div>
            <div class="line ne1"></div>
            <div class="line ne2"></div>
            <div class="line ne3"></div>
            <div class="line ne4"></div>
            <div class="line ne5"></div>
            <div class="line ne6"></div>
            <div class="line ne7"></div>
            <div class="line ne8"></div>
            <div class="line ne9"></div>
          </div>
        </div>
        <div class="plutoTrack">
          <div class="track"></div>
          <div class="pluto ball">
            <div class="line x1"></div>
            <div class="line x2"></div>
            <div class="line x3"></div>
            <div class="line x4"></div>
            <div class="line x5"></div>
            <div class="line x6"></div>
            <div class="line x7"></div>
            <div class="line x8"></div>
            <div class="line x9"></div>
            <div class="line pl1"></div>
            <div class="line pl2"></div>
            <div class="line pl3"></div>
            <div class="line pl4"></div>
            <div class="line pl5"></div>
            <div class="line pl6"></div>
            <div class="line pl7"></div>
            <div class="line pl8"></div>
            <div class="line pl9"></div>
          </div>
        </div>
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
.solarSystem_C {
  text-align: center;
  background: url(../../assets/images/cssTest/stock-photo-268506241.jpg);
  .text {
    font-size: 30px;
    position: absolute;
    top: 30px;
    left: 30px;
    color: #25ba9a;
  }
  .solarSystem {
    width: 800px;
    height: 900px;
    margin: 50px auto;
    position: relative;
    transform-style: preserve-3d;
    /* transform:rotateX(-30deg) rotateY(-30deg); */
    animation: rotation 1000s infinite linear;
  }
  .sun {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50px 0 0 -50px;
    animation: rotationTest 20s infinite linear;
  }
  .sun .line {
    border: 1px solid #fef380;
  }
  .sun .s1 {
    transform: rotateX(90deg) translateZ(40px) scale(0.6);
  }
  .sun .s2 {
    transform: rotateX(90deg) translateZ(30px) scale(0.8);
  }
  .sun .s3 {
    transform: rotateX(90deg) translateZ(20px) scale(0.916);
  }
  .sun .s4 {
    transform: rotateX(90deg) translateZ(10px) scale(0.98);
  }
  .sun .s5 {
    transform: rotateX(90deg) translateZ(0);
  }
  .sun .s6 {
    transform: rotateX(90deg) translateZ(-10px) scale(0.98);
  }
  .sun .s7 {
    transform: rotateX(90deg) translateZ(-20px) scale(0.916);
  }
  .sun .s8 {
    transform: rotateX(90deg) translateZ(-30px) scale(0.8);
  }
  .sun .s9 {
    transform: rotateX(90deg) translateZ(-40px) scale(0.6);
  }

  .earthTrack {
    width: 600px;
    height: 600px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -300px 0 0 -300px;
    transform-style: preserve-3d;
    animation: rotationTest 18s infinite linear;
  }
  .earthTrack > .track {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50% 0 0 -50%;
    transform-style: preserve-3d;
    transform: rotateX(90deg);
  }
  .earth {
    width: 12px;
    height: 12px;
    position: absolute;
    top: 50%;
    left: 0;
    margin: -6px 0 0 -6px;
    animation: rotationTest 1s infinite linear;
  }
  .earth .line {
    border: 1px solid #4c9fbd;
  }

  .earth .e1 {
    transform: rotateX(90deg) translateZ(4.8px) scale(0.6);
  }
  .earth .e2 {
    transform: rotateX(90deg) translateZ(3.6px) scale(0.8);
  }
  .earth .e3 {
    transform: rotateX(90deg) translateZ(2.4px) scale(0.916);
  }
  .earth .e4 {
    transform: rotateX(90deg) translateZ(1.5px) scale(0.98);
  }
  .earth .e5 {
    transform: rotateX(90deg) translateZ(0);
  }
  .earth .e6 {
    transform: rotateX(90deg) translateZ(-1.5px) scale(0.98);
  }
  .earth .e7 {
    transform: rotateX(90deg) translateZ(-2.4px) scale(0.916);
  }
  .earth .e8 {
    transform: rotateX(90deg) translateZ(-3.6px) scale(0.8);
  }
  .earth .e9 {
    transform: rotateX(90deg) translateZ(-4.8px) scale(0.6);
  }

  .moonTrack > .track {
    width: 40px;
    height: 40px;
    border: 1px solid #ffffff;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -20px 0 0 -20px;
    transform: rotateX(90deg);
    transform-style: preserve-3d;
  }
  .moon {
    width: 4px;
    height: 4px;
    position: absolute;
    top: 50%;
    left: -10px;
    margin: -1px 0 0 -1px;
    transform-style: preserve-3d;
    animation: rotationTest 10s infinite linear;
  }
  .moon .line {
    border-color: gray;
  }

  .moon .m1 {
    transform: rotateX(90deg) translateZ(1.6px) scale(0.6);
  }
  .moon .m2 {
    transform: rotateX(90deg) translateZ(1.2px) scale(0.8);
  }
  .moon .m3 {
    transform: rotateX(90deg) translateZ(0.8px) scale(0.916);
  }
  .moon .m4 {
    transform: rotateX(90deg) translateZ(1px) scale(0.98);
  }
  .moon .m5 {
    transform: rotateX(90deg) translateZ(0);
  }
  .moon .m6 {
    transform: rotateX(90deg) translateZ(-1px) scale(0.98);
  }
  .moon .m7 {
    transform: rotateX(90deg) translateZ(-0.8px) scale(0.916);
  }
  .moon .m8 {
    transform: rotateX(90deg) translateZ(-1.2px) scale(0.8);
  }
  .moon .m9 {
    transform: rotateX(90deg) translateZ(-1.6px) scale(0.6);
  }

  .mercuryTrack {
    width: 200px;
    height: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -100px 0 0 -100px;
    transform-style: preserve-3d;
    animation: rotationTest 5s infinite linear;
  }
  .mercuryTrack > .track {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50% 0 0 -50%;
    transform-style: preserve-3d;
    transform: rotateX(90deg);
  }
  .mercury {
    width: 4px;
    height: 4px;
    position: absolute;
    top: 50%;
    left: 0;
    margin: -2px 0 0 -2px;
    animation: rotationTest 10s infinite linear;
  }
  .mercury .line {
    border: 1px solid #cca27c;
  }
  .mercury .me1 {
    transform: rotateX(90deg) translateZ(1.6px) scale(0.6);
  }
  .mercury .me2 {
    transform: rotateX(90deg) translateZ(1.2px) scale(0.8);
  }
  .mercury .me3 {
    transform: rotateX(90deg) translateZ(0.8px) scale(0.916);
  }
  .mercury .me4 {
    transform: rotateX(90deg) translateZ(1px) scale(0.98);
  }
  .mercury .me5 {
    transform: rotateX(90deg) translateZ(0);
  }
  .mercury .me6 {
    transform: rotateX(90deg) translateZ(-1px) scale(0.98);
  }
  .mercury .me7 {
    transform: rotateX(90deg) translateZ(-0.8px) scale(0.916);
  }
  .mercury .me8 {
    transform: rotateX(90deg) translateZ(-1.2px) scale(0.8);
  }
  .mercury .me9 {
    transform: rotateX(90deg) translateZ(-1.6px) scale(0.6);
  }

  .venusTrack {
    width: 400px;
    height: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -200px 0 0 -200px;
    transform-style: preserve-3d;
    animation: rotationTest 11s infinite linear;
  }
  .venusTrack > .track {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50% 0 0 -50%;
    transform-style: preserve-3d;
    transform: rotateX(90deg);
  }
  .venus {
    width: 12px;
    height: 12px;
    position: absolute;
    top: 50%;
    left: 0;
    margin: -6px 0 0 -6px;
    animation: rotationTest 10s infinite linear;
  }
  .venus .line {
    border: 1px solid #ccb394;
  }
  .venus .ve1 {
    transform: rotateX(90deg) translateZ(4.8px) scale(0.6);
  }
  .venus .ve2 {
    transform: rotateX(90deg) translateZ(3.6px) scale(0.8);
  }
  .venus .ve3 {
    transform: rotateX(90deg) translateZ(2.4px) scale(0.916);
  }
  .venus .ve4 {
    transform: rotateX(90deg) translateZ(1.5px) scale(0.98);
  }
  .venus .ve5 {
    transform: rotateX(90deg) translateZ(0);
  }
  .venus .ve6 {
    transform: rotateX(90deg) translateZ(-1.5px) scale(0.98);
  }
  .venus .ve7 {
    transform: rotateX(90deg) translateZ(-2.4px) scale(0.916);
  }
  .venus .ve8 {
    transform: rotateX(90deg) translateZ(-3.6px) scale(0.8);
  }
  .venus .ve9 {
    transform: rotateX(90deg) translateZ(-4.8px) scale(0.6);
  }

  .marsTrack {
    width: 800px;
    height: 800px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -400px 0 0 -400px;
    transform-style: preserve-3d;
    animation: rotationTest 36s infinite linear;
  }
  .marsTrack > .track {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50% 0 0 -50%;
    transform-style: preserve-3d;
    transform: rotateX(90deg);
  }
  .mars {
    width: 6px;
    height: 6px;
    position: absolute;
    top: 50%;
    left: 0;
    margin: -3px 0 0 -3px;
    animation: rotationTest 10s infinite linear;
  }
  .mars .line {
    border: 1px solid #dc895d;
  }
  .mars .ma1 {
    transform: rotateX(90deg) translateZ(2.4px) scale(0.6);
  }
  .mars .ma2 {
    transform: rotateX(90deg) translateZ(1.8px) scale(0.8);
  }
  .mars .ma3 {
    transform: rotateX(90deg) translateZ(1.2px) scale(0.916);
  }
  .mars .ma4 {
    transform: rotateX(90deg) translateZ(0.75px) scale(0.98);
  }
  .mars .ma5 {
    transform: rotateX(90deg) translateZ(0);
  }
  .mars .ma6 {
    transform: rotateX(90deg) translateZ(-0.75px) scale(0.98);
  }
  .mars .ma7 {
    transform: rotateX(90deg) translateZ(-1.2px) scale(0.916);
  }
  .mars .ma8 {
    transform: rotateX(90deg) translateZ(-1.8px) scale(0.8);
  }
  .mars .ma9 {
    transform: rotateX(90deg) translateZ(-2.4px) scale(0.6);
  }

  .jupiterTrack {
    width: 1000px;
    height: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -500px 0 0 -500px;
    transform-style: preserve-3d;
    animation: rotationTest 213s infinite linear;
  }
  .jupiterTrack > .track {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50% 0 0 -50%;
    transform-style: preserve-3d;
    transform: rotateX(90deg);
  }
  .jupiter {
    width: 70px;
    height: 70px;
    position: absolute;
    top: 50%;
    left: 0;
    margin: -35px 0 0 -35px;
    animation: rotationTest 10s infinite linear;
  }
  .jupiter .line {
    border: 1px solid #c9dbdb;
  }
  .jupiter .ju1 {
    transform: rotateX(90deg) translateZ(28px) scale(0.6);
  }
  .jupiter .ju2 {
    transform: rotateX(90deg) translateZ(21px) scale(0.8);
  }
  .jupiter .ju3 {
    transform: rotateX(90deg) translateZ(14px) scale(0.916);
  }
  .jupiter .ju4 {
    transform: rotateX(90deg) translateZ(8px) scale(0.98);
  }
  .jupiter .ju5 {
    transform: rotateX(90deg) translateZ(0);
  }
  .jupiter .ju6 {
    transform: rotateX(90deg) translateZ(-8px) scale(0.98);
  }
  .jupiter .ju7 {
    transform: rotateX(90deg) translateZ(-14px) scale(0.916);
  }
  .jupiter .ju8 {
    transform: rotateX(90deg) translateZ(-21px) scale(0.8);
  }
  .jupiter .ju9 {
    transform: rotateX(90deg) translateZ(-28px) scale(0.6);
  }

  .saturnTrack {
    width: 1200px;
    height: 1200px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -600px 0 0 -600px;
    transform-style: preserve-3d;
    animation: rotationTest 580s infinite linear;
  }
  .saturnTrack > .track {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50% 0 0 -50%;
    transform-style: preserve-3d;
    transform: rotateX(90deg);
  }
  .saturn {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 50%;
    left: 0;
    margin: -30px 0 0 -30px;
    animation: rotationTest 10s infinite linear;
  }
  .saturn .line {
    border: 1px solid #dec4ad;
  }
  saturn .saturn .sa1 {
    transform: rotateX(90deg) translateZ(24px) scale(0.6);
  }
  .saturn .sa2 {
    transform: rotateX(90deg) translateZ(18px) scale(0.8);
  }
  .saturn .sa3 {
    transform: rotateX(90deg) translateZ(12px) scale(0.916);
  }
  .saturn .sa4 {
    transform: rotateX(90deg) translateZ(7.5px) scale(0.98);
  }
  .saturn .sa5 {
    transform: rotateX(90deg) translateZ(0);
  }
  .saturn .sa6 {
    transform: rotateX(90deg) translateZ(-7.5px) scale(0.98);
  }
  .saturn .sa7 {
    transform: rotateX(90deg) translateZ(-12px) scale(0.916);
  }
  .saturn .sa8 {
    transform: rotateX(90deg) translateZ(-18px) scale(0.8);
  }
  .saturn .sa9 {
    transform: rotateX(90deg) translateZ(-24px) scale(0.6);
  }

  .uranusTrack {
    width: 1400px;
    height: 1400px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -700px 0 0 -700px;
    transform-style: preserve-3d;
    animation: rotationTest 1525.5s infinite linear;
  }
  .uranusTrack > .track {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50% 0 0 -50%;
    transform-style: preserve-3d;
    transform: rotateX(90deg);
  }
  .uranus {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 0;
    margin: -25px 0 0 -25px;
    animation: rotationTest 10s infinite linear;
  }
  .uranus .line {
    border: 1px solid #6ad2f5;
  }
  .uranus .ur1 {
    transform: rotateX(90deg) translateZ(20px) scale(0.6);
  }
  .uranus .ur2 {
    transform: rotateX(90deg) translateZ(15px) scale(0.8);
  }
  .uranus .ur3 {
    transform: rotateX(90deg) translateZ(10px) scale(0.916);
  }
  .uranus .ur4 {
    transform: rotateX(90deg) translateZ(6px) scale(0.98);
  }
  .uranus .ur5 {
    transform: rotateX(90deg) translateZ(0);
  }
  .uranus .ur6 {
    transform: rotateX(90deg) translateZ(-6px) scale(0.98);
  }
  .uranus .ur7 {
    transform: rotateX(90deg) translateZ(-10px) scale(0.916);
  }
  .uranus .ur8 {
    transform: rotateX(90deg) translateZ(-15px) scale(0.8);
  }
  .uranus .ur9 {
    transform: rotateX(90deg) translateZ(-20px) scale(0.6);
  }

  .neptuneTrack {
    width: 1600px;
    height: 1600px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -800px 0 0 -800px;
    transform-style: preserve-3d;
    animation: rotationTest 3000.5s infinite linear;
  }
  .neptuneTrack > .track {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50% 0 0 -50%;
    transform-style: preserve-3d;
    transform: rotateX(90deg);
  }
  .neptune {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 0;
    margin: -25px 0 0 -25px;
    animation: rotationTest 10s infinite linear;
  }
  .neptune .line {
    border: 1px solid #6ebefd;
  }
  .neptune .ne1 {
    transform: rotateX(90deg) translateZ(20px) scale(0.6);
  }
  .neptune .ne2 {
    transform: rotateX(90deg) translateZ(15px) scale(0.8);
  }
  .neptune .ne3 {
    transform: rotateX(90deg) translateZ(10px) scale(0.916);
  }
  .neptune .ne4 {
    transform: rotateX(90deg) translateZ(6px) scale(0.98);
  }
  .neptune .ne5 {
    transform: rotateX(90deg) translateZ(0);
  }
  .neptune .ne6 {
    transform: rotateX(90deg) translateZ(-6px) scale(0.98);
  }
  .neptune .ne7 {
    transform: rotateX(90deg) translateZ(-10px) scale(0.916);
  }
  .neptune .ne8 {
    transform: rotateX(90deg) translateZ(-15px) scale(0.8);
  }
  .neptune .ne9 {
    transform: rotateX(90deg) translateZ(-20px) scale(0.6);
  }

  .plutoTrack {
    width: 1800px;
    height: 1800px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -900px 0 0 -900px;
    transform-style: preserve-3d;
    animation: rotationTest 1500.5s infinite linear;
  }
  .plutoTrack > .track {
    width: 100%;
    height: 20%;
    border-radius: 50%;
    border: 1px solid #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -10% 0 0 -50%;
    transform-style: preserve-3d;
    transform: rotateX(90deg);
  }
  .pluto {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 0;
    margin: -10px 0 0 -10px;
    animation: rotationTest 10s infinite linear;
  }
  .pluto .line {
    border: 1px solid #afced0;
  }
  pluto .pluto .pl1 {
    transform: rotateX(90deg) translateZ(8px) scale(0.6);
  }
  .pluto .pl2 {
    transform: rotateX(90deg) translateZ(6px) scale(0.8);
  }
  .pluto .pl3 {
    transform: rotateX(90deg) translateZ(4px) scale(0.916);
  }
  .pluto .pl4 {
    transform: rotateX(90deg) translateZ(2.5px) scale(0.98);
  }
  .pluto .pl5 {
    transform: rotateX(90deg) translateZ(0);
  }
  .pluto .pl6 {
    transform: rotateX(90deg) translateZ(-2.5px) scale(0.98);
  }
  .pluto .pl7 {
    transform: rotateX(90deg) translateZ(-4px) scale(0.916);
  }
  .pluto .pl8 {
    transform: rotateX(90deg) translateZ(-6px) scale(0.8);
  }
  .pluto .pl9 {
    transform: rotateX(90deg) translateZ(-8px) scale(0.6);
  }

  .ball {
    transform-style: preserve-3d;
  }
  .ball .line {
    width: 100%;
    height: 100%;
    border-radius: 50%;
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

  @keyframes rotation {
    0% {
      transform: rotate(0deg) rotateX(0deg) rotateY(0deg);
    }
    100% {
      transform: rotate(360deg) rotateX(360deg) rotateY(360deg);
    }
  }
  @keyframes rotationTest {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
}
</style>