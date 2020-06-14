<template>
  <div class="loadingCylinder_C pagePosition">
    <div id="robot">
      <div class="piston">
        <div class="rotator"></div>
        <div class="block">
          R
          <div class="arm"></div>
        </div>
      </div>
      <div class="piston">
        <div class="rotator"></div>
        <div class="block">
          O
          <div class="arm"></div>
        </div>
      </div>
      <div class="piston">
        <div class="rotator"></div>
        <div class="block">
          B
          <div class="arm"></div>
        </div>
      </div>
      <div class="piston">
        <div class="rotator"></div>
        <div class="block">
          O
          <div class="arm"></div>
        </div>
      </div>
      <div class="piston">
        <div class="rotator"></div>
        <div class="block">
          T
          <div class="arm"></div>
        </div>
      </div>
    </div>
    <section class="loading1">
      <div class="effect effect1">
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
      </div>
      <div class="effect effect2">
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
      </div>
      <div class="effect effect3">
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
      </div>
      <div class="effect effect4">
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
        <div class="item"><div class="ball"></div></div>
      </div>
    </section>
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
<style scoped>
.loadingCylinder_C {
  position: relative;
}
@-webkit-keyframes piston {
  0% {
    margin-top: 0;
  }
  50% {
    margin-top: 80px;
  }
  100% {
    margin-top: 0;
  }
}
@keyframes piston {
  0% {
    margin-top: 0;
  }
  50% {
    margin-top: 80px;
  }
  100% {
    margin-top: 0;
  }
}
@-webkit-keyframes arm {
  0% {
    -webkit-transform: rotate(0);
  }
  25% {
    -webkit-transform: rotate(-18deg);
  }
  50% {
    -webkit-transform: rotate(0);
  }
  75% {
    -webkit-transform: rotate(18deg);
  }
  100% {
    -webkit-transform: rotate(0);
  }
}
@keyframes arm {
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(-18deg);
  }
  50% {
    transform: rotate(0);
  }
  75% {
    transform: rotate(18deg);
  }
  100% {
    transform: rotate(0);
  }
}

#robot {
  position: absolute;
  top: 30px;
  left: 30px;
  width: 540px;
  height: 250px;
  font-family: "Oswald", sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: #444;
  text-shadow: 0px -1px 1px rgba(0, 0, 0, 0.7),
    0px 1px 1px rgba(255, 255, 255, 0.4);
}

.piston {
  float: left;
  margin-right: 10px;
  position: relative;
  width: 100px;
  height: 250px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 10px 10px 50px 50px;
  box-shadow: 0 -4px 0 rgba(0, 0, 0, 0.2), 0 4px 0 rgba(255, 255, 255, 0.2);
}
.piston:last-child {
  margin: 0;
}

.piston .block {
  position: relative;
  width: 100px;
  height: 60px;
  line-height: 60px;
  background: #555;
  border-radius: 10px;
  -webkit-animation: piston 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  animation: piston 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  box-shadow: inset 0 -4px 0 rgba(0, 0, 0, 0.2),
    inset 0 4px 0 rgba(255, 255, 255, 0.2);
}
.piston:nth-child(1) .block {
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.piston:nth-child(2) .block {
  -webkit-animation-delay: 0.1s;
  animation-delay: 0.1s;
}
.piston:nth-child(3) .block {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.piston:nth-child(4) .block {
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
}
.piston:nth-child(5) .block {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

.piston .arm {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -10px 0 0 -10px;
  width: 20px;
  height: 150px;
  background: #555;
  border-radius: 10px;
  box-shadow: inset 0 -22px 0 rgba(0, 0, 0, 0.2);
  z-index: -1;
  -webkit-transform-origin: center 10px;
  -webkit-animation: arm 1.2s linear infinite;
  -webkit-animation-delay: inherit;
  transform-origin: center 10px;
  animation: arm 1.2s linear infinite;
  animation-delay: inherit;
}
.piston .arm:before,
.piston .arm:after {
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  height: 16px;
  background: #eee;
  border-radius: 50%;
  margin: 2px;
}
.piston .arm:before {
  top: 0;
}
.piston .arm:after {
  bottom: 0;
}

.piston .rotator {
  position: absolute;
  bottom: 0;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  border-radius: 50%;
  border: 20px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  z-index: -1;
}

@keyframes move {
  from { transform: translate(0,50%); }
  to { transform: translate(0,850%); }
}

.loading1 {
  position: absolute;
  top: 300px;
  width: 100%;
  height: 500px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  align-content: flex-start;
  background: #2a2a2a;
}

.effect {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  position: relative;
  background: #1c1c1c;
}
.effect .item {
  width: 10%;
  height: 100%;
  position: absolute;
  left: 45%;
}

.effect .ball {
  height: 10%;
  border-radius: 50%;
  background: dodgerblue;
  animation: move 1s ease-in-out infinite alternate;
}

.effect .item:nth-child(2) { transform: rotate(22.5deg);  }
.effect .item:nth-child(3) { transform: rotate(45deg);    }
.effect .item:nth-child(4) { transform: rotate(67.5deg);  }
.effect .item:nth-child(5) { transform: rotate(90deg);    }
.effect .item:nth-child(6) { transform: rotate(112.5deg); }
.effect .item:nth-child(7) { transform: rotate(135deg);   }
.effect .item:nth-child(8) { transform: rotate(157.5deg); }

.effect1 .item:nth-child(1) .ball { animation-delay: -0.1875s; }
.effect1 .item:nth-child(2) .ball { animation-delay: -0.175s;  }
.effect1 .item:nth-child(3) .ball { animation-delay: -0.1625s; }
.effect1 .item:nth-child(4) .ball { animation-delay: -0.15s;   }
.effect1 .item:nth-child(5) .ball { animation-delay: -0.9375s; }
.effect1 .item:nth-child(6) .ball { animation-delay: -0.925s;  }
.effect1 .item:nth-child(7) .ball { animation-delay: -0.9125s; }
.effect1 .item:nth-child(8) .ball { animation-delay: -0.9s;    }

.effect2 .item:nth-child(1) .ball { animation-delay: -0.875s;  }
.effect2 .item:nth-child(2) .ball { animation-delay: -0.75s;   }
.effect2 .item:nth-child(3) .ball { animation-delay: -0.625s;  }
.effect2 .item:nth-child(4) .ball { animation-delay: -0.5s;    }
.effect2 .item:nth-child(5) .ball { animation-delay: -0.375s;  }
.effect2 .item:nth-child(6) .ball { animation-delay: -0.25s;   }
.effect2 .item:nth-child(7) .ball { animation-delay: -0.125s;  }

.effect3 .item:nth-child(1) .ball { animation-delay: -0.5s;    }
.effect3 .item:nth-child(3) .ball { animation-delay: -0.5s;    }
.effect3 .item:nth-child(5) .ball { animation-delay: -0.5s;    }
.effect3 .item:nth-child(7) .ball { animation-delay: -0.5s;    }

.effect4 .item:nth-child(1) .ball { animation-delay: -0.35s;   }
.effect4 .item:nth-child(2) .ball { animation-delay: -0.3s;    }
.effect4 .item:nth-child(3) .ball { animation-delay: -0.25s;   }
.effect4 .item:nth-child(4) .ball { animation-delay: -0.2s;    }
.effect4 .item:nth-child(5) .ball { animation-delay: -0.15s;   }
.effect4 .item:nth-child(6) .ball { animation-delay: -0.1s;    }
.effect4 .item:nth-child(7) .ball { animation-delay: -0.05s;   }

</style>
