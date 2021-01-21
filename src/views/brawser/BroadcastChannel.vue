<template>
  <div class="BroadcastChannel_C pagePosition">
    <input type="text" v-model="value">
    <button @click="postMessage">postMessage</button>
    <p>{{ getValue }}</p>
  </div>
</template>
<script>
export default {
  /**
   * clipboard功能旨在https上起作用
   */
  data() {
    return {
      value: '',
      bc: null,
      getValue: ''
    };
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const CHANNEL_NAME = 'greenroots_channel';

      this.bc = new BroadcastChannel(CHANNEL_NAME);
      this.bc.addEventListener('message', event => {
        console.log(`Received message, "${event.data}", on the channel, "${CHANNEL_NAME}"`);
        this.getValue = event.data;
      });
    },
    postMessage() {
      this.getValue = this.value;
      this.bc.postMessage(this.value)
    }
  }
};
</script>

<style>
</style>
