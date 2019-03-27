<template>
  <div class="flexbox_C">
    <!-- <form class="form_C" action="#">
      <input type="email" placeholder="Enter your email">
      <button type="button">send</button>
    </form> -->
    <div>
      <select name="" id="">
        <option v-for="(item,index) in typeList" value="" :key="index"></option>
      </select>
    </div>
    <ul class="dataUl_C">
      <li v-for="(item,index) in mySpnedData" :key="index">{{ item.expRemark }}</li>
    </ul>
    <div class="test_C"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mySpnedData: [],
      typeList: []
    }
  },
  created () {
//  this.getMyInfor();
//  this.getType();
  },
  mounted () {},
  methods: {
    getMyInfor () {
      this.$axios({
        method: 'get',
        url: '../../static/consumption.json',
        dataType: 'json'
      }).then(res => {
        this.mySpnedData = res.data.data.mySpnedData;
      })
    },
    getType () {
      this.$axios({
        method: 'get',
        url: '../../static/consumptionType.json',
        dataType: 'json'
      }).then(res => {
        console.log(res.data.data.typeList)
        this.typeList = res.data.data.typeList;
      })
    }
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
.dataUl_C {
  width: 100%;
  overflow: hidden;
  text-align: left;
}
.test_C {
	height: 50px;
	width: 500px;
	background: #999;
	border-bottom: 100px solid #333;
	border-image: -webkit-repeating-linear-gradient(left,#F80 0%,#F80 50%, #2ED 50%, #2ED 100%) 10 20;
	
}
</style>
