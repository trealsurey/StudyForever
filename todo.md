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
29. 箭头函数中this的指向问题
30. **手写event bus**
31. **手写bind**
32. **手写Promise**
33. **手写快排**
34. **JS 运行机制，eventloop，遇到fetch setInterval setTimeout等异步操作怎么办，遇到async await promise等异步操作怎么办**
35. 防抖和节流
36. 网页性能优化
37. 浏览器循环机制
38. SPA
39. 前端路由
40. 脱离文档流
41. cookie session token 原理
42. 事件冒泡和捕获
43. e.target e.currentTarget区别
44. 如何实现跨域，为什么要有跨域
45. 类选择器和伪类的区别和优先级，各种选择器的优先级
46. 如何开启动画加速
47. 变量提升
48. 宏任务微任务
49. JS中数组长度为什么能任意变化（如何扩容
50. html中js和css的加载顺序会阻塞页面渲染吗
51. websocket的好处，如何建立连接，心跳机制怎么做，错误如何处理
52. websocket和轮询的区别
53. [运行npm run xxx时发生了什么](https://mp.weixin.qq.com/s?__biz=Mzk0NTI2NDgxNQ==&mid=2247485707&idx=1&sn=6534a8bf944b6600167fa24d6e109d29&chksm=c31948cbf46ec1dd9eb96ee9dbb62fac23ed6a5416d162e2be77c55d0e7fd46c4efdaf8baf40&scene=132#wechat_redirect) 
54. stringify的用法 


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

> https://www.bilibili.com/video/BV1qk4y1k75W/?spm_id_from=pageDriver&vd_source=c727c2934b167656e7856cce64cc7eb5

|     | 重复定义 | 修改值 | 声明提升 | 块级作用域 | 循环
| :-: | :-:  |  :-: | :-: | :-: | :-: |
| var  | 可以 | 可以 | 会 | 严格来说不支持<br/>（function可以） | 可以<br/>（注意闭包问题） |
| let  | 不可以 | 可以 | 不会 | 支持 | 可以 | 
| const  | 不可以 | 不可以（除了数组和对象） | 不会 | 支持 | 不可以 | 

### 53. JSON.stringify() 的用法

> https://www.bilibili.com/video/BV16N4y1G7gv?spm_id_from=333.1007.tianma.1-1-1.click&vd_source=c727c2934b167656e7856cce64cc7eb5

## 算法题
[剑指 Offer II 029. 排序的循环链表](https://leetcode.cn/problems/4ueAj6/)

[反转链表](https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof/)

## 遇到过最有挑战性的问题是什么，你是怎么解决的？
- localstorage里面利用true/false判断会永远判断为true，需要转换为用1/0来判断。
在localstorage中存储的boolean数据都变成了字符串了，才导致的。
所以"true"=true及"false"==false,“true”==false显示都为false。


- 从后端拿到数据后，但是不能正确显示，表单中数据不存在（浏览器设置了自动翻译）
https://www.zhihu.com/question/49864093/answer/2618721557