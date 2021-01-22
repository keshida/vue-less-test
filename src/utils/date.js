/**
 * 处理日期时间
 * pc 安卓 ios 各平台兼容
 * 各种格式之间的转换
 */
export const dateToFormat = (date) => {
  const a = date.toLocaleString('en-US', {
    hour12: false
  }).replace(/\b\d\b/g, '0$&').replace(new RegExp('/', 'gm'), '-')

  return a
}

export const obtainDate = () => {
  // 返回当前的 年月日时分秒
  const date = new Date();
  const year = date.getFullYear();
  const month = isThanTen(date.getMonth() + 1);
  const day = isThanTen(date.getDate());
  const hours = isThanTen(date.getHours());
  const minu = isThanTen(date.getMinutes());
  const second = isThanTen(date.getSeconds());

  return year + '-' + month + '-' + day + ' ' + hours + ':' + minu + ':' + second
}

function isThanTen(num) {
  return num < 10 ? '0' + num : num;
}

export const returnTimestamp = (strTime) => {
  let middleDate = new Date(strTime)

  return middleDate.toLocaleString('zh-CN', {
    hour12: false
  }).replace(/\b\d\b/g, '0$&').replace(new RegExp('/', 'gm'), '-')
}

// 时间向上 寻找最近10钟刻度

// 时间向上 + n时间

// ios 安卓 兼容 将字符串时间 转化为 Date

// 返回 各种 时间格式字符串

// 对比时间