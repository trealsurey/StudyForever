function myInstance(inst, type) {
    let proto = Object.getPrototypeOf(inst)
    let prototype = type.prototype
     // 判断构造函数的 prototype 对象是否在对象的原型链上
    while (true) {
        if (!proto) return false
        if (proto === prototype) return true
        // 如果没有找到，就继续从其原型上找
        else proto = Object.getPrototypeOf(proto)
    }
}