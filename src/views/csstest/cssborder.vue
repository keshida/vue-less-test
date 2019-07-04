<template>
  <div class="flexbox_C">
    <div class="test_C"></div>
    
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
.flexbox_C {
  height: 100%;
  width: 100%;
}
.test_C {
  height: 50px;
  width: 500px;
  background: #999;
  border-bottom: 100px solid #333;
  border-image: -webkit-repeating-linear-gradient(left,#F80 0%,#F80 50%, #2ED 50%, #2ED 100%) 10 20;
}

</style>
