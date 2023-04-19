# Node

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

## 安装和管理

## JS 代码执行

## 输入和输出

## Node中的全局对象

