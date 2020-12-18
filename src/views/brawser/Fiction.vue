<template>
  <div class="Fiction_C pagePosition">
    <!-- <iframe ref="iframeId" class="iframec" sandbox="allow-same-origin allow-forms" :src="iframeUrl" frameborder="0" scrolling="auto"></iframe> -->
  </div>
</template>
<script>
export default {
  data () {
    return {
      // iframeUrl: 'https://www.boquge.com/book/49374/141112300.html'
    }
  },
  created () {
    
  },
  mounted () {
    // console.log(this.$refs.iframeId.contentWindow.document.body)
  },
  methods: {
  },
  onunload () {},
  onbeforeunload () {}
}
</script>

<style>
.Fiction_C {
}
.iframec {
  height: 100%;
  width: 300px;
}
</style>
