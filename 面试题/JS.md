### 基本数据类型

- Number, String, Object, Boolean, Null, Undefined
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

### Map 和 WeakMap 的区别

### Set 和 WeakSet 的区别

