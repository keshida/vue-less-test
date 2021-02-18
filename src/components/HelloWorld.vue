<template>
  <div class="helloWorld_C">
    <h1>{{msg}}</h1>
    <!-- <ul class="hello_myWorkClass">
      <li v-for="(item, index) in workList" v-bind:key="index">{{item.name}}</li>
    </ul> -->
    <ul class="hello_routerList_C">
      <router-link v-for="(content,key) in menus" :to="content.path" :key="key" tag="li">{{content.name}}</router-link>
    </ul>
    <div style="font-size: 2rem;">张文旭</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '项目性能实验',
      workList: [
        {name: 'linker', remark: '第一个开始的vue项目'},
        {name: '睡眠仪', remark: '第二个的vue项目'},
        {name: '遴选平台', remark: '第三个的vue项目'},
        {name: 'otc/M版小程序', remark: '微信小程序'},
        {name: '个人账单', remark: '第一个原生js项目'}
      ],
      menus: [
        {name: 'layout布局', path: '/layoutHome'},
        {name: 'csstest', path: '/csstest'},
        {name: '个人账单', path: '/consumptionHome'},
        {name: '浏览器监听测试', path: '/brawserHome'},
        {name: 'svg', path: '/svgHome'},
        {name: '相关js库', path: '/jsScriptHome'},
        {name: '武器', path: '/weaponHome'},
        {name: 'canvas', path: '/canvasTest'},
        {name: '视频音频', path: '/videoAudioHome'},
        {name: '游戏', path: '/game'}
      ]
    }
  },
  created () {
    this.setHtmlFontSize();
  },
  mounted () {},
  methods: {
    setHtmlFontSize() {
      window.addEventListener('resize', this.refreshRem);
    },
    refreshRem() {
      const docEl = document.documentElement;
      const width = docEl.getBoundingClientRect().width;
      const rem = width / 100;

      docEl.style.fontSize = rem + 'px';
    }
  }
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
.helloWorld_C {
  padding: 1rem;
}
.hello_myWorkClass {
  width: 100%;
  height: 200px;
  position: relative;
  display: flex;
}
.hello_myWorkClass li {
  flex: 1;
  height: 160px;
  width: 160px;
  background: #05ba9a;
  line-height: 160px;
  text-align: center;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
}
.hello_routerList_C {
  height: 50px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  line-height: 50px;
}
.hello_routerList_C li {
  display: flex;
  cursor: pointer;
  /* padding: 0 10%; */
}
</style>
