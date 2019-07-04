<template>
  <div class="consumption_C">
    <!-- <ul class="dataUl_C">
      <li v-for="(item,index) in mySpnedData" :key="index">{{ item.expRemark }}</li>
    </ul> -->
    <!-- <ul class="dataUl_C">
      <li v-for="(item,index) in gameList" :key="index">{{ item.expRemark }} {{ item.value }}</li>
    </ul> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      mySpnedData: [],
      typeList: [],
      gameList: [],
      numTal: 0,
      gameTal: 0,
      tYear: '',
      tMonth: '',
      tDay: '',
      yearList: '',
      monthList: '',
      dayLis: ''
    }
  },
  created () {
    // this.getMyInfor()
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
        let resData = res.data;

        this.mySpnedData = resData.data.mySpnedData;
        for (let i in this.mySpnedData) {
          this.numTal += this.mySpnedData[i].value * 100;
          if (this.mySpnedData[i].type === 'gameExp') {
            this.gameTal += this.mySpnedData[i].value * 100;
            this.gameList.push(this.mySpnedData[i]);
          }
        }
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
    },
    getDateList () {
      let endDate = new Date();

      this.tYear = endDate.getFullYear(),
      this.tMonth = endDate.getMonth()+1,
      this.tDay = endDate.getDate(),
      this.yearList = this.dateCycle(this.tYear,Number(this.startDate[0]))
      this.monthList = this.dateCycle(1,12)
      this.dayList = this.dateCycle(1,31)
    },
    dateCycle (start,end) {
      let list = [];

      if (start >= end) {
        for (let i = start; i >= end; i--) {
          list.push({
            value: i,
            lable: i
          })
        }
      } else {
        for (let i = start; i <= end; i++) {
          list.push({
            value: i,
            lable: i
          })
        }
      }
      return list;
    },
    yearJudge () {
      //年选择判断
      if (this.year === this.tYear) {
        this.monthList = this.dateCycle(1,this.tMonth);
        if (this.month > this.tMonth) {
          this.month = 1;
        } else {
          this.monthJudge();
        }
      } else {
        this.monthJudge();
      }
    },
    monthJudge () {
      //月选择判断
      if (this.year === this.tYear && this.month === this.tMonth) {
        this.dayList = this.dateCycle(1,this.tDay);
        if (this.day > this.tDay) {
          this.day = 1;
        }
      } else {
        this.dayList = this.dateCycle(1,this.returnMonthDayNum(this.month));
        if (this.day > this.dayList.length) {
          this.day = 1;
        }
      }
      this.selectPatientData();
    },
    returnMonthDayNum (m) {
      //判断月中天数
      switch (m) {
      default:
      case 1: 
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        return 31;
      case 4: 
      case 6:
      case 9:
      case 11:
        return 30;
      case 2:
        return this.isLeapYear(this.year) ? 29 : 28;
      }
    },
    isLeapYear (y) {
      //是否是闰年
      return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0 ? true : false
    },
    isLetterTen (n) {
      return n < 10 ? '0' + n : n;
    }
  }
}
</script>

<style>
.consumption_C {
  height: 100%;
  width: 100%;
  overflow: auto;
}
</style>
