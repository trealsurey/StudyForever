const promise = new Promise((res, rej) => {
    rej('出错啦')
}).then(() => {
    console.log('第一个');
}).catch(err => {
    console.log('err', err);
}).then(() => {
    console.log('catch之后');
})