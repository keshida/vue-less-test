import axios from 'axios'
// axios的get方法
export const getAjax= function (getUrl,getAjaxData) {
  return axios.get(getUrl, {
    params: {
      'getAjaxDataObj1': getAjaxData.obj1,//obj1为getAjaxData的一个属性
      'getAjaxDataObj2': getAjaxData.obj2
    }
  }).then(data=>{
      //成功返回
  }).catch(err=>{
      //错误返回
  })
}
// axios的post方法
export const postAjax= function (getUrl,postAjaxData) {
  return axios.post(postUrl, {
      'postAjaxDataObj1': postAjaxData.obj1,//obj1为postAjaxData的一个属性
      'postAjaxDataObj2': postAjaxData.obj2
  }).then(data=>{
      //成功返回
  }).catch(err=>{
      //错误返回
  })
}
// axios的拦截器
// 主要分为请求和响应两种拦截器,请求拦截一般就是配置对应的请求头信息(适用与常见请求方法,虽然ajax的get方法没有请求头,但是axios里面进行啦封装),响应一般就是对reponse进行拦截处理,如果返回结果为[]可以转化为0
// 1.请求拦截:将当前城市信息放入请求头中
axios.interceptors.request.use(config => {
  config.headers.cityCode = window.sessionStorage.cityCode //jsCookie.get('cityCode')
  return config
},

// 2.响应拦截:处理reponse的结果
axios.interceptors.response.use((response) =>{
  let data = response.data
  if(response.request.responseType === 'arraybuffer'&&!data.length){
    reponse.date=0
  }
})
