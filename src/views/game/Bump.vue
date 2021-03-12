<template>
  <div class="Bunp_C pagePosition">
    <div
      :class="['item', { 'item-show': item.isShow }, { 'item-ok': item.isOk }]"
      v-for="(item, index) in picList"
      :key="index"
      @click="viewThisName(index)"
    >
      {{ item.isShow || item.isOk ? item.name : "" }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picList: [
        {id: 1, name: '牛黄上清胶囊48', isShow: true, isOk: false},
        {id: 2, name: '硝酸甘油气雾剂', isShow: true, isOk: false},
        {id: 3, name: '开胸顺气丸', isShow: true, isOk: false},
        {id: 4, name: '牛黄上清胶囊48', isShow: true, isOk: false},
        {id: 5, name: '安脑片24', isShow: true, isOk: false},
        {id: 6, name: '福多司坦片', isShow: true, isOk: false},
        {id: 7, name: '复方甘草片', isShow: true, isOk: false},
        {id: 8, name: '硝酸甘油气雾剂', isShow: true, isOk: false},
        {id: 9, name: '开胸顺气丸', isShow: true, isOk: false},
        {id: 10, name: '安脑片24', isShow: true, isOk: false},
        {id: 11, name: '福多司坦片', isShow: true, isOk: false},
        {id: 12, name: '复方甘草片', isShow: true, isOk: false}
      ],
      indexed: -1,
      indexTwo: -1,
      timer: null,
      timer1: null,
      timer2: null
    }
  },
  created () {
    this.init();
  },
  methods: {
    init() {
      this.timer = setTimeout(() => {
        for (let i = 0, max = this.picList.length; i < max; i++) {
          this.picList[i].isShow = false;
        }
        this.timer = null;
      }, 2000)
    },
    viewThisName(index) {
      if (this.timer !== null) {
        return;
      }
      if (this.picList[index].isOk || this.picList[index].isShow) {
        return;
      }
      if (this.indexTwo > 0) {
        return;
      }
      this.picList[index].isShow = true;
      if (this.indexed < 0) {
        this.indexed = index;
        return;
      }
      this.indexTwo = index;
      this.changePicListData();
    },
    changePicListData() {
      if (this.picList[this.indexTwo].name === this.picList[this.indexed].name) {
        this.picList[this.indexTwo].isOk = this.picList[this.indexed].isOk = true;
        this.indexed = -1;
        this.indexTwo = -1;
      } else {
        setTimeout(() => {
          this.picList[this.indexTwo].isShow = this.picList[this.indexed].isShow = false;
          this.indexed = -1;
          this.indexTwo = -1;
        }, 500)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.Bunp_C {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px 100px;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  .item {
    background: #eee;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &.item-show {
      background: #eff;
    }
  }
}
</style>