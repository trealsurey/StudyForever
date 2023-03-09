/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    const aLen = arr.length, qLen = queries.length
    let res = new Array(qLen).fill(0)
    for (let i = 0; i < qLen; i ++) {
        let range = queries[i]
        let tmp = arr[range[0]]
        for (let j = range[0] + 1; j <= range[1]; j ++) {
            tmp ^= arr[j]
        }
        res[i] = tmp
    }
    return res
};

const arr = [1, 3, 4, 8], queries = [[0, 1], [1, 2], [0, 3], [3, 3]]

console.log(xorQueries(arr, queries));