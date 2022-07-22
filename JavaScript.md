# JavaScript
JS 包括
- ECMAScript：JS 的核心语法（ES 规范，ECMA-262 标准）
- DOM：Document Object Model，文档对象模型，对网页当中的节点进行增删改的过程都是对 DOM 操作的过程。HTML 文档被当做一棵 DOM 树来看待。
- BOM：Browser Object Model，浏览器对象模型。关闭浏览器窗口、打开一个新的浏览器窗口、后退、前进、浏览器地址栏上的地址等进行操作都是 BOM 编程。

## DOM 和 BOM 的区别
- BOM 的顶级对象是：window；DOM 的顶级对象是：document；实际上 BOM 是包括 DOM 的。

## 变量

- 变量只声明不赋值 -- 返回 `undefined`
- 变量不声明不赋值 -- 返回 `error`
- 变量不声明直接复制 -- 返回变量值 （不推荐）
- **不要用 `name` 作为变量名，是 JS 的内置变量，但是 `Name` 可以**

```js
// boolean型参与加法运算
true + 1	// 2
false + 1	// 1
true + null // 1

var v = undefined;
v + 1		// NaN

// 任何数据类型和字符串相加都会变成字符串
v + 'jojo'	// undefinedjojo
var n = null;
n + 'jojo'	//nulljojo
```

- 任何变量，如果不加 `var` 进行定义，那么就是全局的。如果在函数内部用 var 定义一个变量那么它就是局部变量，否则就是全局变量

## 数据类型

- 原始类型：Number、String、Boolean、Undefined、Null
- 引用类型：Object

【注】Undefined 类型只有一个值，就是 undefined；**NaN 属于 Number 类型**

### String 类型

> **str.substr() 和 str.substring() 的区别**

str.substr(startIdx, length)

str.substring(startIdx, endIdx) 且不包含 endIdx

### Object 类型

Object 类是所有类型的超类，自定义的任何类型都默认继承 Object

- 属性：`prototype（常用）` 和 `constructor`

可以通过 `prototype` 属性来给类动态扩展属性以及函数

```js
Student.prototype.getEmail = function() {
    return this.email
}
```

- 函数：`toString()` `valueOf()` `toLocaleString()`


## 函数
对于 JS 来说，如果定义两个名字相同的函数，那么后声明的函数会覆盖前一个的声明

```js
var test = function() {
    alert("test")
}
var test = function(){
    alert("tettetetetetetetetest")
}
test()  // 弹出tettetetetetetetetest
```

### 回调函数 callback
回调函数的特点是：自己把函数写出来之后，不是由自己负责调用而是由其他程序负责调用该函数

```html
// 将sayHello函数注册到按钮上，等待click事件发生后，该函数被浏览器调用。我们称sayHello函数为回调函数
<input type = "button" onclick = "sayHello" />
```

### eval 函数
> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval

`eval` 函数的作用是：将字符串当做一段 JS 代码解释并执行

```js
window.eval("var i = 100;")
alert("i = " + i)   // 结果：弹出 i = 100
```

```js
// java连接数据库，查询数据之后，将返回数据以json字符串返回给浏览器，还不是一个json对象，可以使用eval函数，将json字符串穿换成json对象
var fromJava = "{\"name\": \"zhangsan\", \"pwd\": \"124\"}"
window.eval("var jsonObj = " + fromJava)
alert(jsonObj.name + ", " + jsonObj.pwd)
```

**永远不要使用 eval 函数，存在一个非常好的 eval 替代方法：只需使用 `window.Function`**

## 关于 JS 代码的执行顺序
```html
<!-- 如果按照下面这种将script写在input前面的写法，那么运行时会报错。
因为代码是从上往下运行的，当运行到getElementById时并找不到id为myBtn的按钮 -->
<!-- Uncaught TypeError: Cannot set properties of null (setting 'onclick') -->
<body>
    <script type="text/javascript">
        document.getElementById("myBtn").onclick = function() {
            alert("this is my button.")
        }
    </script>

    <input type="button" value="btn1" id="myBtn" />
</body>
```

想要实现就需要使用 `load` 事件

`load` 事件什么时候发生？当**页面元素全部加载完毕之后**才会发生。

```html
<body onload="ready()">
    <script type='text/javascript'>
        function ready() {
            document.getElementById("myBtn").onclick = function () {
                alert("this is my button.")
            }
        }
    </script>
    <input type="button" value="btn1" id="myBtn" />
</body>

<!-- 或者 -->

<body>
    <script type='text/javascript'>
        window.onload = function() {
            document.getElementById("myBtn").onclick = function() {
                alert("this is my button...")
            }
        }
    </script>
    <input type="button" value="333333" id="myBtn" />
</body>
```

## 关于 void 运算符
`void` 运算符对给定的表达式进行求值，然后**返回 `undefined`**

void 运算符通常只用于获取 undefined 的原始值，一般使用 `void(0)（等同于void 0）`。在上述情况中，也可以使用全局变量 undefined 来代替（假定其仍是默认值）

```html
<!-- 假设现在需要实现一个超链接的效果，点击超链接后弹出相应内容，但是页面不进行跳转
     必须加上javascript: ，如果不加会默认当成一个路径，则会报错 Cannot GET /html-code/void(0)
     同样，使用 javascript:undefined 是一样的效果
     甚至，使用 js:void(0) 也是一样的效果-->
<body>
    <a href="javascript:void(0)" onclick="alert('ddddddd.......')">这是一个超链接</a>
</body>
```

## 有哪些方法可以通过浏览器向服务器发请求？
1. 直接在浏览器地址栏输入 URL 然后回车
2. 表单 form 的提交 form.submit
3. 超链接
4. document.location (.href可省略)
5. window.location.href (.href可省略)
6. window.open("url")

以上所有的请求方式均可以携带数据给服务器，但只有表单提交的数据是动态的

## JSON
JavaScript Object Notation(JavaScript对象标记)

- 一种标准的轻量级数据交换格式。体积小，易解析。
- 在实际开发中有两种数据交换格式：JSON 和 XML。XML 体积较大解析麻烦，但其优点是语法严谨。

## ES6
> [ES6从入门到精通系列(全23讲)](https://www.bilibili.com/video/BV1ay4y1r78B?spm_id_from=333.337.search-card.all.click&vd_source=c727c2934b167656e7856cce64cc7eb5)

