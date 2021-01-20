<template>
  <div class="Resize_C pagePosition">
    <input @change="inputChange" type="range" :min="minRange" :max="maxRange" :defaultValue="rangeValue" />
    <br/>
    <button id="btnId">this is btn</button>
  </div>
</template>
<script>
export default {
  /**
   * clipboard功能旨在https上起作用
   */
  data () {
    return {
      minRange: 50,
      maxRange: 500,
      rangeValue: 0
    }
  },
  created () {
    this.init();
  },
  mounted () {
  },
  methods: {
    init() {
    },
    inputChange(e) {
      this.resize(e)
    },
    resize(e) {
      console.log(e)
      console.log(this.rangeValue)
      const value = event.target.valueAsNumber;

      // setRangeValue(value);
      let dumbBtn = document.getElementById('btnId');
      dumbBtn.style.width = `${value}px`;
    }
  }
}
</script>

<style>
</style>
