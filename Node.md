# Node

[官方网站](http://nodejs.org)

[中文网站（非官方）](http://nodejs.cn)

Node.js 是一个基于 JS V8 引擎的 JS 运行时环境

> Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

其实不仅仅只有 V8 引擎

1. 前面知道 V8 可以嵌入到任何 C++ 应用程序中，无论是 Chrome 还是 Node.js，事实上都是嵌入了 V8 引擎来执行 JS 代码
2. 在 Chrome 中，还需要解析、渲染 HTML CSS 等相关渲染引擎，另外还需要提供支持浏览器操作的 API、浏览器自己的事件循环等
3. 在 Node 中我们也需要进行一些额外的操作，比如文件系统读/写、网络 IO、加密、压缩解压文件等操作

Node 程序使用什么语言编写的？JS & C++ & C

![浏览器和Node的区别](imgs/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%92%8CNode%E7%9A%84%E5%8C%BA%E5%88%AB.png)

![Node架构图](imgs/Node%E6%9E%B6%E6%9E%84%E5%9B%BE.png)

我们编写的 JS 代码会经过 V8 引擎，在通过 Node 的 Bindings，将任务放在 Libuv 的事件循环中

libuv 是使用 C 语言编写的库，提供了事件循环、文件系统读写、网络 IO、线程池等内容

## 应用场景 

1. 目前前端开发的库都是以 node 包的形式进行管理的
2. npm、yarn、pnpm 工具成为前端开发使用最多的工具
3. 越来越多的公司使用 Node 作为 Web 服务器开发、中间件、代理服务器
4. 大量项目需要借助 Node 完成前后端渲染的同构应用
5. 资深前端工程师需要为项目编写脚本工具（前端工程师编写脚本通常会使用 JS,而不是 Python 或者 Shell）
6. 很多企业在使用 Electron 来开发桌面应用程序
7. ……

## 安装和管理

官网下载安装即可，安装过程中会自动安装 npm

如果希望快速更新或切换多个 node 版本，可以借助于一些工具：
- nvm/nvm-windows：Node Version Manager (Mac/Windows)
- n：Interactively Manage your Node.js Versions（交互式管理 node 版本）（不支持 Windows） 

## 输入参数

如果需要在 node 执行过程中传递参数，那么可以直接在文件后加上参数

```cmd
node test.js 20 30
```

之后就可以通过 `process.argv` 来获取传入的参数，`process.argv` 是一个数组，其中包括 node 路径、文件路径、参数等信息

```js
process.argv[2] // 20
process.argv[3] // 30
```

process 对象中还包含其他信息，比如版本、操作系统等

## REPL

REPL 是 Read-Eval-Print Loop “读取-求值-输出” 循环 的简称，是一个简单的交互式编程环境（比如，chrome 的 console 控制台就是一个 REPL

在 VS Code 控制台里输入 node 就会进入一个 REPL，就可以进行像 chrome 控制台一样的操作

## Node中的全局对象

- `global`
- `console`
- `exports`
- `module`
- `require()`
- `Buffer`
- `process`
- `setTimeout()/setInterval()`
- ……详见官方文档

但是这些全局对象并不像 JS 中的全局对象，实际上是 **模块中的变量**，只是因为每个模块都有，所以看起来像是全局变量
- 在命令行交互中是不可用的
- 包括 `__dirname` `__filename` `exports` `module` `require()`