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
    this.getMyInfor();
    this.getType();
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
</style>
