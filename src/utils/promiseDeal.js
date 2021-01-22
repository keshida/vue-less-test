/**
 * 
 */
export const promiseDemo = () => {
  new Promise((resolve, reject) => {
    resolve(() => {
      let a = 1;
      return ++a;
    }).then((data) => {
      console.log(data) //data值为++a的值
    }).catch(() => { //错误执行这个

    })
  })
}
export const promiseDemo = () => {
  Promise.resolve([1, 2, 3]).then((data) => { //直接初始化一个Promise并执行resolve方法
    console.log(data) //data值为[1,2,3]
  })
}
