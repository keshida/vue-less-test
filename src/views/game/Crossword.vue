<template>
  <div class="Crossword_C pagePosition">
    <div>
      <table class="box" >
        <tr class="ritem" v-for="(ritem, ti) in nineBox1" :key="ti">
          <td v-for="(ditem, di) in ritem" :key="ti + '-' + di" :class="['ditem', {'ditem-active': ditem !== ' '}]">{{ ditem }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      nineBox: [
        ['','','','','','','','','','',''],
        ['','','','','','','','','','',''],
        ['','','','','','','','','','',''],
        ['','','','','','','','','','',''],
        ['','','','','','','','','','',''],
        ['','','','','','','','','','',''],
        ['','','','','','','','','','',''],
        ['','','','','','','','','','',''],
        ['','','','','','','','','','',''],
        ['','','','','','','','','','',''],
        ['','','','','','','','','','','']
      ],
      nineBox1: [
        [' ',' ',' ',' ',' ',' ','d',' ',' ',' ',' '],
        [' ',' ',' ',' ','s','e','o',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ','m',' ','r',' ',' '],
        [' ',' ','c',' ','h',' ','a',' ','a',' ',' '],
        ['p','r','o','m','o','t','i','o','n',' ',' '],
        [' ',' ','n',' ','s',' ','n',' ','k',' ',' '],
        [' ',' ','t',' ','t',' ',' ','s','i','t','e'],
        [' ','d','e','s','i','g','n',' ','n',' ',' '],
        [' ',' ','n',' ','n',' ',' ',' ','g',' ',' '],
        [' ',' ','t',' ','g',' ',' ',' ',' ',' ',' '],
        [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
      ],
      verseList: [
        'content',
        'hosting',
        'seo',
        'domain',
        'promotion',
        'ranking',
        'site',
        'desing'
      ]
    };
  },
  created() {
    this.init();
  },
  mounted() {
  },
  methods: {
    init() {
      const list1 = this.verseList[0].split('');

      for (let i = 0, max = list1.length; i < max; i++) {
        this.nineBox[0][i] = list1[i]
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  // width: 450px;
  // height: 450px;
  border-collapse: collapse;
  border: 1px solid black;
  table-layout: fixed;
  padding: 0;
  .ritem {
    border: 1px solid black;
  }
  .ditem {
    width: 45px;
    height: 45px;
    border: 1px solid black;
    cursor: pointer;
    padding: 0;
    &.ditem-active {
      background: #e5eecc;
    }
  }
}
</style>
