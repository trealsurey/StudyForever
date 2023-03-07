console.log('script start');

function requestData(url) {
    console.log('requestData');
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('setTimeout');
            resolve(url)
        }, 2000);
    })
}

async function getData() {
    console.log('getData start');
    const res = await requestData('lucy')
    console.log('then1-res', res);
    console.log('getData end');
}

getData()

console.log('script end');

/**
 * script start
 * getData start
 * requestData
 * script end
 * 
 * 等待2s
 * 
 * setTimeout
 * then1-res lucy
 * getData end
 */