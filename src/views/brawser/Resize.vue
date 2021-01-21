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
  },
  mounted () {
    this.init();
  },
  methods: {
    init() {
      const resizeObserver = new ResizeObserver(entries => {
        for (let entry of entries) {
          if (entry.contentBoxSize) {
            entry.target.style.borderRadius = entry.contentBoxSize[0].inlineSize/10 + 'px'
          }
        }
      });

      resizeObserver.observe(document.getElementById('btnId'));
    },
    inputChange(e) {
      this.resize(e)
    },
    resize(event) {
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
