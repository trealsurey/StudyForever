Promise.all([
   new Promise(res => res(0)), 
   new Promise((res, rej) => rej(1))
]).then(v => {
   console.log('then 1 ====== ', v)    
}).catch(e => {
   console.log('catch 1 ====== ', e)
})

Promise.all([
   new Promise(res => res(0)), 
   new Promise(res => res(1)),
   new Promise(res => res(2)), 
   new Promise(res => res(3))
]).then(v => {
   console.log('then 2 ====== ', v)    
}).catch(e => {
   console.log('catch 2 ====== ', e)
})

// then 2 ======  (4) [0, 1, 2, 3]
// catch 1 ======  1