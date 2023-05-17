*TODO*

> 学成在线案例还没做

1. 如何理解 JS 是单线程的？既然是单线程的那如何实现异步操作呢？
2. JS 渲染顺序
3. hook
4. 虚拟dom
5. SEO(next.js nuxt.js)
   1. 自定义SEO优化
6. Vue和React的区别
7. 微数据结构化   schema.org
8. axios原理源码
9. html5的新特性（web worker的作用，应用场景
10. 语义化的好处
11. canvas的常用api
12. - [x] 重绘回流，对事件响应机制的影响
13. localStorage和sessionStorage
14. - [x] flex布局
15. rem和em的区别=
16. 原型链
17. 闭包
18. js不同类型的存储方式
19. call apply 和bind的区别
20. js判断类型的方式（typeof  instanceof  Object.prototype.toString.call()可以判断所有的数据类型
21. **手写 instanceof**
22. 深拷贝浅拷贝**手写深拷贝**，object.assign和扩展运算法是深拷贝还是浅拷贝，两者区别
23. 如何判断环引用
24. ES6新特性
25. computed和watch的区别
26. vue生命周期
27. - [x] 0.1 + 0.2为什么不等于0.3
28. - [x] let const var的区别
29. 箭头函数和普通函数的区别
30. 箭头函数中this的指向问题
31. **手写event bus**
32. **手写bind**
33. **手写Promise**
34. **手写快排**
35. 防抖 debouce 和节流 throttle
36. 网页性能优化
37. SPA
38. 前端路由
39. 脱离文档流
40. cookie session token 原理
41. 事件冒泡和捕获
42. e.target e.currentTarget区别
43. 如何实现跨域，为什么要有跨域
44. 类选择器和伪类的区别和优先级，各种选择器的优先级
45. 如何开启动画加速
46. - [x] 变量提升
    1.  严格意义上说 let 也存在变量提升，怎么说（从底层看，词法环境/变量环境 + 执行上下文，暂时性死区）
47. **JS 运行机制，eventloop**
    1. - [x] 宏任务微任务
    2. - [x] 事件循环
    3. - [x] 遇到 fetch setInterval setTimeout 怎么办
    4. - [ ] 遇到 async await promise 怎么办
48. JS中数组长度为什么能任意变化（如何扩容
49. html中js和css的加载顺序会阻塞页面渲染吗
50. websocket的好处，如何建立连接，心跳机制怎么做，错误如何处理
51. websocket和轮询的区别
52. [运行npm run xxx时发生了什么](https://mp.weixin.qq.com/s?__biz=Mzk0NTI2NDgxNQ==&mid=2247485707&idx=1&sn=6534a8bf944b6600167fa24d6e109d29&chksm=c31948cbf46ec1dd9eb96ee9dbb62fac23ed6a5416d162e2be77c55d0e7fd46c4efdaf8baf40&scene=132#wechat_redirect) 
53. new 一个对象的过程
54. stringify的用法 
55. 白屏原因 & 优化 
56. `<button></button>` 和 `<input type="button">` 的区别
57. Function instanceof Object 和 Object instanceof  Function 的结果分别是什么，为什么
58. 性能优化要有数据支撑
    1.  FP/FCP/TTI/首屏时间/白屏时间/白屏率
    2.  手段：懒加载，防抖节流，图片压缩，webpack 分包，页面渲染……
    3.  组件化，模块化（都是工程化的东西，都是为了提高开发效率）
59. reduce() 去重
60. promise 中 catch() 和 finally() 执行的问题（尤其是 promise 嵌套情况下）
61. HTML 中可以异步执行的两个属性（defer 和 async）有什么区别
62. sass 和 less 配置 loader 要注意什么
63. href 和 src 的区别
64. Vue 的核心问题就是 **数据劫持 和 模板编译**
65. 垃圾回收的意义
66. 循环引用什么意思？现代浏览器中循环引用为什么不会出问题了？（V8 没有引用计数了，都是标记清除法了）
67. 强引用和弱引用对垃圾回收的影响有什么
68. pnpm + monorepo 性能优化可能有用
69. promise是为了解决什么问题，好处和坏处是什么
70. 浏览器输入地址到页面渲染发生了什么
71. 什么是对称加密，什么是非对称加密，为什么 HTTPS 要有两种加密方式
    1.  刚才说到 GPU 进程，为什么要用 GPU 进程绘制呢
72. HTTP2 为什么可以并发多个请求，HTTP1 有什么问题
73. `z-index` 的计算规则是什么
74. 性能优化怎么做，采集了哪些指标
    1.  PV UV 多少
    2.  怎么计算首屏加载时间，它的加载事件与 Lighthouse 中哪些指标想关
75.  SDK 架构怎么设计的，插件架构怎么实现的
76.  如何进行故障排查呢
77. 遇到过哪些浏览器安全问题 CSRF XSS
78. 如何生成 CSRF token
79. 浏览器缓存
80. 恢复对 samesite cookie 的强制开启
81. bilibili 蒙版弹幕，如何实时生成蒙版
82. 前端监控怎么做
83. 举例说明数据驱动开发，

## VUE 面试题

> Vue2 和 3.x 的区别

Vue2 虽然实现了低耦合，但是因为采用的是 Options API 的方式，即数据处理都在 data，computed 里，方法都在 methods 中，所以聚合性不是很强

Vue3 中采用 Composition API，可以提供给我们更多的可能性自己封装自己的方法

> Vue 中的 filter 在项目中的应用（自己想的）

[参考视频](https://www.bilibili.com/video/BV1uK4y1x7pa/?spm_id_from=333.999.0.0&vd_source=c727c2934b167656e7856cce64cc7eb5)

获取日志的方式不同，可以给每条日志加上 tag 标识获取方式

然后在查询时，就可以使用 filter 来过滤不同方式获取的日志，从而进行不同的操作

也可以使用 1234 来表示不同的获取方式，然后利用 filter 来根据不同的数字显示不同的中文，只需要在使用插值语法时加入过滤器就可以了

同样，也可以根据，不同的状态设置不同的样式，只需要在绑定样式 `:class` 时添加过滤器就可以了

## 解答

**重点！！！**
```html
<!-- 涉及闭包，异步任务，任务队列，宏任务微任务，event loop， var 的作用域提升 -->
<script type='text/javascript'>
      window.onload = function() {
         // var存在作用域提升。如果这里用let定义i，那么就会出现 not defined 的错误了。但是仍然会输出0 1 2 3 4
         for(var i = 0; i < 5; i ++){

            
             setTimeout(function(){
                  console.log(i++);
              }, 4000)
            }
         console.log(i);
       }
 </script>
 <!-- 结果输出 5 5 6 7 8 9 -->
```
```html
 <!-- 如果想要输出5 0 1 2 3 4 那么要如何修改呢 -->
 <!-- 涉及立即执行函数 -->
 <script type="text/javascript">
   for(var i = 0; i < 5; i ++) {
      (function(x) {
         setTimeout(function() {
            console.log(x++)
         }, 4000)
      })(i)
   }
   console.log(i);
</script>
```

### 23. Promise async await

> https://www.bilibili.com/video/BV1WP4y187Tu?spm_id_from=333.337.search-card.all.click&vd_source=c727c2934b167656e7856cce64cc7eb5

### 27. var let const 的区别

|     | 重复定义 | 修改值 | 声明提升 | 块级作用域 | 循环 |
| :-: | :-:  |  :-: | :-: | :-: | :-: |
| var  | 可以 | 可以 | 会 | 严格来说不支持<br/>（function可以） | 可以<br/>（注意闭包问题） |
| let  | 不可以 | 可以 | 不会 | 支持 | 可以 | 
| const  | 不可以 | 不可以（除了数组和对象） | 不会 | 支持 | 不可以 | 

### 53. JSON.stringify() 的用法

> https://www.bilibili.com/video/BV16N4y1G7gv?spm_id_from=333.1007.tianma.1-1-1.click&vd_source=c727c2934b167656e7856cce64cc7eb5
> 
## 遇到过最有挑战性的问题是什么，你是怎么解决的？

- localstorage里面利用true/false判断会永远判断为true，需要转换为用1/0来判断。
在localstorage中存储的boolean数据都变成了字符串了，才导致的。
所以"true"=true及"false"==false,“true”==false显示都为false。


- 从后端拿到数据后，但是不能正确显示，表单中数据不存在（浏览器设置了自动翻译）
[你碰到过那些有趣的 bug ?](https://www.zhihu.com/question/49864093/answer/2618721557)

