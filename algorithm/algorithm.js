/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let res = Number.MAX_VALUE
    const len = nums.length
    let left = 0, right = 0
    let sum = 0
    while (right < len) {
        sum += nums[right] 
        while (sum >= 7) {
            res = Math.min(res, right - left + 1)
            sum -= nums[left]
            left ++
        }
        right++
    }
    return res
};

const arr = [1,4,4]

console.log(minSubArrayLen(4, arr))