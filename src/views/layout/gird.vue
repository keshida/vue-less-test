<template>
  <div class="gird_C onePage pagePosition">
    <!-- <div class="divF">
      <div><p>1</p><p>2</p><p>3</p></div>
      <div><p>4</p><p>5</p><p>6</p></div>
      <div><p>7</p><p>8</p><p>9</p></div>
      <div class="item_1">1</div>
      <div class="item_2">2</div>
      <div class="item_3">3</div>
      <div class="item_4">4</div>
      <div class="item_5">5</div>
      <div class="item_6">6</div>
      <div class="item_7">7</div>
      <div class="item_8">8</div>
      <div class="item_9">9</div>
    </div> -->
    <div class="divT">
      <div class="items itemT_1">1</div>
      <div class="items itemT_2">2</div>
      <div class="items itemT_3">3</div>
      <div class="items itemT_4">4</div>
      <div class="items itemT_5">5</div>
      <div class="items itemT_6">6</div>
      <div class="items itemT_7">7</div>
      <div class="items itemT_8">8</div>
      <div class="items itemT_9">9</div>
      <div class="items itemT_10">10</div>
    </div>
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
  methods: {}
}
</script>

<style>
.gird_C {}
.divF {
  display: grid;
  width: 100%;
  /* grid-template-columns: repeat(auto-fill, 100px); */
  /* grid-template-columns: repeat(3, 100px); */
  /* grid-template-columns: 1fr 1fr; */
  /* grid-template-columns: 150px 1fr 2fr; */
  /* grid-template-columns: 1fr 1fr minmax(100px, 1fr); */
  /* grid-template-columns: 100px auto 100px; */
  /* grid-template-rows: repeat(3, 33.33%); */

  /* grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4]; */

  /* grid-row-gap: 20px;
  grid-column-gap: 20px */
  /* gap: 20px 20px; */
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-rows: 100px;
  grid-template-areas: 'a b c'
                       'd e f'
                       'g h i';
  /* grid-template-areas: 'a a a'
                        'b b b'
                        'c c c'; */
  /* grid-template-areas: "header header header"
                        "main main sidebar"
                        "footer footer footer"; */
  /* grid-template-areas: 'a . c'
                        'd . f'
                        'g . i'; */
  
  /* grid-auto-flow: column | row | row dense | column dense; */
  grid-auto-flow: row dense;
  /* justify-items: start | end | center | stretch; */
  /* align-items: start | end | center | stretch; */
  /* place-items: center end; */


  /* justify-content: start | end | center | stretch | space-around | space-between | space-evenly; */
  /* align-content: start | end | center | stretch | space-around | space-between | space-evenly;  */
  /* place-content: space-around space-evenly; */

}
.item_1 {
  background-color: #ef342a;
  grid-column: 2 / 4;
  /* grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4; */
  /* grid-column: 1 / 3;
  grid-row: 2 / 4; */
  /* grid-column-start: header-start;
  grid-column-end: header-end; */
  /* grid-column-start: span 2; */
  /* grid-area: e; */
  /* grid-area: 1 / 1 / 3 / 3; */
  /* justify-self: start | end | center | stretch;
  align-self: start | end | center | stretch; */
  /* place-self: center center; */
}

.item_2 {
  background-color: #f68f26;
}

.item_3 {
  background-color: #4ba946;
}

.item_4 {
  background-color: #0376c2;
}

.item_5 {
  background-color: #c077af;
}

.item_6 {
  background-color: #f8d29d;
}

.item_7 {
  background-color: #b5a87f;
}

.item_8 {
  background-color: #d0e4a9;
  /* grid-row-start: 4;
  grid-column-start: 2; */
}
.item_9 {
  background-color: #4dc7ec;
  /* grid-row-start: 5;
  grid-column-start: 3; */
}

.divT {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-rows: 100px;
  grid-template-areas: 'a a a'
                       'b b b'
                       'c c c';
}
.items {
  border-bottom: 1px solid #333;
}
.itemT_1 {

}
</style>
