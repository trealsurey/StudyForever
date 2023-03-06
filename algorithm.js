/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    const len = s.length
    let res = 0
    let stk = []
    // stk[0] = s.substr(0, 1)
    s.split('').forEach(val => {
        if (stk[stk.length - 1] == 'b' && val == 'a') {
            stk.pop()
            res++
        } else {
            stk.push(val)
        }
        
        console.log(stk)
    })
    return res
};

const arr = [1,4,4]

console.log(minimumDeletions("bbaaaaabb"))