// 判断一个值是否是对象

function isObj(originValue) {
    let type = typeof originValue
    return (originValue !== null) && (type === 'object' || type === 'function')
}
