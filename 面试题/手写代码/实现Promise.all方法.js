// 手写 Promise.all()

Promise.myAll = function(list){
  const results = []
  let count = 0
  return new Promise((resolve,reject) =>{
    list.map((item, index)=> {
      item.then(result => {
          results[index] = result
          count += 1
          if (count >= list.length) { resolve(results) }
      }, reason => reject(reason))
    }) 
  })
}

/**
 * 注意点：
 *  1. 要在 Promise 上实现而不是在原型上
 *  2. 用数组来记录结果
 *  3. 只要有一个 reject 就整体 reject
 */