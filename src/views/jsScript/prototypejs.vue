<template>
  <div class="pagePosition prototypejs_C">
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
    function Person () {
      this.a = 1;
      this.b = 2;
    }
    let person1 = new Person();

    console.clear();
    Person.prototype.d=5
    console.log(person1)
    console.log(typeof Person)
  },
  mounted () {},
  methods: {}
}
</script>
<style>
</style>
