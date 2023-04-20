const UTIL_NAME = "UTIL_NAME"

function getData() {
    console.log("data", UTIL_NAME);
}

// exports.UTIL_NAME = UTIL_NAME
// exports.getData = getData

module.exports = {
    UTIL_NAME,
    getData
}

// 注意这里，即使重新赋值也不会改变 UTIL_NAME 的值，因为现在 exports 和 module.exports 的内存是两个不同的地址
exports.UTIL_NAME = "你把我改了"