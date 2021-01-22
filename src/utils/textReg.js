/**
 * 字符串验证
 */
// 全部为数字
export const judgeNum1 = (num1) => {
  if (typeof num1 == 'number') {
    return true;
  } else {
    return false;
  }
}
// isNaN
// 注:当num1为[]（空数组）、“”（空字符串)和null会在过程中转换为数字类型的0,所以也会返回false,从而判断为数字,所以可以将用typeof将以上特殊情况剔除.
export const judgeNum2 = (num1) => {
  if (!isNaN(num1)) {
    return true;
  } else {
    return false;
  }
}
// 正则
export const judgeNum3 = (num1) => {
  let reg = /^[0-9]*$/
  if (!reg.test(num1)) {
    console.log('num1是0-9')
  }
}

// 只能为数字或字母
// 这个用正则判断 定义一个正则:let reg=/^[0-9a-zA-Z]*$/g

// 只能为数字,字母和英文逗号
// 因为存在输入多个编号,以英文逗号分隔的情况 定义一个正则:let reg=/^[0-9a-zA-Z,]*$/g

// 判断输入的位数不超过16位
export const judgeNum1 = (num1) => {
  if (num1.length > 16) {
    console.log('num1超过16位')
  }
}

// 去掉字符左右空格
export const trimLeOrRi = (str) => {
  //删除左右两端的空格
  return str.replace(/(^\s*)|(\s*$)/g, "");
}
