/**
 * 对象处理方法
 */

// 对象遍历
export const traverseObj = (obj) => {
  for (let variable in obj) {
    //For…in遍历对象包括所有继承的属性,所以如果
    //只是想使用对象本身的属性需要做一个判断
    if (obj.hasOwnProperty(variable)) {
      console.log(variable, obj[variable])
    }
  }
}

// 对象的数据属性
// 1.对象属性分类:数据属性和访问器属性;
// 2.数据属性:包含数据值的位置,可读写,包含四个特性包含四个特性：
// configurable：表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或能否把属性修改为访问器属性，默认为true
//  enumerable:表示能否通过for-in循环返回属性
//  writable：表示能否修改属性的值
//  value：包含该属性的数据值。默认为undefined

// 3.修改数据属性的默认特性,利用Object.defineProperty()
export const modifyObjAttr = () => {
  let person = {
    name: '张三',
    age: 30
  };

  Object.defineProperty(person, 'name', {
    writable: false,
    value: '李四',
    configurable: false, //设置false就不能对该属性修改
    enumerable: false
  })
}

// 对象的访问器属性

// 1.访问器属性的四个特性:
// configurable：表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，或能否把属性修改为访问器属性，默认为false
//  enumerable:表示能否通过for-in循环返回属性,默认为false
//  Get：在读取属性时调用的函数,默认值为undefined
//  Set：在写入属性时调用的函数,默认值为undefined 

// 2.定义: 访问器属性只能通过要通过Object.defineProperty()这个方法来定义
export const defineObjAccess = () => {
  let personAccess = {
    _name: '张三', //_表示是内部属性,只能通过对象的方法修改
    editor: 1
  }
  
  Object.defineProperty(personAccess, 'name', {
    get: function () {
      return this._name;
    },
    set: function (newName) {
      if (newName !== this._name) {
        this._name = newName;
        this.editor++;
      }
    }
    //如果只定义了get方法则改对象只能读
  })
}
// vue中最核心的响应式原理的核心就是通过defineProperty来劫持数据的getters和setter属性来改变数据的