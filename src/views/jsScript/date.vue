<template>
  <div class="date_C"></div>
</template>

<script>
import { obtainDate } from '@/utils/date.js';
export default {
  data() {
    return {
      sd: ''
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const num1 = -25 >>> 3;
      console.log(num1)
      console.log(obtainDate());
    }
  }
};
</script>

<style lang="scss" scoped>
</style>