<template>
  <div class="eclipse_C pagePosition">
    <div class="moon"></div>
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
<style type="text/less" lang="less" rel="stylesheet/less">
.eclipse_C {
  background: aqua;
  .moon {
    margin: 50px;
    font-size: 20px;
    width: 5em;
    height: 5em;
    background: transparent;
    border-radius: 50%;
    box-shadow: 5em 0 0 lightyellow;
    animation: move 10s linear infinite alternate-reverse;
  }
  @keyframes move {
    to {
      box-shadow: -5em 0 0 lightyellow;
      transform: translate(10em, 0);
    }
  }
}
</style>