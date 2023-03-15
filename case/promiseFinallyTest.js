const promise = new Promise((resolve, reject) => {
    new Promise((resolves, reject) => {
        resolves()
    }).then(() => {
        console.log('22222')
    }).then(() => {
        console.log('AAAAA');
        resolve()
    }).then(() => {
        console.log('BBBBB');
    }).finally(() => {
        console.log('44444');
    })
}).then(() => {
    console.log(('33333'));
}).finally(() => {
    console.log('11111');
})

// 2A3B14

