const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    // 这个路径必须是一个绝对路径，否则会报错，加 dirname 是为了防止路径出现一些问题
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      
    ]
  }
};
