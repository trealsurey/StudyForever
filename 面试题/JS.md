### 基本数据类型

- Number, String, Boolean, Object, Null, Undefined
- Symbol, BigInt（ES6 新增）

### 数据类型检测方式有哪些

#### typeof

存在一个问题：数组、对象、null 都会被判断为 object

#### instanceof

内部运行机制是判断在其原型链中能否找到该类型的原型

```js
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false 
 
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true
```

存在的问题就是：**只能正确判断引用类型**，不能判断基本数据类型

可以用来测试一个对象在其原型链中是否存在一个构造函数的 `prototype` 属性

#### constructor

```js
console.log((2).constructor === Number); // true
console.log(('str').constructor === String); // true
console.log((function() {}).constructor === Function); // true
```

如果创建一个对象来改变它的原型，那么就不能再用 constructor 来判断数据类型了

```js
function Fn(){};
Fn.prototype = new Array(); // 改变
var f = new Fn();
 
console.log(f.constructor===Fn);    // false
console.log(f.constructor===Array); // true
```

#### Object.prototype.toString().call()

```js
var a = Object.prototype.toString;
 
console.log(a.call(2));  // Number
console.log(a.call(function(){}));  // Function
console.log(a.call(undefined)); // Undefined
console.log(a.call(null));  //Null
```

> 同样是检测对象 obj 调用 toString() 方法，`obj.toString()` 的结果和`Object.prototype.toString.call(obj)` 的结果不一样，这是为什么？

这是因为 `toString()` 是 Object 的原型方法，而 Array、function 等类型作为 Object 的实例，都 **重写** 了 toString() 方法。根据原型链的知识，不同的对象类型调用 toString() 方法时，调用的是对应的重写之后的 toString() 方法，而不会去调用 Object 上原型 toString() 方法（返回对象的具体类型）。所以**采用 `obj.toString()` 不能得到其对象类型，只能将 obj 转换为字符串类型**；因此，在想要得到对象的具体类型时，应该调用 Object 原型上的 toString() 方法

### 判断数组的方式有那些

- **instanceof**

```js
arr instanceof Array
```

- **ES6 中的 Array.isArray(arr)**
- **原型链**

```js
Array.prototype === arr.__proto__
```

- **Array.prototype.isPropotypeOf(arr)**
- **Object.getPrototypeOf(arr) === Array.prototype**
- **Object.prototype.toString.call(arr) === 'Array'**（存疑）

### object.assign和扩展运算法是深拷贝还是浅拷贝，两者区别
*todo*

### 箭头函数

#### 箭头函数和普通函数的区别

#### 可以 new 一个箭头函数吗

#### 箭头函数的 this 指向哪里

### 扩展运算符

### Map 和 Object 的区别

|  | Map | Object |
| :--: | :--: | :--: |
| key 值 | 任意类型（包括 null，NaN，Infinity） | 只能是 String/Symbol，其他类型会被强制转化为 String |
| 迭代方式 | 可直接使用 for...of 进行迭代，遵循元素的插入顺序 | 1. for...in 遍历，但是要处理原型上的数据带来的干扰（使用 `Object.hasOwnProperty()`） 2. 使用 `Object.keys()` or `Object.entries()` 遍历  |
| 序列化 | 不支持，但是可以使用特殊的存储方式 | 支持使用 `JSON.parse()` `JSON.stringfy()` 进行序列化和反序列化|
| 性能（以插入 string 类型 key 为例） | 数据量 < 1000 时性能明显高于 Object | 数据量 > 1000 时差异不大（具体区别取决于不同的 JS 引擎） |

> **注意**：因为原型的存在，一个空的对象本身就会存在一些 key，比如 `toString` `constructor` 等；除非使用 `Object.create(null)` 来解决。Map 不存在这种问题

**如果是动态存取数据，用 Map 更好，如果只是单纯存储数据用 Object 即可**

### Map 和 WeakMap 的区别

WeakMap
1. key **必须是对象**，而值可以任意
2. 弱引用：当键所指对象没有其他地方引用的时候，它会被 GC 回收掉
3. 不能被枚举
4. 一个用例：存储一个对象的私有数据或隐藏实施细节

[Why WeakMap](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/WeakMap#why_weakmap_%EF%BC%9F)

Map 会导致内存泄漏，因为数组会一直引用每个 kv，这样就会使得 GC 不能回收处理他们

而由于 WeakMap 是弱引用，那么在没有引用存在时就可以被 GC 回收

也正是因为弱引用的存在，WeakMap 是不能被枚举的

### Set 和 WeakSet 的区别

基本和 WeakMap 相同，只是 key 不能重复

**一个用例：检测循环引用**，当对循环引用的对象进行深拷贝时，就需要用到 WeakSet

对象的数量或它们的遍历顺序无关紧要，因此，WeakSet 比 Set 更适合（和执行）跟踪对象引用，尤其是在涉及大量对象时。

```js
// 对 传入的 subject 对象 内部存储的所有内容执行回调
function execRecursively(fn, subject, _refs = new WeakSet()) {
  // 避免无限递归
  if (_refs.has(subject)) {
    return;
  }

  fn(subject);
  if (typeof subject === "object") {
    _refs.add(subject);
    for (const key in subject) {
      execRecursively(fn, subject[key], _refs);
    }
  }
}

const foo = {
  foo: "Foo",
  bar: {
    bar: "Bar",
  },
};

foo.bar.baz = foo; // 循环引用！
execRecursively((obj) => console.log(obj), foo);
```