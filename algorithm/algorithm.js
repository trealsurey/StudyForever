let nums = [2, 3, 1, 0, 2, 5, 3]

// 法1

function swap(a, b) {
    let t = a;
    a = b;
    b = t;
}
let set = new Set();
    
let res = (function find(nums) {
    for (let i = 0; i < 7; i++) {
        // if (nums[i] < i)    return nums[i];
        if (nums[i] === i) continue;
        if (nums[i] === nums[nums[i]]) return nums[i];
        else {
           
            let tmp = nums[i]
            [nums[i], nums[nums[i]]] = [nums[nums[i]], nums[i]]
            console.log(nums)
        }
    
    }
})();

console.log(res)

    