<template>
  <div class="tiltingParallax_C" id="tiltingParallax">
    <div class="cards">
      <h3>Movies</h3>
      <h1>Popular</h1>
      <div class="card card__one">
        <div class="card__bg"></div>
        <img class="card__img" src="../../assets/images/tiltParallax/3dr_mono.png" />
        <div class="card__text">
          <p class="card__title">Princess Mononoke</p>
        </div>
      </div>
      <div class="card card__two">
        <div class="card__bg"></div>
        <img class="card__img" src="../../assets/images/tiltParallax/3dr_chihiro.png" />
        <div class="card__text">
          <p class="card__title">Spirited Away</p>
        </div>
      </div>
      <div class="card card__three">
        <div class="card__bg"></div>
        <img class="card__img" src="../../assets/images/tiltParallax/3dr_howlcastle.png" />
        <div class="card__text">
          <p class="card__title">Howl's Moving Castle</p>
        </div>
      </div>
    </div>
    <div style="text-align:center;clear:both;margin:50px;">
    </div>
    
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {},
  mounted () {
    var tiltingParallax = document.getElementById('tiltingParallax');
    var cards = document.querySelector('.cards');
    var images = document.querySelectorAll('.card__img');
    var backgrounds = document.querySelectorAll('.card__bg');
    var range = 40;

    // const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
    var calcValue = function calcValue(a, b) {
      return (a / b * range - range / 2).toFixed(1);
    }; // thanks @alice-mx

    var timeout = null;

    tiltingParallax.addEventListener('mousemove', function (_ref) {
      var x = _ref.x;
      var y = _ref.y;

      if (timeout) {
        window.cancelAnimationFrame(timeout);
      }

      timeout = window.requestAnimationFrame(function () {
        var yValue = calcValue(y, tiltingParallax.offsetHeight);
        var xValue = calcValue(x, tiltingParallax.offsetWidth);
        
        cards.style.transform = 'rotateX(' + yValue + 'deg) rotateY(' + xValue + 'deg)';

        [].forEach.call(images, function (image) {
          image.style.transform = 'translateX(' + -xValue + 'px) translateY(' + yValue + 'px)';
        });

        [].forEach.call(backgrounds, function (background) {
          background.style.backgroundPosition = xValue * 0.45 + 'px ' + -yValue * 0.45 + 'px';
        });
      });
    }, false);
  },
  methods: {}
}
</script>
<style>
.tiltingParallax_C {
  height: 100%;
  width: 100%;
  align-items: center;
  background: #642B73;
  background: linear-gradient(to bottom, #C6426E, #642B73);
  font-family: 'Open Sans', sans;
  justify-content: center;
  -webkit-perspective: 1800px;
          perspective: 1800px;
  text-align: center;
  padding-top: 20%;
  box-sizing: border-box;
}

h1 {
  color: #3e3e42;
  font-size: 32px;
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 30px;
  -webkit-transform: translateZ(35px);
          transform: translateZ(35px);
}

h3 {
  color: #eb285d;
  font-size: 16px;
  margin-bottom: 6px;
  -webkit-transform: translateZ(25px);
          transform: translateZ(25px);
}

.cards {
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 10px 20px 20px rgba(0, 0, 0, 0.17);
  display: inline-block;
  padding: 30px 35px;
  -webkit-perspective: 1800px;
          perspective: 1800px;
  text-align: left;
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-transform: rotateX(11deg) rotateY(16.5deg);
          transform: rotateX(11deg) rotateY(16.5deg);
  min-width: 595px;
}

.card {
  border-radius: 15px;
  box-shadow: 5px 5px 20px -5px rgba(0, 0, 0, 0.6);
  display: inline-block;
  height: 250px;
  overflow: hidden;
  -webkit-perspective: 1200px;
          perspective: 1200px;
  position: relative;
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  -webkit-transform: translateZ(35px);
          transform: translateZ(35px);
  width: 175px;
  text-align: center;
}
.card:not(:last-child) {
  margin-right: 30px;
}

.card__img {
  position: relative;
  height: 100%;
}

.card__bg {
  bottom: -50px;
  left: -50px;
  position: absolute;
  right: -50px;
  top: -50px;
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
  -webkit-transform: translateZ(-50px);
          transform: translateZ(-50px);
  z-index: 0;
}

.card__one .card__img {
  top: 14px;
  right: -10px;
  height: 110%;
}
.card__one .card__bg {
  background: url("../../assets/images/tiltParallax/3dr_monobg.jpg") center/cover no-repeat;
}

.card__two .card__img {
  top: 25px;
}
.card__two .card__bg {
  background: url("../../assets/images/tiltParallax/3dr_spirited.jpg") center/cover no-repeat;
}

.card__three .card__img {
  top: 5px;
  left: -4px;
  height: 110%;
}
.card__three .card__bg {
  background: url("../../assets/images/tiltParallax/3dr_howlbg.jpg") center/cover no-repeat;
}

.card__text {
  align-items: center;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.55) 100%);
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 70px;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 2;
}

.card__title {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  padding: 0 10px;
  margin-bottom: 3px;
}

</style>
