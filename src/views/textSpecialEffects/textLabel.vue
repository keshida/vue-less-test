<template>
  <div class="textLabel_C pagePosition">
    <div class="testDiv_C">555</div>
    <div class="testDiv_C testDiv2_C">555sasdfasfasdfasssssssssdfs</div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>
<style>
.textLabel_C {
  width: 100%;
  height: 100%;
  --size-se: 150px;
}
.testDiv_C {
  height: var(--size-se);
  width: var(--size-se);
  background: #eee;
}
.testDiv2_C {
  /* user-select: none; */
}
.testDiv2_C::selection {
  color: #05ba9a;
  background: #eee;
}
</style>
