/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const len = nums.length
    for (let num of nums) {
        while (num >= 0 && num <= len && nums[num - 1] != num) swap(num, nums[num - 1])
    }
    console.log(nums)
    nums.forEach((val, idx) => {
        if (val != idx + 1) return idx + 1
    })
    return len + 1

    function swap(a, b) {
        let tmp = a
        a = b
        b = tmp
    }
};

const arr = [7,8,9,10,11]
console.log(firstMissingPositive(arr));