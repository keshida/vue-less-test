<template>
  <div class="flexbox_C">
    <ul class="dataUl_C">
      <li v-for="(item,index) in mySpnedData" :key="index">{{ item.expRemark }}</li>
    </ul>
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
    this.getMyInfor()
    // this.getType()
  },
  mounted () {},
  methods: {
    getMyInfor () {
      this.$axios({
        method: 'get',
        url: '../../static/consumption.json',
        dataType: 'json'
      }).then(res => {
        let resData = res.data, num = 0;

        console.log(resData)
        this.mySpnedData = resData.data.mySpnedData;
        for (let i in this.mySpnedData) {
          num += this.mySpnedData[i].value * 100;
        }
        console.log(num/100)
        console.log(16.56+1.01)
      })
    },
    getType () {
      this.$axios({
        method: 'get',
        url: '../../static/consumptionType.json',
        dataType: 'json'
      }).then(res => {
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
</style>
