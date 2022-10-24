# JavaScript
JS 包括
- ECMAScript：JS 的核心语法（ES 规范，ECMA-262 标准）
- DOM：Document Object Model，文档对象模型，对网页当中的节点进行增删改的过程都是对 DOM 操作的过程。HTML 文档被当做一棵 DOM 树来看待。
- BOM：Browser Object Model，浏览器对象模型。关闭浏览器窗口、打开一个新的浏览器窗口、后退、前进、浏览器地址栏上的地址等进行操作都是 BOM 编程。

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

## 数组

### 添加删除数组元素

| 方法名 | 说明 | 返回值 |
| :---: | :---: | :---: |
| push(arg1,...) | 末尾添加一个或多个元素 | 返回新的长度 | 
| pop() | 删除数组最后一个元素，数组长度减 1，无参数，修改了原数组 | 返回所删除元素的值 |
| unshift() | 向数组的开头添加一个或多个元素，修改了原数组	| 返回新的长度 |
| shift() | 删除数组的第一个元素，数组长度减 1，无参数，修改了原数组 | 返回第一个元素的值 |

### 数组排序
| 方法名 | 说明 | 是否修改原数组 |
| :---: | :---: | :---: |
| reverse() | 颠倒数组中的元素顺序，无参数 | 改变原数组，返回新数组 | 
| sort() | 对数组元素进行排序 | 改变原数组，返回新数组 |

**注意：**
sort 方法对数组进行原地排序，但是默认**按照字典序排序**。需要传入一个比较函数 `cmp(a, b)`，然后得到我们需要的排序效果。

```js
let arr = [1, 4, 17, 12, 9];

arr.sort();
console.log(arr); // [ 1, 12, 17, 4, 9 ]

let cmp = (a, b) => a - b;

arr.sort(cmp);
console.log(arr); // [ 1, 4, 9, 12, 17 ]

// 其中，let cmp = (a, b) => a - b; 为升序，b - a 为降序。
```

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

## 作用域
通常来说，一段程序代码中所用到的名字并不总是有效和可用的，而限定这个名字的可用性的代码范围就是这个名字的作用域。作用域的使用提高 程序逻辑的局部性，增强了程序的可靠性，减少了名字冲突。

### 全局变量和局部变量的区别
- **全局变量**：在任何一个地方都可以使用，只有在浏览器关闭时才会被销毁，因此比较占内存
- **局部变量**：只在函数内部使用，当其所在的代码块被执行时，会被初始化；当代码块运行结束后，就会被销毁，因此更节省内存空间

### 作用域链

[深入浅出图解作用域链和闭包](https://segmentfault.com/a/1190000019275094)

内部函数访问外部函数的变量，采取链式查找的方式，采用**就近原则**

```js
var f1 = function() {
    var num = 123;
    var f2 = function() {
        console.log(num);
    }
    f2()
}
var num = 456;
f1()
```

## 预解析
JS 代码是由浏览器中的 JS 解析器来执行的。解析器在运行 JS 代码的时候分为两步：预解析和代码执行

其中**预解析**会把 JS 中所有的 var 和 function 提升到当前作用域的最前面。
- 变量提升/变量预解析：把所有的变量声明提升到**当前作用域**的最前面，不提升赋值操作
- 函数提升/函数预解析：把所有的函数声明提升到**当前作用域**的最前面，不调用函数

```js
/* case 1 */
console.log(num)

// 报错：Uncaught ReferenceError: num is not defined
```

```js
/* case 2 */
console.log(num)
var num = 10;

// 输出：undefined

/*
    JS 预解析会将第二行的 var num 提升到当前作用域的最前面，
    但是只提升变量声明，不提升赋值，即相当于下面的代码：
    var num
    console.log(num)
    num = 10
    所以会输出undefined
*/
```

```js
/* case 3 */
f1()
function f1() {
    console.log(11)
}

// 输出：11
```

```js
/* case 4 */
f2()
var f2 = function() {
    console.log(22)
}

// 报错：Uncaught TypeError: f2 is not a function

/*
    JS 预解析会将第二行的 var 提升到当前作用域的最前面，
    但是只提升变量声明，不提升赋值，即相当于下面的代码：
    var f2
    f2()
    f2 = function(){}
    所以会报错
*/
```

### 函数预编译的步骤
函数预编译，发生在函数执行的前一刻。

1. 创建 AO 对象。AO 即 Activation Object 活跃对象，其实就是「执行期上下文」。
2. 找形参和变量声明，将形参名和变量作为 AO 的属性名，值为 undefined。
3. 将实参值和形参统一，实参的值赋给形参。
4. 查找函数声明，函数名作为 AO 对象的属性名，值为整个函数体。

### 一个例子
```js
f1();
console.log(c);
console.log(b);
console.log(a);
function f1() {
    var a = b = c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
// 输出： 9 9 9 9 9 报错：a is not defined
```

注意：
`var a = b = c = 9` 相当于 `var a = 9; b = 9; c = 9;` 也就是 **b 和 c 是全局变量**

如果想要集体声明，正确写法 `var a = 9, b = 9, c = 9` 就相当于 `var a = 9; var b = 9; var c = 9;` 就是三个局部变量了

所以只会报错 `a is not defined`

## 对象

### 创建对象的三种方式

```js
var obj = {
    name: 'wyx',
    age: 1,
    hi: function(){
        console.log('hello world')
    }
}
```

```js
var obj = new Object()
obj.name = 'wyx'
obj.age = 1
obj.hi = function() {
    console.log('hello world')
}
```

```js
function ObjConstructor(name, age)  {
    this.name = name
    this.age = age
}

var wyx = new ObjConstructor('wyx', 1)
```

## 内置对象

### Math

#### Math 常用方法
- `Math.PI` 圆周率
- `Math.floor()` 向下取整
- `Math.ceil()` 向上取整
- `Math.round()` 
- `Math.abs()` 绝对值
- `Math.max()`
- `Math.min()`

#### Math.random()
返回一个位于区间 [0, 1) 之间的伪随机浮点数

获取闭区间 [a, b] 之间的整数
```js
let ran = parseInt(Math.random() * (b - a + 1)) + a;
```

获取 [a, b) 之间的整数
```js
let ran = parseInt(Math.random() * (b - a)) + a;
```

随机点名实现
```js
function getRandom2(a, b) {
return parseInt(Math.random() * (b - a + 1)) + a;
}

let names = new Array('Peter', 'Murphy', 'Jack', 'Darcy', 'Alice');
console.log(names[getRandom2(0, names.length-1)]);
```

### Date

#### 一般格式
```js
let date = new Date();

let date3 = new Date('2019-10-1 10:10:10');
let date4 = new Date('2019/10/1');
```

#### 常用格式
```js
let date = new Date();
console.log(date.getFullYear()); // 2022
console.log(date.getMonth() + 1); // 10，注意得到的月份要加 1
console.log(date.getDate()); // 13
console.log(date.getDay()); // 4 星期四
```

#### 时分秒
```js
function getTime() { {
        return t < 10 ? '0' + t : t;
    }
    [h, m, s] = [che
    let time = new Date();
    let h, m, s;
    [h, m, s] = [time.getHours(), time.getMinutes(), time.getSeconds()]
    function check(t)ck(h), check(m), check(s)];
    return h + ':' + m  + ':' +s;
}
console.log(getTime());
```

#### 时间戳
获取 1971 年 1 月 1 日至今过去的毫秒数

```js
let date = new Date();
console.log(date)
console.log(date.valueOf())
console.log(date.getTime())

let d = +new Date() // 要记住这个
console.log(d)

let date2 = Date.now()
console.log('date2 ==== ' + date2)

/*
Thu Oct 13 2022 16:05:26 GMT+0800 (中国标准时间)
1665648326770
1665648326770
1665648326770
date2 ==== 1665648326770
*/
```

如何制作一个倒计时呢？利用时间戳就可以实现：期望的时间减掉现在的时间就是需要的总毫秒数 time /= 1000 就是秒数

```js
d = parseInt(time / 60 / 60 / 24)   // 计算天数
d = parseInt(time / 60 / 60 % 24)   // 计算小时
d = parseInt(time / 60 % 60)   // 计算分钟
d = parseInt(time % 60)   // 计算当前秒数
```

## DOM
文档对象模型（Document Object Model，简称 DOM )，是 W3C 组织推荐的处理可扩展标记语言（HTML 或者 XML）的标准编程接口。

W3C 已经定义了一系列的 DOM 接口，通过这些 DOM 接口可以改变网页的内容、结构和样式。

DOM 树包括
- 文档：一个页面就是一个文档，DOM中使用 `document` 表示
- 元素：页面中的所有标签都是元素，DOM中使用 `element` 表示
- 节点：网页中的所有内容都是节点（标签、属性、文本、注释等），DOM 中使用 `node` 表示

以上内容都称之为对象

### 使用 DOM 获取元素

- document.getElementById()
- document.getElementsByTagName()
- element.getElementsByTagName()

下面三个方法是 HTML5 新增的方法
- document.getElementsByClassName()
- document.querySelector('选择器')： 只返回第一个
- document.querySelectorAll('选择器')

获取特殊元素
- `document.body` 获取 body 元素
- `document.documentElement` 获取 html 元素

### 改变元素内容

#### innerHTML & innerText

- innerHTML
  - 从起始位置到终止位置的全部内容，包括 html 表现，同时保留空格和换行
  - **W3C 推荐使用**
- innerText
  - 从起始位置到终止位置的内容，但它不识别 html 标签，同时空格和换行也会去掉
  - （存疑？vscode测试也会保留空格和换行）

#### 表单元素
利用DOM 可以操控一下表单元素的属性
- type
- value
- checked
- selected
- disabled

#### 样式属性
通过JS修改元素的大小、颜色、位置等样式
- `element.style` 行内样式操作
- `element.className` 类名操作

```js
var div = document.querySelector('div')

div.onclick = function() {
    // 点击 div 就会改变背景颜色
    this.style.backgroundColor = 'lightcoral'
    // 点击 div 就会修改类名
    this.className = 'header'
}
```
**注意：**
1. JS 中的样式要采用驼峰命名法，如上面例子中的 `backgroundColor`，如果写成 `background-color` 就会报错
2. 在 JS 中通过 `.style` 修改的样式是 **行内样式**，权重很高，会覆盖掉 `<style>` 标签中的样式
3. 如果修改样式较多，可以选择直接修改类类名的方式
4. `class` 是一个保留字，所以使用 `className` 来操作元素类名

### 排他思想
如果有同一组元素，我们想要某一个元素实现某种样式，需要用到循环的排他思想算法：

1. 所有元素全部清除样式（干掉其他人）
2. 给当前元素设置样式（留下我自己）
3. 注意顺序不能颠倒，首先干掉其他人，再设置自己。

```js
 const btns = document.getElementsByTagName('button');
    for (let i = 0; i < btns.length; i++) {
        btns[i].onclick = function () {
            for (let j = 0; j < btns.length; j++) {
                btns[j].style.backgroundColor = '';
            }
            this.style.backgroundColor = 'pink';
        }
    }
``` 

### 表格中的全选功能
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>表格全选</title>
    <link rel="stylesheet" href="../css/style.css" />
  </head>

  <style>
    * {
      margin: 0;
      padding: 0;
    }
    table {
      margin: 0 auto;
      margin-top: 300px;
      text-align: center;
      border-collapse: collapse;
    }
    td {
      border: 2px solid lightblue;
      border-spacing: 0;
      width: 150px;
    }
  </style>

  <body>
    <table class="tab">
      <thead>
        <tr>
          <th>
            <input type="checkbox" class="selectAll" />
            全选
          </th>
          <th>名称</th>
          <th>价格</th>
        </tr>
      </thead>
      <tbody class="tb">
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>apple pencil</td>
          <td>800</td>
        </tr>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>apple watch</td>
          <td>2000</td>
        </tr>
      </tbody>
    </table>
  </body>

  <script>
    var all = document.querySelector(".selectAll");
    var tabs = document.querySelector(".tb").querySelectorAll("input");

    all.onclick = () => {
      for (var i = 0; i < tabs.length; i++) {
        tabs[i].checked = all.checked;
      }
    };

    for (var i = 0; i < tabs.length; i++) {
      tabs[i].onclick = function () {
        var flag = true;
        for (var i = 0; i < tabs.length; i++) {
          if (!tabs[i].checked) {
            flag = false;
            break;
          }
        }
        all.checked = flag;
      };
    }
  </script>
</html>
```

### 自定义属性
#### 获取属性值
- `element.属性` 主要获取内置属性值
- `element.getAttribute()` 主要用来获得自定义属性

#### 设置属性值
- `element.属性 = xxx`
- `element.setAttribute('属性', '值')` 主要针对自定义属性

#### 通过data规定自定义属性
自定义属性目的：为了保存并使用数据。有些数据可以保存到页面中而不用保存到数据库中

但有些自定义属性容易引起歧义，所以在 H5 中新增了自定义属性

规定使用 `data-` 开头作为属性名并且赋值

```css
<div data-index="1"></div>
```

同时 H5 新增 `element.dataset.index` 或者 `element.dataset['index']` 新增或者获取自定义属性，并且从 IE11 后才开始支持

如果自定义属性中有多个 - 连接的单词，获取时采用驼峰命名法 

#### 移除属性

`element.removeAttribute('属性')`

### 节点操作


## 事件

三要素：
- 事件源：事件被触发的对象（按钮）
- 事件类型：如何触发、什么事件（点击按钮）
- 事件处理程序：可通过一个函数赋值的方式实现

### 常见鼠标事件

- `onclick` 鼠标点击左键触发
- `onmouseover` 鼠标经过触发
- `onmouseout` 鼠标离开触发
- `onfocus` 获得焦点触发
- `onblur` 失去焦点触发
- `onmousemove` 鼠标移动触发
- `onmouseup` 鼠标弹起触发
- `onmousedown` 鼠标按下触发

## DOM 和 BOM 的区别
- BOM 的顶级对象是：`window`；DOM 的顶级对象是：`document`；实际上 BOM 是包括 DOM 的。

## 关于 JS 代码的执行顺序

[javascript引擎执行的过程的理解--执行阶段，有关宏任务和微任务](https://segmentfault.com/a/1190000018134157)

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
[ES6从入门到精通系列(全23讲)](https://www.bilibili.com/video/BV1ay4y1r78B?spm_id_from=333.337.search-card.all.click&vd_source=c727c2934b167656e7856cce64cc7eb5)

## var let const 区别

 [蛋老师讲解三者区别](https://www.bilibili.com/video/BV1qk4y1k75W/?spm_id_from=333.337.search-card.all.click)

ES6 以前，JS 没有块级作用域。ES6 新增 let 和 const 之后才有了块级作用域。 块级作用域是指用 {} 包括起来的一段代码，例如 if 、while 等等。 函数作用域就是指变量只在函数内部起作用。
