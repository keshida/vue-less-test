<template>
  <div class="theme_C pagePosition">
    <div class="left">
      <!-- 表单项 -->
      <div v-for="(item, index) in formList" :key="item.id" class="item" draggable='true' @dragstart='dragstarts(index)'>
        <template v-if="item.type === 'select'">
          <select name="请选择" class="z-select">
            <option value='' disabled selected style='display:none;'>请选择</option> 
          </select>
        </template>
        <template v-else-if="item.type === 'text'">
          <input type="text" placeholder="请输入" class="z-input">
        </template>
        <template v-else-if="item.type === 'textarea'">
          <textarea name="" id="" cols="30" rows="10" placeholder="请输入" class="z-textarea"></textarea>
        </template>
        <template v-else-if="item.type === 'radio'">
          <div class="z-radio">
            <div class="z-item" v-for="(a, ai) in item.options" :key="'option' + ai">
              <div :class="['z-radio_box', {'z-radio_box-active': a.isSelect}]"></div>
              <p>{{ a.label }}</p>
            </div>
          </div>
        </template>
        <template v-else-if="item.type === 'checkbox'">
          <div class="z-checkbox">
            <div class="z-item" v-for="(a, ai) in item.options" :key="'option' + ai">
              <div :class="['z-radio_box', {'z-radio_box-active': a.isSelect}]"></div>
              <p>{{ a.label }}</p>
            </div>
          </div>
        </template>
        <template v-else-if="item.type === 'button'">
          <button>按钮</button>
        </template>
      </div>
    </div>
    <div class="middle" @drop="drops" @dragover='allowDrop'>
      <!-- 放置项 -->
      <div v-for="(item, index) in dropList" :key="index" class="item">
        <p class="item-l">{{ item.title }}</p>
        <div class="item-m">
          <template v-if="item.type === 'select'">
            <select name="请选择" class="z-select">
              <option value='' disabled selected style='display:none;'>{{ item.placeholder }}</option> 
              <option v-for="(o, oi) in item.options" :key="index + '-' + oi" :value='o.value'>{{ o.label }}</option> 
            </select>
          </template>
          <template v-else-if="item.type === 'text'">
            <input type="text" :placeholder="item.placeholder" class="z-input">
          </template>
          <template v-else-if="item.type === 'radio'">
            <div class="z-radio">
              <div class="z-item" v-for="(a, ai) in item.options" :key="'option' + ai" @click="selectRadio(index, ai)">
                <div :class="['z-radio_box', {'z-radio_box-active': a.isSelect}]"></div>
                <p>{{ a.label }}</p>
              </div>
            </div>
          </template>
          <template v-else-if="item.type === 'checkbox'">
            <div class="z-checkbox">
              <div class="z-item" v-for="(a, ai) in item.options" :key="'option' + ai" @click="selectCheckbox(index, ai)">
                <div :class="['z-radio_box', {'z-radio_box-active': a.isSelect}]"></div>
                <p>{{ a.label }}</p>
              </div>
            </div>
          </template>
          <template v-else-if="item.type === 'textarea'">
            <textarea name="" id="" cols="30" rows="10" :placeholder="item.placeholder" class="z-textarea"></textarea>
          </template>
          <template v-else-if="item.type === 'button'">
            <button>{{ item.name }}</button>
          </template>
        </div>
        <div class="item-r">
          <button class="btn" @click="modifyItem(index)">编辑</button>
          <button class="btn" @click="deleteItem(index)">删除</button>
        </div>
      </div>
    </div>
    <div class="right">
      <div v-if="modifyObj.type === 'text' || modifyObj.type === 'select' || modifyObj.type === 'radio' || modifyObj.type === 'checkbox' || modifyObj.type === 'textarea'" class="item">
        <input type="text" v-model="modifyObj.title" placeholder="请输入" class="z-input">
      </div>
      <div v-if="modifyObj.type === 'text' || modifyObj.type === 'select' || modifyObj.type === 'textarea'" class="item">
        <input type="text" v-model="modifyObj.placeholder" placeholder="请输入" class="z-input">
      </div>
      <div v-if="modifyObj.type === 'select' || modifyObj.type === 'radio' || modifyObj.type === 'checkbox'" class="item">
        <div v-for="(item, index) in modifyObj.options" :key="'option' + index">
          <div>
            <input type="text" v-model="item.value">
            <input type="text" v-model="item.label">
          </div>
          <button @click="deleteOption(index)">删除</button>
        </div>
        <button @click="addOption">添加</button>
      </div>
      <div v-if="modifyObj.type === 'button'" class="item">
        <input type="text" v-model="modifyObj.name" placeholder="请输入" class="z-input">
      </div>
      <div class="item">
        <button @click="confirm">确定</button>
        <!-- <button @click="reset">清空</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formList: [
        {id: 1, type: 'select', placeholder: '请选择', title: '选择框', options: []},
        {id: 2, type: 'text', placeholder: '请输入', title: '输入框'},
        {id: 3, type: 'radio', title: '单选', options: [{value: 0, label: '是', isSelect: true}, {value: 1, label: '否', isSelect: false}]},
        {id: 4, type: 'checkbox', title: '多选', options: [{value: 0, label: '选择1', isSelect: true}, {value: 1, label: '选择2', isSelect: false}]},
        {id: 5, type: 'textarea', placeholder: '请输入', title: '输入框'},
        {id: 6, type: 'button', name: '按钮'}
      ],
      dragIndex: 0,
      dropList: [],
      modifyIndex: 0,
      modifyObj: {}
    }
  },
  created () {},
  mounted () {},
  methods: {
    drags(e) {
      console.log(e)
    },
    dragstarts(e) {
      this.dragIndex = e;
    },
    drops(e) {
      console.log(e)
      this.dropList.push(JSON.parse(JSON.stringify(this.formList[this.dragIndex])))
    },
    allowDrop() {
      event.preventDefault();
    },
    modifyItem(index) {
      this.modifyObj = JSON.parse(JSON.stringify(this.dropList[index]))
      this.modifyIndex = index;
      console.log(this.modifyObj)
    },
    deleteItem(index) {
      this.dropList.splice(index, 1)
    },
    confirm() {
      this.dropList[this.modifyIndex] = JSON.parse(JSON.stringify(this.modifyObj))
      this.$forceUpdate()
    },
    reset() {
      
    },
    addOption() {
      this.modifyObj.options.push({
        value: '',
        label: '',
        isSelect: false
      })
    },
    deleteOption(index) {
      this.modifyObj.options.splice(index, 1)
    },
    selectRadio(index, ai) {
      for (let i = 0, max = this.dropList[index].options.length; i < max; i++) {
        if (this.dropList[index].options[i].isSelect) {
          this.dropList[index].options[i].isSelect = false
          break
        }
      }
      this.dropList[index].options[ai].isSelect = true
      this.$forceUpdate()
    },
    selectCheckbox(index, ai) {
      this.dropList[index].options[ai].isSelect = !this.dropList[index].options[ai].isSelect
      this.$forceUpdate()
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/form.scss';
.theme_C {
  display: flex;
  .left {
    width: 200px;
    height: inherit;
    box-sizing: border-box;
    padding: 10px;
    .item {
      width: 100%;
      height: 30px;
      padding-bottom: 2px;
      margin-bottom: 10px;
      line-height: 30px;
      cursor: move;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
  .middle {
    flex: 1;
    height: inherit;
    padding: 10px;
    box-sizing: border-box;
    .item {
      width: 400px;
      height: 30px;
      margin-bottom: 10px;
      line-height: 30px;
      position: relative;
      display: flex;
      justify-content: space-between;
      .item-l {
        width: 100px;
      }
      .item-m {
        width: 300px;
      }
    }
    .item-r {
      height: 100%;
      width: 80px;
      position: absolute;
      top: 0;
      right: -90px;
      .btn {
        padding: 0;
        width: 35px;
        height: 100%;
        font-size: 12px;
      }
    }
  }
  .right {
    width: 200px;
    height: inherit;
    .item {
      width: 200px;
      min-height: 30px;
      margin-bottom: 10px;
      line-height: 30px;
      position: relative;
    }
  }
}
</style>
