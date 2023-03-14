## 回流 & 重绘

### 什么是回流、重绘

- 回流：reflow（Mozilla）/relayout（webkit），严格意义上说应该叫重排
- 重绘：repaint

### 什么操作会触发回流重绘

**可能会引起其他属性尺寸发生变化的操作**，都会触发 relayout

- 盒模型相关：width，height，margin，padding，border…
- 文字、字体相关：font，word-space，letter-space，whitespace，text-align，vertical-align…
- 排版相关：display，position，float，box-sizing…
- 本身尺寸大小就不确定的元素：canvas，img，textarea…
- 浏览器窗口大小变化
- 激活 CSS 伪类
- ……

**位置不发生变化但是样式发生变化**，就会触发 repaint

- color，background…
- outline相关属性，text-decoration…
- ……

### 怎样避免回流重绘

#### 避免 relayout

两种操作的时间一般都是小几十 ms，repaint 时间尤其短，所以其实影响的性能主要和 **动画和交互** 有关，一般对页面加载没什么影响（即使有也可以忽略不计）

- **做动画的时候改变位置和大小只用 `transform`**（尤其是针对盒模型）
- 避免在同一个异步操作周期内多次触发 relayout，将 DOM 的多个读写操作放在一起
  - 如果在 `offsetHeight()` `getBoundingClientRect()` 等方法前面改变那些会触发 relayout 的属性，那么在调用上面那些方法的时候就会强制触发 relayout
  - 如果把上述两种操作交替进行，比如放到一个循环中，那么即使在非动画效果下也会很影响性能造成卡顿
    - 一般情况下 100ms 以上的卡顿用户就会有体感了，100ms 一般也就是 4-5 次 relayout 的时间而已
- 操作 DOM 时，尽量在低层级的 DOM 节点进行操作
- 尽量不要使用 table 布局，一个小的改动可能会使整个 table 重新布局
- 使用 CSS 表达式
- 使用 absolute 或者 fixed，使元素脱离文档流，这样他们发生变化就不会影响其他元素
- 避免频繁操作DOM，可以创建一个文档片段 `documentFragment`，在它上面应用所有 DOM 操作，最后再把它添加到文档中
- 将元素先设置 `display: none`，操作结束后再把它显示出来。因为在display属性为none的元素上进行的DOM操作不会引发回流和重绘

> 注意：在同步代码中，浏览器只会在这段代码执行完成之后进行一次 relayout，即使有多个改变 layout 的操作（浏览器中有渲染队列进行优化）

```js
// 浏览器会在下面两行代码都执行完之后再进行 relayout，并不会触发2次
div.style.width = "100px"
div.style.height = "100px"
```

#### 避免 repaint

正常情况下，repaint 的进行次数是非常多的，不是我们能避免的了的

浏览器会将那些它觉得永远都不会变的元素放到同一个 `composition layer` 中，但是如果猜错了就要进行 recomposition，这个性能消耗是非常大的，所以就要尽量避免

主要的优化手段如下：
- 如果一个元素上有动画，那么给它加上 `transform` 属性，哪怕它一个开始是默认值
- 尽量使用 CSS 动画
- 用 `will-change` 提示浏览器，这个操作不会有任何副作用
- 尽量使用 GPU 进行硬件加速，也就是尽量用 `transform3d` 来代替 transform
- 不要频繁操作元素的样式，对于静态页面，可以修改类名，而不是样式

## BFC

### 什么是 BFC

Block Formatting Context，块级格式化上下文

简单来说，CSS = box + formatting context，其中 formatting context 就可以简单理解为用来如何摆放盒子、放在哪个位置的

**formatting context**
- 正常流
  - block formatting context
    - block container（包含 block-level box）
    - 拿下面写东西的例子说，这行写不下了写到下一行，就是一个 BFC
    - 再比如，一张稿纸就是一个 BFC
  - inline formatting context
    - line box（包含 inline-level box）
    - 举个例子，比如写字是从左往右写，这里的“从左往右”就是一个 IFC
- 弹性布局
  - flex formatting context
    - flex container (包含 flex item)
- 网格布局
  - grid formatting context
    - grid container (包含 grid item)

### 什么情况下会建立 BFC

1. 根元素（HTML)
2. 脱离标准流，且里面的内容满足 “从左往右写，一行写不下就到下一行” 一个要求的
   1. float 属性不是 none
   2. position：absolute/fixed
3. display: inline-block/table-cell/table-caption
4. flex-item（注意：flex 不是 BFC，是 FFC）
5. flow-root：强制创建 BFC
6. run-in：有时创建有时不创建
7. overflow 不是 visible
   1. BFC 合并：block + overflow: visible，不产生 BFC。（外面已经是一个 BFC 了，那么里面就不创建新的 BFC 了）

> 注：CSS 2.1 中规定，当一个 block container 中又有一个 block container 的话（也就是一个元素既是 block container 又是 block-level box），那么里面的 block container 就成为 `block box`，简称 block。

### BFC 有什么作用

1. 阻止元素被浮动元素覆盖，可以利用 BFC 来创建两栏布局
2. 解决父元素高度塌陷的问题
3. 解决 margin 重叠的问题，可以为其中一个盒子创建 BFC，那么就会变成一个独立的容器，容器不会受到其他元素的影响，就不会有 margin 重叠的问题了