<template>
  <div class="ballShadow_C">
    <div class="ball_C"></div>
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
.ballShadow_C {
  height: 100%;
  width: 100%;
  background: #c5d2db;
}
.ball_C {
  --sphere-size: 160px;
  width: var(--sphere-size);
  height: var(--sphere-size);
  border-radius:50%;
  box-shadow:
    0 3em 2.5em -2.5em rgba(53,64,73,.6),
    0 0 1em -0.35em rgba(255,255,255,.2),
    0 -1em 1.1em 0 rgba(255,255,255,.5) inset,
    0 0 2.5em 0 rgba(227,249,250,.4) inset;
  background:
    radial-gradient(circle at 33% -25%,rgba(227,249,250,0) 40%,rgba(0, 0, 0,.07) 50%),
    radial-gradient(circle at 50% 135%, rgba(0, 0, 0,.23) 43%,rgba(227,249,250,0)),
    radial-gradient(circle at 50% -35%, rgba(227,249,250,.8) 45%,rgba(227,249,250,0)),
    radial-gradient(circle at 50% 0, #fff,lightcyan);
  background-size: 150%, 100%, 100%, 100%;
}
</style>