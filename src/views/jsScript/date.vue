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
      console.log(obtainDate());
    }
  }
};
</script>

<style lang="scss" scoped>
</style>