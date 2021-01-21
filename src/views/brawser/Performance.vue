<template>
  <div class="Performance_C pagePosition">
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  created() {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log(performance.memory);
      const [entry] = performance.getEntriesByType('navigation');

      console.table(entry)
    }
  }
};
</script>

<style>
</style>
