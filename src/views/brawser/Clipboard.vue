<template>
  <div class="Clipboard_C pagePosition">
    <input type="text" v-model="copyText">
    <input type="text" v-model="clipboardText">
    <button @click="performCopy">performCopy</button>
    <button @click="performPaste">performPaste</button>
  </div>
</template>
<script>
export default {
  /**
   * clipboard功能在https上起作用
   */
  data () {
    return {
      copyText: '123',
      clipboardText: ''
    }
  },
  created () {
    this.init();
  },
  mounted () {
  },
  methods: {
    init() {
      navigator.permissions.query({
        // 授权剪贴板权限
        name: 'clipboard-read'
      }).then(permissionStatus => {
        console.log(permissionStatus.state);
      });
      if (navigator.clipboard && navigator.clipboard.read && navigator.clipboard.write) {
        console.log('true')
      } else {
        console.log('false')
      }
    },
    async performCopy(event) {
      event.preventDefault();
      try {
        await navigator.clipboard.writeText(this.copyText);
        console.log(`${this.copyText} copied to clipboard`);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    },
    async performPaste(event) {
      event.preventDefault();
      try {
        // navigator.clipboard.readText().then(
        //   clipText => this.clipboardText += clipText
        // );
        const text = await navigator.clipboard.readText();

        this.setPastetext(text);
        console.log('Pasted content: ', text);
      } catch (err) {
        console.error('Failed to read clipboard contents: ', err);
      }
    },
    setPastetext(text) {
      this.clipboardText += text
    }
  }
}
</script>

<style>
</style>
