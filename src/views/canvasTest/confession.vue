<template>
  <div class="confession_C pagePosition">
    <canvas id="canvas" width="1000" height="800"></canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {
      BLUR: false,
      PULSATION: true,
      PULSATION_PERIOD: 600,
      PARTICLE_RADIUS: 4,

      /* disable blur before using blink */

      BLINK: false,

      GLOBAL_PULSATION: false,

      QUALITY: 2 /* 0 - 5 */,

      /* set false if you prefer rectangles */
      ARC: true,

      /* trembling + blur: fun */
      TREMBLING: 0 /* 0 - infinity */,

      FANCY_FONT: 'Arial',

      BACKGROUND: '#000',

      BLENDING: true,

      /* if empty the text will be a random number */
      TEXT: '',
      num: 0,
      TEXTArray: ['11', '22', '33', '44', '55'],

      QUALITY_TO_FONT_SIZE: [10, 12, 40, 50, 100, 350],
      QUALITY_TO_SCALE: [20, 6, 4, 2, 0.9, 0.5],
      QUALITY_TO_TEXT_POS: [10, 20, 60, 100, 370, 280],
      ctx: null,
      tctx: null,
      canvasObj: {},
      particles: [],
      positions: [],
      areaLength: 0
    };
  },
  created() {},
  mounted() {
    this.init()
  },
  methods: {
    init() {
      document.body.style.backgroundColor = this.BACKGROUND;

      let canvas = document.getElementById('canvas');

      this.ctx = canvas.getContext('2d');

      let W = canvas.width;
      let H = canvas.height;

      this.canvasObj.W = W;
      this.canvasObj.H = H;

      let tcanvas = document.createElement('canvas');

      this.tctx = tcanvas.getContext('2d');

      tcanvas.width = W;
      tcanvas.height = H;

      const totalArea = W * H;
      const totalParticles = 928;

      const singleParticleArea = totalArea / totalParticles;

      this.areaLength = Math.sqrt(singleParticleArea);

      for (let i = 1; i <= totalParticles; i++) {
        this.particles.push(this.particle(i));
      }
      this.newPositions();
      setInterval(this.draw, 30);
      setInterval(this.newPositions, 2000);
    },
    newPositions () {
      this.TEXT = this.TEXTArray[this.num];

      if (this.num < this.TEXTArray.length - 1) {
        this.num++;
      } else {
        this.num = 0;
      }

      this.tctx.fillStyle = 'white';
      this.tctx.fillRect(0, 0, this.canvasObj.W, this.canvasObj.H);
      //this.tctx.fill();

      this.tctx.font = `bold ${this.QUALITY_TO_FONT_SIZE[this.QUALITY]}px ${this.FANCY_FONT}`;

      //this.tctx.textAlign='center';//文本水平对齐方式
      //this.tctx.textBaseline='middle';

      //this.tctx.strokeStyle = "black";
      this.tctx.fillStyle = '#f00';
      //this.tctx.strokeText(TEXT,30, 50);
      this.tctx.fillText(this.TEXT, 20, 60);

      let imageData = this.tctx.getImageData(0, 0, this.canvasObj.W, this.canvasObj.H);

      let pixels = imageData.data;

      for (let i = 0; i < pixels.length; i = i + 2) {
        if (pixels[i] !== 255) {
          let position = {
            x: (((i / 2) % this.canvasObj.W | 0) * this.QUALITY_TO_SCALE[this.QUALITY]) | 0,
            y: (((i / 2 / this.canvasObj.W) | 0) * this.QUALITY_TO_SCALE[this.QUALITY]) | 0
          };

          this.positions.push(position);
        }
      }
      this.get_destinations();
    },
    draw() {
      var now = Date.now();

      this.ctx.globalCompositeOperation = 'source-over';

      if (this.BLUR) {
        this.ctx.globalAlpha = 0.1;
      } else if (!this.BLUR && !this.BLINK) {
        this.ctx.globalAlpha = 1.0;
      }

      this.ctx.fillStyle = this.BACKGROUND;
      this.ctx.fillRect(0, 0, this.canvasObj.W, this.canvasObj.H);

      if (this.BLENDING) {
        this.ctx.globalCompositeOperation = 'lighter';
      }

      for (let i = 0; i < this.particles.length; i++) {
        let p = this.particles[i];

        /* in lower qualities there is not enough full pixels for all of  them - dirty hack*/

        if (isNaN(p.x)){
          continue;
        }
        let mod = 0;

        this.ctx.beginPath();
        this.ctx.fillStyle = 'rgb(' + p.r + ', ' + p.g + ', ' + p.b + ')';
        this.ctx.fillStyle =
          'rgba(' + p.r + ', ' + p.g + ', ' + p.b + ', ' + p.alpha + ')';

        if (this.BLINK) {
          this.ctx.globalAlpha = Math.sin(Math.PI * mod * 1.0);
        }

        if (this.PULSATION) {
          /* this would be 0 -> 1 */
          mod =
            (((this.GLOBAL_PULSATION ? 0 : p.deltaOffset) + now) %
              this.PULSATION_PERIOD) /
            this.PULSATION_PERIOD;

          /* lets make the value bouncing with sinus */
          mod = Math.sin(mod * Math.PI);
        } else {
          mod = 1;
        }

        let offset = this.TREMBLING ? this.TREMBLING * (-1 + Math.random() * 2) : 0;

        let radius = this.PARTICLE_RADIUS * p.radius;

        if (!this.ARC) {
          this.ctx.fillRect(
            (offset + p.x - (mod * radius) / 2) | 0,
            (offset + p.y - (mod * radius) / 2) | 0,
            radius * mod,
            radius * mod
          );
        } else {
          this.ctx.arc(
            (offset + p.x) | 0,
            (offset + p.y) | 0,
            radius * mod,
            Math.PI * 2,
            false
          );
          this.ctx.fill();
        }

        p.x += (p.dx - p.x) / 10;
        p.y += (p.dy - p.y) / 10;
      }
    },
    get_destinations() {
      for (let i = 0; i < this.particles.length; i++) {
        let pa = this.particles[i];

        this.particles[i].alpha = 1;
        let distance = [];
        let nearestPosition = 0;

        if (this.positions.length) {
          for (let n = 0; n < this.positions.length; n++) {
            let po = this.positions[n];

            distance[n] = Math.sqrt(
              (pa.x - po.x) * (pa.x - po.x) + (pa.y - po.y) * (pa.y - po.y)
            );
            if (n > 0) {
              if (distance[n] <= distance[nearestPosition]) {
                nearestPosition = n;
              }
            }
          }
          this.particles[i].dx = this.positions[nearestPosition].x;
          this.particles[i].dy = this.positions[nearestPosition].y;
          this.particles[i].distance = distance[nearestPosition];

          let po1 = this.positions[nearestPosition];

          for (let n = 0; n < this.positions.length; n++) {
            let po2 = this.positions[n];

            distance = Math.sqrt(
              (po1.x - po2.x) * (po1.x - po2.x) +
                (po1.y - po2.y) * (po1.y - po2.y)
            );
            if (distance <= 5) {
              this.positions.splice(n, 1);
            }
          }
        } else {
          //particles[i].alpha = 0;
        }
      }
    },
    particle(i) {
      return {
        r: Math.round((Math.random() * 255) | 0),
        g: Math.round((Math.random() * 255) | 0),
        b: Math.round((Math.random() * 255) | 0),
        alpha: 1,
        x: (i * this.areaLength) % this.canvasObj.W,
        y: ((i * this.areaLength) / this.canvasObj.W) * this.areaLength,
        deltaOffset: (Math.random() * this.PULSATION_PERIOD) | 0,
        radius: 0.1 + Math.random() * 2
      }
    }
  }
};
</script>
<style type="text/less" lang="less" rel="stylesheet/less">
.confession_C {
  background: #000;
  text-align: center;
  .solarSystem {
    padding-top: 200px;
    width: 800px;
  }
  canvas {
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
</style>
