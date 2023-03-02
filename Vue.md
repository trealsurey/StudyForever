# Vue

[Vue官网](https://vuejs.org/)

[参考教程 coderwhy](https://www.bilibili.com/video/BV15741177Eh/)

## 什么是 Vue

Vue (发音为 /vjuː/，类似 view) 是一款用于构建用户界面的 **渐进式** JavaScript 框架（渐进式意味着你可以将 Vue 作为应用的一部分嵌入其中，带来更丰富的交互体验）。它基于标准 HTML、CSS 和 JavaScript 构建，并提供了一套 **声明式的、组件化的** 编程模型，帮助你高效地开发用户界面

与其他重量级框架不同的是，Vue 采用 **自底向上增量开**发 的设计。Vue 的核心库只关注视图层，并且非常容易学习，非常容易与其它库或已有项目整合。另一方面，Vue 完全有能力驱动采用单文件组件和 Vue 生态系统支持的库开发的复杂单页应用

Vue.js 的目标是通过尽可能简单的 API 实现 **响应的数据绑定和组合的视图组件**

Vue 的两个核心功能：
- **声明式渲染**：Vue 基于标准 HTML 拓展了一套模板语法，使得我们可以声明式地描述最终输出的 HTML 和 JavaScript 状态之间的关系
- **响应性**：Vue 会自动跟踪 JavaScript 状态并在其发生变化时响应式地更新 DOM

### Vue 与其他框架的对比

[Vue与其他框架的对比](http://caibaojian.com/vue/guide/comparison.html)

### Vue 常见的高级功能

- 解耦视图和数据
- 可复用的组件
- 前端路由技术
- 状态管理
- 虚拟 DOM

## 安装

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

## Hello Vue

```html
<div id="app">
  <h1>{{message}}</h1>
  <h2>{{message}}, by EvanYou</h2>
  <h3>{{firstName + lastName}}</h3>
  <h3>{{firstName + ' ' + lastName}}</h3>
  <h3>{{firstName}} {{lasrName}}</h3>
</div>
```

```js
const app = new Vue({
    // 挂载要管理的元素
    el: "#app",
    // 定义数据
    data: {
        message: "Hello Vue",
        firstName: 'Jojo',
        lastName: 'Wan'
    }
})
```

创建 Vue 对象时传入了一些 option `{ }`，其中包含
- `el`：该属性决定了这个 Vue 对象挂载到哪一个元素
- `data`：该属性中通常会存储一些数据，可以是自己定义的，也可以是从服务器中获取的
- ……，还有许多其他的 options，具体参考官网

原生 JS 方式属于命令式编程范式，不能做到数据和页面的完全分离；而 Vue 等框架采用的是声明式编程范式，可以做到完全分离，在改变数据时完全不需要改动页面

在浏览器 console 中可以直接 `app.message = "today is a good day"` 修改 message 的值，页面也会同步修改

响应式编程：改变 JS 中的 message，HTML 中的数据也会进行响应发生变化

插值语法中，不仅仅可以直接写变量，也可以写简单的表达式

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

### v-once

元素和组件只渲染一次，不会随着数据的改变而改变

```html
<div id="app">
  <h2>{{message}}</h2>
  <!-- 更改 message 的值，这里的 显示的内容不会改变 -->
  <h2 v-once>{{message}}</h2> 
</div>
```

### v-html

对 HTML 进行解析，并且显示对应内容

后面跟一个 string，对 string 进行 HTML 解析并渲染

```html
<div id="app">
  <h2>{{link}}</h2>
  <h2 v-html="link"></h2>
</div>

<!-- link="<a href="http://www.baidu.com">百度一下</a>" -->
```

### v-pre

用于跳过这个元素和它子元素的编译过程，用于显示原本的内容。比如，就想显示大括号和里面的内容

```html
<div id="app">
  <!-- 显示 Hello World -->
  <h2>{{message}}</h2>
  <!-- 显示 {{message}} -->
  <h2 v-pre>{{message}}</h2> 
</div>

<!-- message: 'Hello World' -->
```

## Vue 中的 MVVM

MVVM，Model-View-ViewModel，是一种软件架构模式。有助于将图形用户界面的开发和业务逻辑或后端逻辑（数据模型）的开发分离开来

- Model：代表真实状态内容的领域模型（面向对象），或指代表内容的数据访问层（以数据为中心）
- View：就像在 MVC 和 MVP 模型中的一样，视图层就是用户在屏幕上看到的结构、布局和外观 UI
- ViewModel：暴露公共属性和命令的视图的抽象。MVVM 没有 MVC 的控制器，也没有 MVP 的 presenter，有的是一个绑定器，用来在视图和数据之间进行通信

![MVVM模型](imgs/MVVMPattern.png)

![Vue中的MVVM](imgs/Vue%E4%B8%AD%E7%9A%84mvvm.png)

## Vue 的生命周期

![Vue的生命周期](imgs/VueLifeCycle.png)

### Vue 的生命周期函数

- beforeCreate()
- created()：一般在这里面放一些网络请求
- beforeMount()
- mounted()
- beforeUpdate()
- updated()
- beforeDestroy()
- destroyed() 
  
## 基础语法

### v-bind

用于绑定一个或多个属性值，或者向另一个组件传递 props 值

多用在图片的 src、超链接的 href、动态绑定类和样式等等

也可以使用语法糖 `<a :href="link">`

```html
<div id="app">
  <a v-bind:href="link">Vue官网</a>
  <img v-bind:src="logoUrl" alt="">
</div>

<!-- link 和 logoUrl 都写在 data 里 -->
```

#### 动态绑定 class

- 可以通过 **对象/数组** 来动态绑定（其中数组形式用处较少）
- 动态绑定 class，和普通的 class 声明不冲突
- 如果 class 值过于复杂，可以写在 methods 或者 computed 中

```html
<!DOCTYPE html>
<html lang="en">
  <head><script src="../js/vue.js"></script></head>

  <style>
    .active {
      color: coral
    }
    .line {
      text-decoration: line-through;
    }
  </style>

  <body>
    <div id="app">
      <!-- 这里可以绑定一个对象，从而可以动态控制样式 -->
      <h1 :class="{active: isActive, line: isLine}">你好啊</h1>
      <button @click="change">改变样式</button>
    </div>

    <script>
      const vm = new Vue({
        el: "#app",
        data: {
          isActive: true,
          isLine: true
        },
        methods: {
          change: function() {
            this.isActive = !this.isActive
          }
        }
      });
    </script>
  </body>
</html>
```

上面可以改写成如下格式：将复杂部分单独放到一个方法中

```html
<h1 :class="getClass()">你好啊</h1>
```

```js
// vm.methods 中添加一个函数
getClass: function() {
  return {active: this.isActive, line: this.isLine}
}
```

#### 一个案例：点击 li 中的元素变颜色

```html
<!DOCTYPE html>
<html lang="en">
  <head><meta charset="UTF-8" /><title>Document</title><script src="../js/vue.js"></script></head>
  <style>
    .active {
      color: coral
    }
  </style>

  <body>
    <div id="app">
      <ul>
        <li v-for="(movie, idx) in movies" 
            :class="{'active': curIdx === idx}" 
            @click="change(idx)">
            {{movie}}
        </li>
      </ul>
    </div>

    <script>
      const vm = new Vue({
        el: "#app",
        data: {
          movies: [
            'Interstellar',
            'Seven',
            'Frozen'
          ],
          // 重点就在于这个变量，用来监听当前是第几个元素
          curIdx: 0
        },
        methods: {
          change: function(index) {
            this.curIdx = index
          }
        }
      });
    </script>
  </body>
</html>
```

#### 动态绑定 style

`v-bind:style` or `:style`

```html
<!-- <div :style="{属性名：属性值，属性名：属性值}"></div> -->

<!-- 两种方式都可以，比较习惯驼峰 -->
<!-- '50px' 必须加上单引号，否则会被当做一个变量，就会报错 -->
<div :style="{fontSize: '50px'}">hello world</div>
<div :style="{'font-size': '50px'}">hello world</div>

<!-- 绑定一个变量，然后在 vm.data 中定义 finalSize: '50px' -->
<div :style="{fontSize: finalSize}">Hello world</div>
```

### 计算属性

某些情况下我们需要将数据进行转化后再显示，或者需要将多个数据结合起来进行显示，那么就需要用到计算属性

```js
// 在 HTML 中只要直接插入 {{fullName}} 就可以了，不需要加括号（语法糖）  

const vm = new Vue({
  el: "#app",
  data: {
    firstName: 'Lucy',
    lastName: 'Lee'
  },
  computed: {
    // 既然是计算“属性”，那么起名时尽量不要带动词
    fullName: function() {
      return this.firstName + ' ' + this.lastName
    }
  }
  methods: {}
});
```

计算属性的完整写法中是有 getter 和 setter 的，但是一般不希望别人更改所以都会省略 setter，然后再简写成上面的形式

```js
computed: {
  fullName: {
    set: function() {},
    get: function() {
      return this.firstName + ' ' + this.lastName 
    }
  }
}
```

#### 计算属性的缓存

`computed` 比 `methods` 好的地方在于：当基本属性值没有发生变化时，多次调用计算值只需要计算一次，Vue 内部已经做好了缓存

而 `methods` 则是调用几次，就计算几次。在调用次数多且计算逻辑复杂的情况下就很消耗性能

```js
// {{fullName}}
// {{fullName}}
// {{fullName}}
// {{getFullName()}}
// {{getFullName()}}
// {{getFullName()}}

const vm = new Vue({
  el: "#app",
  data: {
    firstName: 'Lucy',
    lastName: 'Lee'
  },
  computed: {
    fullName: function() {
      console.log('---computed---')
      return this.firstName + ' ' + this.lastName
    }
  },
  methods: {
    getFullName() {
      console.log('---methods---')
      return this.firstName + ' ' + this.lastName
    }
  }
});

// computed
// methods
// methods
// methods
```

### v-on

在 Vue 中使用 `v-on` 来绑定事件监听器，可以简写为 `@`

#### v-on 中的参数

当 `@click` 需要调用函数时，需要注意
- 如果该方法不需要额外参数，那么方法后面的 `()` 可以不添加
- 如果方法本身有一个参数，且在传参时没有传任何东西，也没有写 `()`，那么会默认将原生事件 `event` 参数传递进去
- 如果需要同时传入 **其他参数和 event** 时，可以通过 `$event` 传入事件

```html
<body>
  <div id="app">
    <button @click="btn1Click">按钮1</button>  <!-- btn1Click -->
    <button @click="btn2Click('jojo')">按钮2</button> <!-- jojo -->
    <button @click="btn2Click()">按钮3</button> <!-- undefined -->
    <button @click="btn2Click">按钮4</button> <!-- PointerEvent{} -->
    <button @click="btn3Click">按钮5</button> <!-- PointerEvent{} undefined -->
    <button @click="btn3Click('jojo', $event)">按钮6</button> <!-- jojo PointerEvent{} -->
  </div>

  <script>
    const vm = new Vue({
      el: "#app",
      data: {},
      methods: {
        btn1Click() {
          console.log('btn1Click')
        },
        btn2Click(name) {
          console.log(name);
        }
      },
    });
  </script>
</body>
```

#### v-on 修饰符

在某些情况下，拿到 event 的目的是进行一些事件处理，Vue 提供了一些修饰符来帮组我们方便地处理一些事件

以下是一些常用的修饰符：
- `.stop`：调用 event.stopPropagation() 停止冒泡 
- `.prevent`：调用 event.preventDefault()
- `.{keyCode | keyAlias}`：当事件是由特定键触发时才进行回调
- `.native`：监听组件根元素的原生事件
- `.once`：只触发一次回调

```html
<button @click.stop="btnClick">按钮</button>

<!-- 也可以连着写 -->
<button @click.stop.prevent="btnClick">按钮</button>

<!-- 只有当按下 enter 键的时候才会执行回调函数 -->
<input type="text" @keyup.enter="keyupClick" />
<input type="text" @keyup.13="keyupClick" />
```

### v-if, v-else-if, v-else

逻辑与正常 if 判断一样，可以根据表达式的值在 DOM 中渲染或销毁元素或组件

当判断条件为 false 时，对应的元素以及其子元素不会渲染，也就是根本不会有对应的标签出现在 DOM 中

```html
<h1 v-if="isShow">isShow 为 true 时，显示这里</h1>
<h2 v-else>isShow 为 false 时，显示这里</h2>
```

```html
<p v-if="score>=90">优秀</p>
<p v-else-if="score>=75">良好</p>
<p v-else-if="score>=60">及格</p>
<p v-else>不及格</p>
```

### v-show

同样可以控制节点的显示和隐藏

- `v-show` 控制的是节点的 `display` 属性，隐藏时就是给节点添加 `display: none;`
- `v-if` 则是直接在 DOM 树中删除节点，根本不会渲染

> **如果需要频繁切换 显示/隐藏，那么使用 `v-show` 性能更佳**

### v-for

#### 遍历数组

```html
<!-- 不使用索引值 -->
<ul>
  <li v-for="name in names">"{{name}}</li>
</ul>
```

```html
<!-- 使用索引值 -->
<ul>
  <li v-for="(name, idx) in names">{{idx+1}}. {{name}}</li>
</ul>
```

#### 遍历对象

```html
<!-- 如果只获取一个值，那么拿到的是 value 值 -->
<ul>
  <!-- 拿到的是 jojo 18 female -->
  <li v-for="item in infos">"{{item}}</li>  
</ul>

<!-- 
  infos: {
    name: 'jojo',
    age: 18,
    sex: 'female'
  }
 -->
```

```html
<!-- 获取 key 和 value，(value, key) 注意后面的是 key -->
<ul>
  <li v-for="(value, key) in infos">{{key}}: {{value}}</li>  
</ul>
```

```html
<!-- 获取 key 和 value 和 index， 不常用 -->
<ul>
  <li v-for="(value, key, idx) in infos">{{idx+1}}. {{key}}: {{value}}</li>  
</ul>
```

> **官方推荐使用 `v-for` 时，给对应的元素或者组件添加一个 `:key` 属性**
>
> **根据 Diff 算法，主要是为了更高效地更新虚拟 DOM**

### Diff 算法 :star:

*TODO*

### 数组中哪些方法是响应式的

- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()

通过索引值改变数组中的元素 不是响应式的（注：Vue3 中已经支持了）

可以使用 `Vue.set(修改的对象，修改的元素，修改后的值)` 来进行响应式修改

### v-model

实现 **表单** 元素和数据的双向绑定，也可以用于 `textarea` 元素 

```html
<input type="text" v-model="message">
{{message}}

<!-- 改变 app.message 的值页面也会跟着改变；
同理如果改变输入框中的值，下面显示的 message 也会改变 -->
```

**原理**：其实就是一个语法糖，本质就是下面两个操作
- `v-bind` 绑定一个 `value` 属性
- `v-on` 给当前元素绑定 `input` 事件

```html
<input type="text" v-model="message">

<!-- 等同于 -->

<input type="text" :value="message" @input="message = $event.target.value">
```

```html
<!-- v-model 结合 radio 使用 -->
<!-- 用了 v-model 就不要用 name 来进行单选框的互斥选择了 -->
<input type="radio" value="男" v-model="sex">男
<input type="radio" value="女" v-model="sex">女
<h4>您选择的是： {{sex}}</h4>
```

```html
<!-- v-model 结合 checkbox 多选框 -->
<input type="checkbox" value="篮球" v-model="hobbies">篮球
<input type="checkbox" value="足球" v-model="hobbies">足球
<input type="checkbox" value="网球" v-model="hobbies">网球
<h3>您选择的是：{{hobbies}}</h3>

<!-- vm.data.hobbies: [] -->
```

```html
<!-- v-model 结合 select 单选，不常用 -->
<select name="fruit" v-model="fruit">
  <option value="西瓜">西瓜</option>
  <option value="荔枝">荔枝</option>
  <option value="草莓">草莓</option>
</select>
<h3>您选择的水果是：{{fruit}}</h3>

<!-- v-model 结合 select 多选，不常用 -->
<select name="fruit" v-model="fruit">
  <option value="西瓜">西瓜</option>
  <option value="荔枝">荔枝</option>
  <option value="草莓">草莓</option>
</select>
<h3>您选择的水果是：{{fruit}}</h3>
```

#### 值绑定

[官网中的描述和示例](https://cn.vuejs.org/guide/essentials/forms.html#value-bindings)

对于单选按钮，复选框和选择器选项，`v-model` 绑定的值通常是静态的字符串 (或者对复选框是布尔值)。但有时我们可能希望 **将该值绑定到当前组件实例上的动态数据** 。这可以通过使用 `v-bind` 来实现。

```html
<label v-for="hobby in originHobbies" :for="hobby">
  <input type="checkbox" :value="hobby" v-model="hobbies">{{hobby}}
</label>

<!-- vm.data.originHobbies = ['篮球'， '足球'， '网球'] -->
```

#### v-model 修饰符

- `.lazy` 在每次 change 事件（比如敲回车、失去焦点等）后更新数据，不再随时更新
- `.number` 将用户输入自动转换为数字，而不是默认的字符串
  - 如果该值无法被 `parseFloat()` 处理，那么将返回原始值
  - 会在输入框有 `type="number"` 时自动启用
- `.trim` 去掉用户输入内容两端的空格

## 组件化

组件允许我们将 UI 划分为独立的、可重用的部分，并且可以对每个部分进行单独的思考。在实际应用中，组件常常被组织成层层嵌套的树状结构。

Vue 实现了自己的组件模型，使我们可以在每个组件内封装自定义内容与逻辑

### 组件的使用

- 创建组件构造器 `Vue.extend()`
- 注册组件 `Vue.component()`
- 使用组件（在 Vue 实例的作用范围内）

```html
<body>
  <!-- 注意自定义组件一定要挂载在 一个 Vue 实例下面，也就是 app 这个 div下面 -->
  <div id="app">
    <!-- 重复使用组件 -->
    <mycpn></mycpn>
    <mycpn></mycpn>
  </div>
  <script>
    // 创建组件构造器
    // 这种方式现在基本上不使用了，有更方便的语法糖；但是这种方式是基础
    const ve = Vue.extend({
      // ` `包裹起来的是模板字符串，也就是可以重复使用的部分
      template: `
        <div>
          <h2>我是标题</h2>
          <p>我是内容1111</p>
          <p>我是内容2222</p>
        </div>`
    })
    // 注册组件
    Vue.component('mycpn', ve)
    const vm = new Vue({
      el: "#app",
      data: {},
    });
  </script>
</body>
```

### 全局组件和局部组件

- 按照上面的方法在 `Vue.component()` 注册的是全局组件
- 在某个 Vue 实例中使用 `components` 注册的就是局部组件，只能在该实例关联的元素下面使用

```js
const vm = new Vue({
  el: '#app',
  data:{},
  components: {
    mycpn: ve // 局部组件
  }
});
```

### 父组件和子组件

```html
<body>
  <div id="app">
    <cpn2></cpn2>
  </div>
  <script>
    // 子组件
    const cpn1 = Vue.extend({
      template: `
        <div>
          <h2>我是标题1111</h2>
          <p>我是内容1111</p>
        </div>`
    })
    // 父组件
    const cpn2 = Vue.extend({
      template: `
        <div>
          <h2>我是标题2222</h2>
          <p>我是内容222</p>
          <cpn1></cpn1>
        </div>`,
        // 在父组件内部注册子组件，只能在 cpn2 内使用
        components: {
          cpn1: cpn1
        }
    })
    const vm = new Vue({
      el: "#app",
      data: {},
      components: {
        cpn2: cpn2
      }
    });
  </script>
</body>
```

> **注意：** 子组件不能以标签的形式写在 Vue 实例里

```html
<!-- 这样是不会生效的，因为根本找不到 child-cpn 的注册信息
    除非在 vm 中注册，或者另外注册一个全局组件 -->
<parent-cpn></parent-cpn>
<child-cpn></child-cpn>

<!-- 这种写法也是不会生效的 -->
<parent-cpn>
  <child-cpn></child-cpn>
</parent-cpn>
```

因为当子组件注册到父组件的 components 中时，Vue 会编译好父组件的模块

该模块的内容已经决定了父组件将要渲染的 HTML（相当于父组件中已经有了子组件中的内容了）

那么子标签就是只能在父组件中被识别的（存在组件编译作用域）

### 注册组件的语法糖写法

省略了 `Vue.extend()` 的步骤，都放在一个对象中的 `template` 中

其实底层源码还是放在了 `Vue.extend()` 里面

```html
<body>
  <div id="app">
    <cpn1></cpn1>
    <cpn2></cpn2>
  </div>
  <script>
    // 1. 全局组件
    Vue.component('cpn1', {
      template: 
        `<div>
          <h2>我是全局</h2>
          <p>我是内容1111</p>
        </div>`
    })
    const vm = new Vue({
      el: "#app",
      data: {},
      // 2. 局部组件
      components: {
        cpn2: {
          template: 
          `<div>
            <h2>我是局部</h2>
            <p>我是内容2222</p>
          </div>`
        }
      }
    });
  </script>
</body>
```