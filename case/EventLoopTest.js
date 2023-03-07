console.log("script start");

setTimeout(() => {
  console.log("setTimeout1");
  new Promise((resolve) => {
    resolve();
  }).then(() => {
    new Promise((resolve) => {
      resolve();
    }).then(() => {
      console.log("then4");
    });
    console.log('then2');
  });
});

new Promise(resolve => {
    console.log('promise1');
    resolve()
}).then(() => console.log('then1'))

setTimeout(() => {
    console.log('setTimeout2');   
});

console.log(2);

queueMicrotask(() => console.log('queueMicrotask1'))

new Promise(resolve => {
    resolve()
}).then(() => console.log('then3'))

console.log('script end');

/**
 * script start
 * promise1
 * 2
 * script end
 * then1
 * queueMicrotask1
 * then3
 * setTimeout1
 * then2
 * then4
 * setTimeout2 
 */