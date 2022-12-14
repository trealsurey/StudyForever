# Vue

[Vue官网](https://vuejs.org/)

[参考教程 coderwhy](https://www.bilibili.com/video/BV15741177Eh/)

## 1. 什么是 Vue

Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 **渐进式** JavaScript 框架（渐进式意味着你可以将 Vue 作为应用的一部分嵌入其中，带来更丰富的交互体验）。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套 **声明式的、组件化的** 编程模型，帮助你高效地开发用户界面

与其他重量级框架不同的是，Vue 采用 **自底向上增量开**发 的设计。Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和 Vue 生态系统支持的库开发的复杂单页应用

Vue.js 的目标是通过尽可能简单的 API 实现 **响应的数据绑定和组合的视图组件**

Vue 的两个核心功能：
- **声明式渲染**：Vue 基于标准 HTML 拓展了一套模板语法，使得我们可以声明式地描述最终输出的 HTML 和 JavaScript 状态之间的关系
- **响应性**：Vue 会自动跟踪 JavaScript 状态并在其发生变化时响应式地更新 DOM

### 1.1 Vue 与其他框架的对比

[Vue与其他框架的对比](http://caibaojian.com/vue/guide/comparison.html)

### 1.2 Vue 常见的高级功能

- 解耦视图和数据
- 可复用的组件
- 前端路由技术
- 状态管理
- 虚拟 DOM

## 2. 安装

一般有三种方式：

1. CDN 引入，本地测试或学习一般不用，因为经常需要去服务器请求，浪费时间

```js
// 开发环境版本，包含了有帮助的命令行警告
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
// 生产环境版本，优化了尺寸和速度
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

2. 本地下载和引入

- 开发环境：https://vuejs.org/js/vue.js
- 生产环境：https://vuejs.org/js/vue.min.js

3. 通过 npm 安装：后续通过 webpack 和 CLI 的使用，经常会使用这种方式

## 3. Hello Vue

```js
// <div id="app">{{message}}</div>

const app = new Vue({
    // 挂载要管理的元素
    el: "#app",
    // 定义数据
    data: {
        message: "Hello Vue!"
    }
})
```

创建 Vue 对象时传入了一些 option `{ }`，其中包含
- `el`：该属性决定了这个 Vue 对象挂载到哪一个元素
- `data`：该属性中通常会存储一些数据，可以是自己定义的，也可以是从服务器中获取的

原生 JS 方式属于命令式编程范式，不能做到数据和页面的完全分离；而 Vue 等框架采用的是声明式编程范式，可以做到完全分离，在改变数据时完全不需要改动页面

在浏览器 console 中可以直接 `app.message = "today is a good day"` 修改 message 的值，页面也会同步修改

响应式编程：改变 JS 中的 message，HTML 中的数据也会进行响应发生变化

```html
<!-- 还可以有更复杂的操作，比如展示列表 -->

<ul v-for="movie in movies">
    {{movie}}
</ul>
```

```html
<!-- case 3：简单计数器 -->

<body>
    <div id="app">
      <h1>{{message}}</h1>
      <h2>当前计数：{{counter}}</h2>
      <!-- 注意这里的函数不需要加括号 -->
      <button v-on:click="increment">+</button>
      <!-- @click 就是 v-on:click 的简写，语法糖 -->
      <button @click="decrement">-</button>
    </div>
    <script>
      const app = new Vue({
        el: "#app",
        data: {
          message: "Hello Vue",
          counter: 0,
        },
        methods: {
          increment: function () {
            console.log("当前计数 + 1");
            // 这里利用了 Vue 中的代理 proxy，后面会讲到
            this.counter++;
          },
          decrement: function () {
            console.log("当前计数 - 1");
            this.counter--;
          },
        },
      });
    </script>
</body>
```