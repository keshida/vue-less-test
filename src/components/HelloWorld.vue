<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <ul class="hello_myWorkClass">
      <li v-for="(item, index) in workList" v-bind:key="index">{{item.name}}</li>
    </ul>
    <ul class="hello_routerList_C">
      <router-link v-for="(content,key) in menus" :to="content.path" :key="key" tag="li">{{content.name}}</router-link>
    </ul>
    <div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '我的年终工作总结',
      workList: [{name: 'linker', remark: '第一个开始的vue项目'}, {name: '睡眠仪', remark: '第二个的vue项目'}, {name: '遴选平台', remark: '第三个的vue项目'}, {name: 'otc/M版小程序', remark: '微信小程序'}, {name: '个人账单', remark: '第一个原生js项目'}],
      menus: [{name: 'flexbox布局', path: '/flexbox'},{name: 'cssborder', path: '/cssborder'},{name: '个人账单', path: '/consumption'}]
    }
  },
  created () {
  },
  mounted () {},
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello_myWorkClass {
  width: 100%;
  height: 200px;
  position: relative;
}
.hello_myWorkClass li {
  height: 160px;
  width: 160px;
  background: #05ba9a;
  position: absolute;
  top: 0;
  line-height: 160px;
  text-align: center;
  border-radius: 50%;
  font-size: 24px;
  transform: translateX(-50%);
  cursor: pointer;
}
.hello_myWorkClass li:nth-child(1) {
  left: 10%;
}
.hello_myWorkClass li:nth-child(2) {
  left: 30%;
}
.hello_myWorkClass li:nth-child(3) {
  left: 50%;
}
.hello_myWorkClass li:nth-child(4) {
  left: 70%;
}
.hello_myWorkClass li:nth-child(5) {
  left: 90%;
}
.hello_routerList_C {
  height: 50px;
  width: 100%;
  display: flex;
  line-height: 50px;
}
.hello_routerList_C li {
  flex: 1;
  cursor: pointer;
  padding: 0 10%;
}
</style>
