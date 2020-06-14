<template>
  <div class="pagePosition prototypejs_C">
  </div>
</template>

<script>
export default {
  data () {
    return {
      oriArr: [
        ['a', 'aa', 'aaa', 'aaaa'],
        ['b', 'bb', 'bbb'],
        ['a', 'ab', 'aba'],
        ['a', 'aa', 'aab']
      ],
      newArr: [
      ]
    }
  },
  created () {
    this.setArr();
  },
  mounted () {},
  methods: {
    init () {
      // let a = {
      //   i: 0,
      //   valueOf: function() {
      //     return ++a.i;
      //   }
      // }

      // if (a == 1 && a == 2 && a == 3) {
      //   console.log('这都行')
      // }
      this.nextStr();
    },
    setArr () {
      let oriArr = [
        ['a', 'aa', 'aaa', 'aaaa'],
        ['b', 'bb', 'bbb'],
        ['a', 'ab', 'aba'],
        ['a', 'aa', 'aab']
      ];

      let newArr = [];

      oriArr.forEach(oArr => {
        this.nextStr(oArr, newArr, 0)
      })
      console.log(newArr)
    },
    nextStr (oArr, nArr, i) {
      let index = nArr.findIndex(item => {
        return item.name === oArr[i]
      })
      
      if (index < 0) {
        nArr.push({
          name: oArr[i],
          children: []
        })
      }
      if (oArr.length - 1 > i) {
        this.nextStr(oArr, index >= 0 ? nArr[index].children : nArr[nArr.length - 1].children, i + 1)
      }
    }
  }
}
</script>
<style>
</style>
