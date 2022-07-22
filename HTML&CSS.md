# HTML
HyperText Markup Language 超文本标记语言

> [pink老师黑马教程](https://www.bilibili.com/video/BV14J4114768?p=8&vd_source=c727c2934b167656e7856cce)

*todo*
1. 表单元素都有哪些（HTML5新增了哪些）
2. .innerText 和 .value 的区别
3. form 和 table 有什么区别

# CSS

## Emmet 语法
Emmet 语法的前身是 Zen coding，它使用缩写来提高 html/css 的编写速度，vscode 内部已经集成该语。
1. 快速生成 HTML 结构语法
   1. 直接输入标签名，按 `tab` 或者 `enter` 键，就可以直接生成全部标签名。例：直接输入 div 按回车就可以生成 `<div></div>`
   2. 如果需要生成多个相同标签，可以使用 `*`，注意不能有空格。例：输入 `div*3` 就可以快速生成3个完整 div 标签
   3. 如果有父子级关系的标签，可以用 `>`，不能有空格。例：`ul>li` 就可以直接生成完整的 ul li 结构，也可以输入 `div>span`
   4. 如果有兄弟级关系的标签，可以用 `+`，不能有空格。例：`div+p`
   5. 如果生成带有类名或者 id 名，可以直接写 `.className` 或者 `#idName`。例：输入 `div.box` 就会生成 `<div class="box"></div>`，输入 `ul.li#list` 就会生成 `<ul><li id="list"></li></ul>`
   6. 如果生成的 div 类名是有顺序的，可以用自增符号 `$`，默认顺序从1开始。例：输入 `span.test$*5` 就会得到如下代码
    ```html
    <span class="test1"></span>
    <span class="test2"></span>
    <span class="test3"></span>
    <span class="test4"></span>
    <span class="test5"></span>
    ```
   7. 如果想要在生成的标签内部写内容可以用 `{}` 表示。例：输入 `div{今天天气好晴朗}` 就可以得到 `<div>今天天气好晴朗</div>`；输入 `div{处处好风光}*5` 就可以得到如下代码
    ```html
    <div>处处好风光</div>
    <div>处处好风光</div>
    <div>处处好风光</div>
    <div>处处好风光</div>
    <div>处处好风光</div>
    ```

2. 快速生成 CSS 样式
   
   CSS 基本采取简写形式即可。比如 `w200` 可以生成 `width: 200px`, `lh26` 可以生成 `line-height: 26px`

3. 快速格式化代码
   1. 文件 --> 首选项 --> 设置
   2. 搜索 `format`，选择 `格式化`
   3. 勾选想要的格式化方式

## 复合选择器

### 后代选择器（重要）
又称包含选择器，可以选择父元素里面的子元素。**写法是：把外层标签写在前面，内层标签写在后面，中间用空格分隔**。当标签发生嵌套时，内层标签就成为外层标签的后代。

```css
ol li {
   color: pink;
}
.test li {
   color: red;
}
```
```html
<body>
   <ol>
      <li>bbb</li>
      <li>ppp</li>
      <li>mmm</li>
   </ol>
   <ol class="test">
      <li>rrr</li>
      <li>eee</li>
      <li>ddd</li>
   </ol>
</body>

<!-- 第一个有序列表中的字体为粉色，class为test的列表的颜色为红色 -->
```

### 子选择器（重要）
又称子元素选择器，只能选择作为某元素的**最近一级**子元素。简单理解就是选亲儿子元素
```css
元素1 > 元素2 { 
   样式声明
}
```
```css
div > a {
      color: red;
}
```
```html
<div>
   <a href="#">我是儿子</a>
   <p>
      <a href="#">我是孙子</a>
   </p>
</div>

<!-- 只有div下面的第一个a中的字体颜色会变成红色-->
```

### 并集选择器

### 伪类选择器