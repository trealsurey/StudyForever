/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  const len = nums.length;
  // const map = new Map();
  let i = (j = 0);
  let left = target;
  let res = len;
  while (i < len && j < len && i <= j) {
    if (left < nums[j]) {
      left += nums[i++];
    } else {
      left -= nums[j];
        if (left == 0) res = Math.min(res, j - i + 1);
        j++
    }
    console.log(left);
  }
  return res;
};

const arr = [2, 3, 1, 4, 3, 2];
console.log(minSubArrayLen(7, arr));
