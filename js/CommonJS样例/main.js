// const util = require("./util")

// console.log(util.UTIL_NAME);

// util.getData()

// 导入时直接进行解构，免去每次调用都要加 .util

const { UTIL_NAME, getData } = require("./util");

console.log(UTIL_NAME);

getData();
