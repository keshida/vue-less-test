<template>
  <div class="Capture_C pagePosition">
    <button @click="videoPlay">开始</button>
    <button @click="videoOff">结束</button>
    <button @click="grabFrame">grabFrame</button>
    <button @click="takePhoto">takePhoto</button>
    <video src="" controls></video>
    <img :src="imgsrc" alt="">
    <canvas id="grabFrameCanvas"></canvas>
    <canvas id="takePhotoCanvas"></canvas>
  </div>
</template>
<script>
export default {
  /**
   * clipboard功能旨在https上起作用
   */
  data() {
    return {
      imgsrc: '',
      track: null,
      imageCapture: null
    };
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {},
    videoPlay() {
      navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
        console.log(mediaStream)
        document.querySelector('video').srcObject = mediaStream;
        this.track = mediaStream.getVideoTracks()[0];
        this.setTrack(this.track);
      }).catch((error) => {
        console.error(` ${error} is not yet supported`);
        // setError(error);
      });
    },
    setTrack(track) {
      this.imageCapture = new ImageCapture(track);
    },
    grabFrame() {
      this.imageCapture.grabFrame().then((imageBitmap) => {
        const canvas = document.querySelector('#grabFrameCanvas');

        this.drawCanvas(canvas, imageBitmap);
      }).catch((error) => {
        console.log(error);
        // setError(error);
      });
    },
    takePhoto() {
      this.imageCapture.takePhoto().then(blob => createImageBitmap(blob)).then(imageBitmap => {
        const canvas = document.querySelector('#takePhotoCanvas');

        this.drawCanvas(canvas, imageBitmap);
      }).catch(error => {
        console.log(error);
        // setError(error);
      });
    },
      
    drawCanvas(canvas, imageBitmap) {
      let ctx = canvas.getContext('2d');
      const w = canvas.width = imageBitmap.width;
      const h = canvas.height = imageBitmap.height;

      ctx.drawImage(imageBitmap, 0, 0, w, h)
    },
    videoOff() {
      this.track.stop();
    }
  }
};
</script>

<style>
</style>
