/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    const len = nums.length
    let cnt = 0
    for (let i = 0; i < len; i++) {
        let sum = 0
        for(let j = i; j < len; j ++) {
            sum += nums[j]
            if (sum == k) {
                if (j != len - 1 && nums[j + 1] == 0) cnt++
                else {
                    cnt++ 
                    break
                }
            }
        }
    }
    return cnt
};

const arr = [1,-1,0]

console.log(subarraySum(arr, 0))