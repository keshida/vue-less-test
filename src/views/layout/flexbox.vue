<template>
  <div class="flexbox_C">
    <form class="form_C" action="#">
      <input type="email" placeholder="Enter your email">
      <button type="button">send</button>
    </form>
    <div class="flexDiv_C">
      <div v-for="item in flexList" :key="item.id">{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      flexList: [
        {name: '1ssssssssssssssssssssss', id: '1'},
        {name: '2ssssssssssssssssssssssssss', id: '2'},
        {name: '3sssssssssssssssssssssssssssss', id: '3'},
        {name: '4ssssssssssssssssss', id: '4'},
        {name: '5ssssssssssssssssss', id: '5'},
        {name: '6sssss', id: '6'}
      ]
    }
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
.form_C {
  display: flex;
  height: 200px;
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
.flexDiv_C {
  height: 200px;
  width: 100%;
  background: #EAEAEA;
  display: inline-flex;
  justify-content: space-between;
  flex-flow: row wrap;
  /*flex-direction: row;
  flex-wrap: wrap;*/
  align-items: flex-start;
}
.flexDiv_C div {
  /*flex: 1;*/
  height: 50px;
  margin: 0 20px;
}
</style>
