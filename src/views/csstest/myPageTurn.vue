<template>
  <div class="myPageTurn_C pagePosition">
    <ul class="books">
      <li class="page" v-for="(item,index) in imgList" :key="index" v-show="0<=indexed">
        <img class="pageImg" :src="item.imgSrc" alt="">
      </li>
    </ul>
    <div>{{ indexed }}{{ indexed==1 }}</div>
    <div>{{ indexed }}{{ indexed==2 }}</div>
    <div>{{ indexed }}{{ indexed==3 }}</div>
    <div>{{ indexed }}{{ indexed==4 }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      indexed: 0,
      imgList: [
        {imgSrc: '../../assets/images/page/1.jpg'},
        {imgSrc: '../../assets/images/page/2.jpg'},
        {imgSrc: '../../assets/images/page/3.jpg'},
        {imgSrc: '../../assets/images/page/4.jpg'}
      ]
    }
  },
  created () {},
  mounted () {
    var setpageTimer = setInterval(() => {
      this.indexed += 1
      console.log(this.indexed)
      if (this.indexed === 3) {
        clearInterval(setpageTimer)
      }
    },2000)
  },
  methods: {}
}
</script>
<style scoped>
ul, li {
  padding: 0;
  margin: 0;
}
.myPageTurn_C {
  padding: 50px;
  box-sizing: border-box;
}
.books {
  height: 550px;
  width: 500px;
  position: relative;
}
.page {
  height: inherit;
  width: 50%;
  position: absolute;
  left: 50%;
  transform-origin: left center;
}
.pageImg {
  height: inherit;
  width: 250px;
}
@keyframes page-turn1 {
  0% {
    transform: perspective(1000px) rotateY(0deg);
  }
  100% {
    transform: perspective(1000px) rotateY(-180deg);
  }
}
.pageAnimation {
  animation: page-turn1 2s ease-in-out forwards;
}
</style>
