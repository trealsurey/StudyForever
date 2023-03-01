/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    // let map = new Map()
    let arr = []
    for (let val of s.split('')) {
        if (val == '(' || val == '[' || val == '{') arr.push(val)
        else if (val = ')') {
            if (arr[arr.length - 1] != '(') return false
            else arr.pop()
        }
        else if (val = ']') {
            if (arr[arr.length - 1] != '[') return false
            else arr.pop()
        }
        else {
            if (arr[arr.length - 1] != '{') return false
            else arr.pop()
        }
        console.log(arr)
    }
    return arr.length == 0
};

console.log(isValid('()[]{}'))