/**
 * 向生成器函数中传入参数并获取 
 */

function* foo(name1) {
    console.log('执行内部代码: 1111', name1)
    console.log('执行内部代码: 2222', name1)
    // yield 前面的 const name2 是在第二次调用 next() 的时候进行赋值的
    // yield 后面的 'aaaa' 是第一次调用 next() 的时候传给 value 的
    const name2 = yield 'aaaa'
    console.log('执行内部代码: 3333', name2)
    console.log('执行内部代码: 4444', name2)
    const name3 = yield 'bbbb'
    console.log('执行内部代码: 5555', name3)
    console.log('执行内部代码: 6666', name3)
}

const generator = foo('next1')

// 这里不能传递参数了，没有 yield 用来接收参数
// 所以第一次调用的参数一般都在 foo() 中进行传递
console.log(generator.next())
console.log(generator.next('next2'))
console.log(generator.next('next3'))

/**
 * 执行内部代码：1111 next1
 * 执行内部代码：2222 next1
 * {value: 'aaaa', done: false}
 * 执行内部代码：3333 next2
 * 执行内部代码：4444 next2
 * {value: 'bbbb', done: false}
 * 执行内部代码：5555 next3
 * 执行内部代码：6666 next3
 * {value: undefined, done: true}
 */