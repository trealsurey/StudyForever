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

## 数组
JS 中一个数组可以放各种类型的元素
```js
var a = [1, 'jojo', 'female', true];
```

## JS 调试
> 如何快速找到 DOM 元素

在 Chrome 中的 Elements 面板中标记一个 DOM 元素，并在控制台中使用它。Chrome 控制台会保留选择历史的最后五个元素，最终选择的首个元素被标记为 `$0`，第二个选择的元素为 `$1`，以此类推。
