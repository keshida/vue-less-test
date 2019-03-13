<template>
  <div class="flexbox_C">
    <form class="form_C" action="#">
      <input type="email" placeholder="Enter your email">
      <button type="button">send</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  created () {},
  mounted () {},
  methods: {

  }
}
</script>

<style>
.flexbox_C {
  height: 100%;
  width: 100%;
}
.form_C {
  display: flex;
  height: 50px;
  width: 50%;
  align-items: flex-start;
}
input {
  flex-grow: 1;
  border: none;
  background: #eee;
  /* align-self: center; */
}
button {
  border: none;
  /* height: 50px; */

  /* align-self: flex-end; */
}
</style>
