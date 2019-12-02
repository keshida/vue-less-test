<template>
  <div class="browserSound_C pagePosition">
    <div class="soundOpera">
      <el-form ref="queryParams" label-position="left" :model="queryParams" label-width="120px">
        <el-form-item label="音量">
          <el-input-number v-model="queryParams.gain" :min="0" :step="0.1" :max="1" label></el-input-number>
        </el-form-item>
        <el-form-item label="失谐量">
          <el-input-number v-model="queryParams.detune" :min="0" :step="1" :max="100" label></el-input-number>
        </el-form-item>
        <el-form-item label="音乐变化曲线">
          <el-select v-model="queryParams.gainChangeType">
            <el-option
              v-for="item in curveList"
              :label="item.label"
              :value="item.value"
              :key="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="波形">
          <el-select v-model="queryParams.waveform" placeholder>
            <el-option
              v-for="item in wavelist"
              :label="item.label"
              :value="item.value"
              :key="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="频率（Hz）">
          <el-input-number v-model="queryParams.frequency" :min="1" :step="10" :max="2000" label></el-input-number>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onStart">开始</el-button>
          <el-button type="primary" @click="onStop">结束</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="audio-wrapper">
      <ul class="piano">
        <li class="key" v-for="item in FREQUENCY_LIST" :key="item" v-on:click="onPlay(item)"></li>
      </ul>
    </div>
  </div>
</template>

<script>
/**
 * 创建一个OscillatorNode 振荡器节点
 * 周期性波形的源
 * 生成一个指定频率的波形信号（即一个固定的音调）
 * 通过改变 
 *  @frequency 振动频率
 *  @type 周期波形
 *  @detune 振荡频率的失谐量(这个好像是声音发出后的损失)
 *  @gain gainNode音调高低
 * 四个值改变声音
 */
const FADING_TIME = 0.5;

export default {
  data() {
    return {
      // https://wow.techbrood.com/fiddle/35067
      audioCtx: {}, // 音频上下文
      oscillator: {}, // 振荡器
      gainNode: {}, // 增益节点
      curveList: [
        { label: '线性变化', value: 'linearRampToValueAtTime' },
        { label: '指数变化', value: 'exponentialRampToValueAtTime' }
      ],
      wavelist: [
        { label: 'sine', value: 'sine' },
        { label: 'aquare', value: 'aquare' },
        { label: 'sawtooth', value: 'sawtooth' },
        { label: 'triangle', value: 'triangle' }
      ],
      FREQUENCY_LIST: [
        261.626,
        277.183,
        293.665,
        311.127,
        329.628,
        349.228,
        369.994,
        391.995,
        415.305,
        440.0,
        466.164,
        493.883
      ],
      queryParams: {
        gain: 0.5,
        gainChangeType: 'linearRampToValueAtTime',
        frequency: 196,
        waveform: 'sine',
        detune: 0
      }
    };
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (!AudioContext) {
        alert('您的浏览器不支持audioContext!');
        return;
      }
      this.audioCtx = new AudioContext();
      this.gainNode = this.audioCtx.createGain();
    },

    onSet() {
      this.oscillator = this.audioCtx.createOscillator();
      this.oscillator.type = this.queryParams.waveform;
      this.oscillator.detune.value = this.queryParams.detune;
      this.gainNode.gain.value = this.queryParams.gain;
      this.oscillator.frequency.value = this.queryParams.frequency;

      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.audioCtx.destination);
    },

    onStart() {
      this.onSet();
      this.oscillator.start();
    },

    onStop() {
      //先在0.5秒内变化到0.001，然后停止
      this.gainNode.gain[this.queryParams.gainChangeType](
        0.001,
        this.audioCtx.currentTime + FADING_TIME
      );
      this.oscillator.stop(this.audioCtx.currentTime + FADING_TIME);
    },
    onPlay(item) {
      this.oscillator = this.audioCtx.createOscillator();
      this.oscillator.type = this.queryParams.waveform;
      this.oscillator.detune.value = this.queryParams.detune;
      this.gainNode.gain.value = this.queryParams.gain;
      /**
       * 这个是从网上找的例子
       * 模拟钢琴的几个键的发声频率
       */
      this.oscillator.frequency.value = item;

      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.audioCtx.destination);

      this.oscillator.start(this.audioCtx.currentTime);
      this.oscillator.stop(this.audioCtx.currentTime + FADING_TIME);
    }
  }
};
</script>
<style>
.soundOpera {
  height: 500px;
  width: 100%;
  text-align: left;
  padding: 20px;
  box-sizing: border-box;
}
.audio-wrapper {
  height: 50px;
}
.piano {
  height: 50px;
  display: flex;
}
.key {
  flex: 1;
  border: 1px solid #000;
}
</style>
