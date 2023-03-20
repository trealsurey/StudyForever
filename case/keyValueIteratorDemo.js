const infos = {
    name: 'lucy',
    age: 28,
    sex: 'female',

    [Symbol.iterator]: function () {
        const entries = Object.entries(this)
        // const keys = Object.keys(this)
        // const values = Object.values(this)
        let index = 0
        const iterator = {
            next() {
                if (index < entries.length) {
                    return { done: false, value: entries[index++] }
                } else {
                    return { done: true }
                }
            }
        }
        return iterator
    }
}

for (let info of infos) {
    let [key, value] = info // 解构赋值
    console.log(key, value);
}

/**
 * name lucy
 * age 28
 * sex female
 */