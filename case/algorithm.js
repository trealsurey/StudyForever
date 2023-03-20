/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // 从前往后计算左边的最大高度，和从后往前计算右边的最大高度，分别保存
    let preMax = [], lastMax = []
    let preM = 0, lastM = 0
    let res = 0
    for (let i = 0; i < height.length; i ++) {
        let j = height.length - i - 1
        preM = Math.max(preM, height[i])
        preMax.push(preM)
        lastM = Math.max(lastM, height[j])
        lastMax.unshift(lastM)
    }
    console.log(preMax)
    console.log(lastMax)
    for (let i = 0; i < height.length; i ++) {
        res += Math.min(preMax[i], lastMax[i]) - height[i]
    }
    return res
};

const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(trap(arr))