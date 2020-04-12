<template>
  <div class="btnStyle_C pagePosition">
    <div class="wall-of-buttons">
      <p>
        <a class="large green button">正常</a>
        <a class="large blue button">运行</a>
        <a class="large red button">严重</a>
        <br />
        <a class="large orange button">主要</a>
        <a class="large orangellow button">次要</a>
      </p>
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
.btnStyle_C {
  background: #333;
  padding: 50px;
  box-sizing: border-box;
  .button {
    background: #222 url(../../assets/images/cssTest/overlay-button.png) repeat-x 0 0;
    display: inline-block;
    padding: 5px 15px 6px;
    color: #fff !important;
    font-size: 13px;
    font-weight: bold;
    line-height: 1;
    text-decoration: none;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
    text-shadow: 0 -1px 1px rgba(0, 0, 0, 0.25);
    border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    position: relative;
    cursor: pointer;
    overflow: visible;
    width: auto;
  }
  button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  .button:hover {
    background-color: #111;
    color: #fff;
  }
  .button:active {
    transform: translateY(1px);
    -webkit-transform: translateY(1px);
    -moz-transform: translateY(1px);
  }
  /* Small Buttons */
  .small.button {
    font-size: 11px;
  }
  /* Large Buttons */
  .large.button {
    font-size: 14px;
    padding: 8px 19px 9px;
  }
  /* Colors for our beloved buttons */
  .green.button {
    background-color: #91bd09;
  }
  .green.button:hover {
    background-color: #749a02;
  }
  .blue.button {
    background-color: #2daebf;
  }
  .blue.button:hover {
    background-color: #007d9a;
  }
  .red.button {
    background-color: #e33100;
  }
  .red.button:hover {
    background-color: #872300;
  }
  .magenta.button {
    background-color: #a9014b;
  }
  .magenta.button:hover {
    background-color: #630030;
  }
  .orange.button {
    background-color: #ff5c00;
  }
  .orange.button:hover {
    background-color: #d45500;
  }
  .orangellow.button {
    background-color: #ffb515;
  }
  .orangellow.button:hover {
    background-color: #fc9200;
  }
  .white.button {
    background-color: #fff;
    border: 1px solid #ccc;
    color: #666 !important;
    font-weight: normal;
    text-shadow: 0 1px 1px rgba(255, 255, 255, 1);
  }
  .white.button:hover {
    background-color: #eee;
  }

  body {
    background: #333;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  }

  @keyframes bigAssButtonPulse {
    from {
      background-color: #1e6a0f;
      -webkit-box-shadow: 0 0 25px #333;
    }
    50% {
      background-color: #39ba1f;
      -webkit-box-shadow: 0 0 75px #39ba1f;
    }
    to {
      background-color: #1e6a0f;
      -webkit-box-shadow: 0 0 25px #333;
    }
  }

  @keyframes greenPulse {
    from {
      background-color: #1e6a0f;
      -webkit-box-shadow: 0 0 9px #333;
    }
    50% {
      background-color: #39ba1f;
      -webkit-box-shadow: 0 0 27px #39ba1f;
    }
    to {
      background-color: #1e6a0f;
      -webkit-box-shadow: 0 0 9px #333;
    }
  }

  @keyframes bluePulse {
    from {
      background-color: #036075;
      -webkit-box-shadow: 0 0 9px #333;
    }
    50% {
      background-color: #2daebf;
      -webkit-box-shadow: 0 0 27px #2daebf;
    }
    to {
      background-color: #036075;
      -webkit-box-shadow: 0 0 9px #333;
    }
  }

  @keyframes redPulse {
    from {
      background-color: #8c2305;
      -webkit-box-shadow: 0 0 9px #333;
    }
    50% {
      background-color: #e33100;
      -webkit-box-shadow: 0 0 27px #e33100;
    }
    to {
      background-color: #8c2305;
      -webkit-box-shadow: 0 0 9px #333;
    }
  }

  @keyframes magentaPulse {
    from {
      background-color: #470123;
      -webkit-box-shadow: 0 0 9px #333;
    }
    50% {
      background-color: #a9014b;
      -webkit-box-shadow: 0 0 27px #a9014b;
    }
    to {
      background-color: #470123;
      -webkit-box-shadow: 0 0 9px #333;
    }
  }

  @keyframes orangePulse {
    from {
      background-color: #b84c04;
      -webkit-box-shadow: 0 0 9px #333;
    }
    50% {
      background-color: #ff5c00;
      -webkit-box-shadow: 0 0 27px #ff5c00;
    }
    to {
      background-color: #b84c04;
      -webkit-box-shadow: 0 0 9px #333;
    }
  }

  @keyframes orangellowPulse {
    from {
      background-color: #bd5000;
      -webkit-box-shadow: 0 0 9px #333;
    }
    50% {
      background-color: #ffb515;
      -webkit-box-shadow: 0 0 27px #ffb515;
    }
    to {
      background-color: #bd5000;
      -webkit-box-shadow: 0 0 9px #333;
    }
  }

  a.button {
    animation-duration: 2s;
    animation-iteration-count: infinite;
    -webkit-animation-duration: 2s;
    -webkit-animation-iteration-count: infinite;
  }

  .green.button {
    -webkit-animation-name: greenPulse;
    animation-name: greenPulse;
    -webkit-animation-duration: 2s;
    animation-duration: 2s;
  }
  .blue.button {
    animation-name: bluePulse;
    animation-duration: 2s;
    -webkit-animation-name: bluePulse;
    -webkit-animation-duration: 2s;
  }
  .red.button {
    animation-name: redPulse;
    animation-duration: 2s;
    -webkit-animation-name: redPulse;
    -webkit-animation-duration: 2s;
  }
  .magenta.button {
    animation-name: magentaPulse;
    animation-duration: 2s;
    -webkit-animation-name: magentaPulse;
    -webkit-animation-duration: 2s;
  }
  .orange.button {
    animation-name: orangePulse;
    animation-duration: 2s;
    -webkit-animation-name: orangePulse;
    -webkit-animation-duration: 2s;
  }
  .orangellow.button {
    animation-name: orangellowPulse;
    animation-duration: 2s;
    -webkit-animation-name: orangellowPulse;
    -webkit-animation-duration: 2s;
  }

  .wall-of-buttons {
    width: 100%;
    height: 500px;
    text-align: center;
  }
  .wall-of-buttons a.button {
    display: inline-block;
    margin: 0 30px 30px 0;
  }
}
</style>
