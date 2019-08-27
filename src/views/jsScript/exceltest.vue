<template>
  <div class="exceltest_C">
    <input type="file" ref="upload" accept=".xls,.xlsx" class="outputlist_upload">
    <div id="result"></div>
    <button v-on:click="seetDatas">setData</button>
    <button v-on:click="getMapll">获取经纬度</button>
    <button v-on:click="tableToExcel">下载文件</button>
    <div class="mapClass" id='mapId'></div>
  </div>
</template>

<script>
import XLSX from 'xlsx'
export default {
  data () {
    return {
      qqMap: {},
      outputs: []
    }
  },
  created () {},
  mounted () {
    this.$refs.upload.addEventListener('change', e => {
      //绑定监听表格导入事件
      this.readExcel(e);
    })
    // this.getMap();
  },
  methods: {
    getMapll () {
      this.$axios({
        type: 'get',
        dataType: 'jsonp',
        data: {
          key: 'TIXBZ-XYX6U-2B3V6-BE4HT-CGZA2-XAFD5', // 填申请到的key
          address: this.outputs[0].address, //具体的地址
          output: 'JSON' //返回格式：支持JSON/JSONP，默认JSON
        },
        jsonp: 'callback',
        jsonpCallback: 'QQmap',
        url: 'https://apis.map.qq.com/ws/geocoder/v1/?',
        success: function (json) {
          console.log(json)
        },
        error: function (err) { 
          alert('异常错误，请刷新浏览器后重试:' + err);
        }
      })
    },
    // getMap() {
    //   // 获取地图信息
    //   this.qqMap = new qq.maps.Map(document.getElementById('mapId'),
    //     {
    //       center: new qq.maps.LatLng(39.914850, 116.403765)
    //     }
    //   );
    // },
    readExcel(e) {
      //表格导入
      var that = this;
      const files = e.target.files;
      
      if (files.length <= 0) {
        //如果没有文件名
        return false;
      } else if (!/\.(xls|xlsx)$/.test(files[0].name.toLowerCase())) {
        this.$Message.error('上传格式不正确，请上传xls或者xlsx格式');
        return false;
      }
      const fileReader = new FileReader();

      fileReader.onload = (ev) => {
        console.log(ev)
        try {
          const data = ev.target.result;
          const workbook = XLSX.read(data, {
            type: 'binary'
          });
          const wsname = workbook.SheetNames[0];//取第一张表
          const ws = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]);//生成json表格内容
          
          that.outputs = ws;//清空接收数据
          this.$refs.upload.value = '';
        } catch (err) {
          return false;
        }
      };
      fileReader.readAsBinaryString(files[0]);
    },
    seetDatas () {
      for (let i in this.outputs) {
        if (this.outputs[i].address === '' || this.outputs[i].address === 'undefined') {
          this.outputs[i].address = this.outputs[i].orgName;
        }
        if (this.outputs[i].address.indexOf(this.outputs[i].city) === -1) {
          this.outputs[i].address = this.outputs[i].city + '市' + this.outputs[i].address;
        }
        if (this.outputs[i].address.indexOf('河南') === -1) {
          this.outputs[i].address = '河南省' + this.outputs[i].address;
        }
      }
    },
    tableToExcel(){
      //要导出的json数据
      let str = '<tr><td>排名</td><td>终端名称</td><td>地址</td><td>市</td></tr>';

      //循环遍历，每行加入tr标签，每个单元格加td标签
      for (let i = 0 ; i < this.outputs.length ; i++ ) {
        str += '<tr>';
        str += `<td>${this.outputs[i].sort + '\t'}</td>`;
        str += `<td>${this.outputs[i].orgName + '\t'}</td>`;
        str += `<td>${this.outputs[i].address + '\t'}</td>`;
        str += `<td>${this.outputs[i].city + '\t'}</td>`;
        str += '</tr>';
      }
      //Worksheet名
      let worksheet = 'Sheet1'
      let uri = 'data:application/vnd.ms-excel;base64,';
 
      //下载的表格模板数据
      let template = `<html xmlns:o='urn:schemas-microsoft-com:office:office' 
      xmlns:x='urn:schemas-microsoft-com:office:excel'
      xmlns='http://www.w3.org/TR/REC-html40'>
      <head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
        <x:Name>${worksheet}</x:Name>
        <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet>
        </x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
        </head><body><table>${str}</table></body></html>`;
      
      //下载模板
      window.location.href = uri + this.base64(template)
    },
    //输出base64编码
    base64 (s) { 
      return window.btoa(unescape(encodeURIComponent(s))) 
    }
  }
}
</script>
<style>
.exceltest_C {
  width: 100%;
  height: 100%;
  --size-se: 150px;
}
.mapClass {
  width: 100%;
  height: calc(100% - 5rem);
}
</style>
