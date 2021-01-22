/**
 * 数组处理方法
 */
// 判断是否为数组
export const judgeArr = (arr) => {
  if (Array.isArray(arr)) {
    return true;
  }
}

// 去重
export const changeReArr = (arr) => {
  return Array.from(new Set(arr)) //利用set将[1,2,2,3,5,4,5]转化成set数据,利用array from将set转化成数组类型
  // return [...new Set(arr)]//利用...扩展运算符将set中的值遍历出来重新定义一个数组,...是利用for...of遍历的
}

// 纯数组排序
export const orderArr = (arr) => {
  arr.sort((a, b) => {
    return a - b //将arr升序排列,如果是倒序return -(a-b)
  })
}

// 数组对象排序
export const orderObjArr = (arr, property) => {
  arr.sort((a, b) => {
    let value1 = a[property];
    let value2 = b[property];
    
    return value1 - value2; //sort方法接收一个函数作为参数，这里嵌套一层函数用
    //来接收对象属性名，其他部分代码与正常使用sort方法相同
  })
}

// 求数组最大值
export const maxArr = (arr) => {
  return Math.max(...arr)
  // return Math.max.apply(null,arr)
}

// 情况一:全部满足
export const allTrueArr = (arrs) => {
  return arrs.every((arr) => {
    return arr > 20; //如果数组的每一项都满足则返回true,如果有一项不满足返回false,终止遍历
  })
}

// 情况二:有一个满足
export const OneTrueArr = (arrs) => {
  return arrs.some((arr) => {
    return arr > 20; //如果数组有一项满足则返回true,终止遍历,每一项都不满足则返回false
  })
}

// filter:过滤满足某一条件的数组值,并返回新数组
export const filterArr = (arr, operator, judgeVal) => {
  return arr.filter(item => {
    if (operator === '>') {
      return item > judgeVal;
    } else if (operator === '<') {
      return item > judgeVal;
    } else if (operator === '===') {
      return item === judgeVal;
    }
  })
}

// map:对数组进行处理返回一个新数组
export const mapArr = (arr) => {
  return arr.map(item => item + 10) //箭头函数的{}如果省略,则会默认返回,不用写return
}
