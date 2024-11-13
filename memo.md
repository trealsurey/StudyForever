## Something Need To Learn

> ref：https://innei.in/posts/archieve/2022-frontend-is-so-juan

### 预备知识

#### HTML
- [ ] 语义化标签（虽然在实际开发中用得不多)
- [ ] Meta 标签，常见的有 `viewport` `keyword`
- [ ] `Link` `Script` 标签的使用，`rel` `async` `defer` 属性用法
- [ ] `a11y` 是什么

#### CSS
- [ ] BFC 是什么，用在什么地方
- [ ] CSS3 动画
- [ ] 各类选择器，`:hover` `:focus` `::before` 以及权重
- [ ] CSS 变量

CSS 没必要刻意学，更新速度快且有些复杂属性不会用到，又要考虑到兼容性

#### JS

- [ ] JS 单线程，动态弱类型
- [ ] 网络请求，了解 XMLHTTPRequest，会使用 Fetch API
- [ ] DOM BOM 常用 API，以及会用这种方法来操作 DOM
- [ ] 时间处理，冒泡、捕获
- [ ] 异步编程，以及如何将回调地狱代码转为 Promise 写法

### 进阶

#### JS

- [ ] 原型链、继承
- [ ] 常见设计模式（工厂模式、观察者模式、订阅发布模式等）
- [ ] 闭包是什么，使用闭包如何避免内存泄漏
- [ ] 作用域是什么
- [ ] this 指向、隐式和显式绑定 this
- [ ] 类型隐式转换 `toString()` `valueOf` `[Symbol.toPrimitive]`
- [ ] Proxy Reflect 元编程

#### Linux

- [ ] 常用命令 `cd` `cp` `mv` `ls` `rm` `mkdir`
- [ ] Git
- [ ] 环境变量

### 工程化

#### 框架
- [ ] Next
- [ ] Nest

#### React

- [ ] JSX 是什么，怎么用，JSX 最终编译的产物是什么
- [ ] Class Component 用法，以及生命周期
- [ ] 高阶组件（HOC）
- [ ] React Hooks 的使用，函数式组件的开发
- [ ] **调试能力，能规避一些不必要的重渲染**
- [ ] 会使用至少一种状态管理库（Redux  Mobx等）
- [ ] **至少通读一遍官方文档**

#### Vue

[参考视频](https://space.bilibili.com/341919508/video)

#### 常用类库

- [ ] Antd, NaiveUI 等
- [ ] **HeadlessUI**
- [ ] 网络请求库：axios, umi-request, ky 等
- [ ] 状态管理库： vuex, pinia, redux, mobx 等
- [ ] SignalState
- [ ] TanStack

#### CSS

- [ ] CSS 预处理器，解决了什么问题（Less SCSS Stylus 等）
- [ ] CSS Module 是什么，解决了什么问题
- [ ] CSSinJS是什么

#### 工具链

- [ ] npm pnpm yarn
- [ ] 打包工具，至少知道是干什么的，Webpack Rollup Vite..

#### 架构

- [ ] 项目目录分配
- [ ] 路由处理
- [ ] 数据管理，持久化数据存储的处理
- [ ] MVVM

#### Node

- [ ]  Express Koa 或其他服务器框架建立简单的服务器
- [ ]  数据库使用 CRUD，借助 ORM ODM 库（MongoDB: mongoose, MySQL: typeorm, etc.）
- [ ]  RESTFul 接口标准

### 深入工程化

#### 工具链

- [ ] 会使用至少一种打包工具，配置能力、发包能力、package.json 定义（main、type、files、module.etc）
- [ ] 配置 ESLint、Prettier、StyleLint，统一代码风格
- [ ] 部署 CI/CD，自动化流程
- [ ] husky、lint-staged
- [ ] Babel 是什么，SWC 了解，ESBuild 了解

#### React

- [ ] 理解 React 的 diff 方式，为什么会重渲染，如何避免或减少重渲染，性能优化
- [ ] 拆分组件、抽离 hooks

#### Vue3

- [ ] 组合式 API、Proxy
- [ ] 多实践多踩坑

#### 架构

- [ ] monorepo
- [ ] 微前端
- [ ] 独立组件库
- [ ] SSR/SPA/CSR/SSG，同构实践

#### CSS

- [ ] 原子 CSS 框架
- [ ] 了解 PostCSS

#### 性能优化

- [ ] WebSocket
- [ ] 前端 SOE

-----

### 方向

#### 大前端

- 移动端开发：React Native、Ionic 等
- 小程序：UniAPP、remax、微信小程序
- 桌面端开发：Electron、NodeGUI
- H5
- 游戏开发：Canvas、WebAssembly 等

#### 架构

- AST
- 设计模式
- 算法与数据结构
- Rust、Go

#### 平台

- 前端监控、埋点等其他服务于开发的平台
