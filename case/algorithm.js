/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    let sum = nums.reduce((preVal, num) => preVal + num)
    if (sum % p == 0)   return 0
    let res = 10e5;
    const len = nums.length
    for (let i = 0; i < len; i ++) {
        tmp = nums.slice(i, len)
        for (let j = i; j < len; j ++) {
            let help = subSum(i, j + 1, tmp)
            if ((sum - help) % p == 0)  {
                res = Math.min(j - i + 1, res)
                break
            }
        }

    }
    return res

    function subSum(left, right, nums) {
        let tmp = nums.slice(left, right)
        console.log(tmp)
        return tmp.reduce((preVal, num) => preVal + num)
    } 
};

console.log(minSubarray([3,1,4,2], 6))