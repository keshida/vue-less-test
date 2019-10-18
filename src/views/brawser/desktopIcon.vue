<template>
  <div class="desktopIcon_C pagePosition">
    <button v-on:click="toDesktop">fsd</button>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  created () {
    
  },
  mounted () {
  },
  methods: {
    toDesktop() {
      // ActiveX是微软提供给IE的方法 其他浏览器无法使用
      // try {
      //   let n = new ActiveXObject('WScript.Shell');
      //   let t = n.CreateShortcut(n.SpecialFolders('Desktop') + '\\测试.url');
      //   t.TargetPath = 'fasd',
      //   t.Save()
      // } catch (e) {
      //   alert(e)
      // }
    }
  },
  onunload () {},
  onbeforeunload () {}
}
</script>

<style>
</style>
