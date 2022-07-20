*TODO*

1. 如何理解 JS 是单线程的？既然是单线程的那如何实现异步操作呢？
2. JS 渲染顺序
3. hook
4. 虚拟dom
5. SEO(next.js nuxt.js)
   1. 自定义SEO优化
6. Vue和React的区别
7. 微数据结构化   schema.org
8. axios原理源码
9.  html5的新特性（web worker的作用，应用场景
10. 语义化的好处
11. canvas的常用api
12. 重绘回流，对事件响应机制的影响
13. localStorage和sessionStorage
14. flex布局
15. rem和em的区别
16. 原型链
17. 闭包
18. js不同类型的存储方式
19. call apply 和bind的区别
20. js判断类型的方式（typeof  instanceof    Object.prototype.toString.call()可以判断所有的数据类型
21. 深拷贝浅拷贝**手写深拷贝**
22. 如何判断环引用
23. ES6(Promise  async await)
24. computed和watch的区别
25. vue生命周期
26. 0.1+0.2为什么不等于0.3
27. let const var的区别
28. 箭头函数和普通函数的区别
29. **手写event bus**
30. **手写bind**
31. **手写Promise**
32. **手写快排**
33. **JS 运行机制，eventloop，遇到fetch setInterval setTimeout等异步操作怎么办，遇到async await promise等异步操作怎么办**
34. 防抖和节流
35. 网页性能优化
36. 浏览器循环机制
37. SPA
38. 前端路由
39. 脱离文档流
40. cookie session token 原理
41. 事件冒泡和捕获
42. e.target e.currentTarget区别
43. 如何实现跨域，为什么要有跨域
44. 类选择器和伪类的区别和优先级，各种选择器的优先级
45. 如何开启动画加速
46. 变量提升
47. 宏任务微任务
48. JS中数组长度为什么能任意变化（如何扩容
49. html中js和css的加载顺序会阻塞页面渲染吗
50. websocket的好处，如何建立连接，心跳机制怎么做，错误如何处理
51. websocket和轮询的区别
52. [运行npm run xxx时发生了什么](https://mp.weixin.qq.com/s?__biz=Mzk0NTI2NDgxNQ==&mid=2247485707&idx=1&sn=6534a8bf944b6600167fa24d6e109d29&chksm=c31948cbf46ec1dd9eb96ee9dbb62fac23ed6a5416d162e2be77c55d0e7fd46c4efdaf8baf40&scene=132#wechat_redirect) 
53. 


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