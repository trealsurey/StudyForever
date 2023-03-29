console.log('script start');

function requestData(url) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('setTimeout');
            resolve(url)
        }, 2000);
    })
}

function getData() {
    console.log('getData start');
    requestData('lucy').then(res => {
        console.log('then1-res', res);
    })
    console.log('getData end');
}

getData()

console.log('script end');

/**
 * script start
 * getData start
 * getData end
 * script end
 * 
 * 等待2s
 * 
 * setTimeout
 * then1-res lucy
 */