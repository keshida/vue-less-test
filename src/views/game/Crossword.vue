<template>
  <div class='Crossword_C pagePosition'>
    <div id="crossword"></div>
    <table id="clues">
      <thead>
        <tr>
          <th>Across</th>
          <th>Down</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><ul id="across"></ul></td>
          <td><ul id="down"></ul></td>
        </tr>
      </tbody>
    </table>
    <!-- <div>
      <table class='box' >
        <tr class='ritem' v-for='(ritem, ti) in nineBox1' :key='ti'>
          <td v-for='(ditem, di) in ritem' :key='ti + '-' + di' :class='['ditem', {'ditem-active': ditem !== ' '}]'>{{ ditem }}</td>
        </tr>
      </table>
    </div> -->
  </div>
</template>

<script>
import { CrosswordUtils, Crossword } from '../../../static/js/crossword.js';
export default {
  props: {},
  data() {
    return {
      nineBox: [
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', '', '', '', '']
      ],
      nineBox1: [
        [' ', ' ', ' ', ' ', ' ', ' ', 'd', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', 's', 'e', 'o', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', 'm', ' ', 'r', ' ', ' '],
        [' ', ' ', 'c', ' ', 'h', ' ', 'a', ' ', 'a', ' ', ' '],
        ['p', 'r', 'o', 'm', 'o', 't', 'i', 'o', 'n', ' ', ' '],
        [' ', ' ', 'n', ' ', 's', ' ', 'n', ' ', 'k', ' ', ' '],
        [' ', ' ', 't', ' ', 't', ' ', ' ', 's', 'i', 't', 'e'],
        [' ', 'd', 'e', 's', 'i', 'g', 'n', ' ', 'n', ' ', ' '],
        [' ', ' ', 'n', ' ', 'n', ' ', ' ', ' ', 'g', ' ', ' '],
        [' ', ' ', 't', ' ', 'g', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
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
    // this.init();
  },
  mounted() {
    this.init1();
  },
  methods: {
    init() {
      const list1 = this.verseList[0].split('');

      for (let i = 0, max = list1.length; i < max; i++) {
        this.nineBox[0][i] = list1[i];
      }
    },
    init1() {
      const words = [
        '华佗再造丸72',
        '牛黄上清片',
        '华佗再造丸96',
        '华佗复合维生素',
        '牛黄清火丸',
        '泌淋清胶囊'
      ];
      const clues = [
        '广州潘高寿药业股份有限公司',
        '贵州苗药药业有限公司',
        '广州白云山奇星药业有限公司',
        '西安风华药业有限公司',
        '内蒙古天奇中蒙制药股份有限公司',
        '昆药集团血塞通药业股份有限公司'
      ];

      let cw = new Crossword(words, clues);

      let grid = cw.getSquareGrid(12);

      // report a problem with the words in the crossword
      if (grid === null) {
        const badWords = cw.getBadWords();

        let str = [];

        for (let i = 0; i < badWords.length; i++) {
          str.push(badWords[i].word);
        }
        alert(
          'Shoot! A grid could not be created with these words:\n' +
            str.join('\n')
        );
        return;
      }

      // turn the crossword grid into HTML
      const showAnswers = true;

      document.getElementById('crossword').innerHTML = CrosswordUtils.toHtml(
        grid,
        showAnswers
      );

      // make a nice legend for the clues
      const legend = cw.getLegend(grid);

      this.addLegendToPage(legend);
    },
    addLegendToPage(groups) {
      console.log(groups)
      for (let k in groups) {
        let html = [];

        for (let i = 0; i < groups[k].length; i++) {
          html.push(
            '<li><strong>' +
              groups[k][i]['position'] +
              '.</strong> ' +
              groups[k][i]['clue'] +
              '</li>'
          );
        }
        console.log(k)
        document.getElementById(k).innerHTML = html.join('\n');
      }
    }
  }
};
</script>
<style lang='scss' scoped>
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

#crossword {
  text-align: center;
}

.crossword {
  border-collapse: collapse;
  font-family: 'Courier New', Courier, monospace;
  margin-left: auto;
  margin-right: auto;
  clear: both;
  margin-top: 10px;
  margin-bottom: 10px;
}

.crossword td {
  border: 1px solid black;
  padding: 0;
  margin: 0;
  vertical-align: middle;
  padding: 0;
  text-align: center;
  width: 30px;
  height: 30px;
}

.crossword .no-border {
  border: none;
}

#clues {
  margin: auto;
}

#clues td {
  vertical-align: top;
}
</style>