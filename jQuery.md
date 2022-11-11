# jQuery

![jQueryLogo](./imgs/jQueryLogo.png)

jQuery 是一个快速、简洁的 JavaScript 库，其设计的宗旨是 write Less , Do More.即倡导写更少的代码，做更多的事情

jQuery 出现的目的是加快前端人员的开发速度，我们可以非常方便的调用和使用它，从而提高开发效率

j 就是 JavaScript；Query 查询；意思就是查询 JS，把 JS 中的 DOM 操作做了封装，我们可以快速的查询使用里面的功能

jQuery 封装了 JavaScript 常用的功能代码，优化了 DOM 操作、事件处理、动画设计和 Ajax 交互

学习 jQuery 本质∶就是学习调用这些函数（方法）

**jQuery 的优点**

- 轻量级。核心文件才几十 KB，不会影响页面加载速度
- 跨浏览器兼容。基本兼容了现在主流的浏览器
- 链式编程、隐式迭代
- 对事件、样式、动画支持，人大简化了 DOM 操作
- 支持插件扩展开发。有着丰富的第三方的插件，例：树形菜单、日期控件、轮播图等
- 免费、开源

## 下载与使用

[jQuery 官网](https://jquery.com)

1x 2x 版本官网不再更新，3x 是官方主要更新维护的版本

将下载好的 JS 脚本引入 HTML 即可

### 入口函数

```js
$(function() {
    // 此处是页面 DOM 加载完成的入口
})
```
或者
```js
$(document).ready(function() {
    // 此处是页面 DOM 加载完成的入口
})
```

- 等 DOM 结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，jQuery 帮我们完成了封装
- 相当于原生 JS 中的 `DOMContentLoaded`
- 不同于原生 JS 中的 `load` 事件是等页面文档、外部的 JS 文件、css 文件、图片加载完毕才执行内部代码
- 更推荐使用第一种方式

### 顶级对象 `$` 

`$` 是 jQuery 的别称，在代码中可以使用 jQuery 代替 `$`，但一般为了方便，通常都直接使用 `$`

`$` 是 jQuery 的顶级对象，相当于原生 JavaScript 中的 `window`。把元素利用 `$` 包装成 jQuery 对象，就可以调用 jQuery 的方法

## jQuery 对象和 DOM 对象

原生 JS 获取的对象就是 DOM 对象，jQuery 方法获取的就是 jQuery 对象

jQuery 对象本质：通过 `$` 把 DOM 元素进行了包装，返回的形式是伪数组。`$('div')` 就是一个 jQuery 对象

jQuery 对象只能使用 jQuery 方法，DOM 对象则使用原生的 JS 属性和方法；DOM 对象不能使用 jQuery 里面的 `hide` 等方法，jQuery 对象也不能使用原生 JS 的属性和方法

DOM 对象与 jQuery 对象之间可以相互转换

DOM 对象转为 jQuery 对象

```js
$('div')
```

jQuery 对象是一种伪数组的形式，可通过索引转换为 DOM 对象

```js
// $('DOM对象')[index]
$('div')[0] 

// or

// $('DOM对象').get(index)
$('div').get(0)
```

## 常用 API

