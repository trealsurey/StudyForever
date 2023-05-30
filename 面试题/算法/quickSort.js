const quickSort = function (arr) {
  const len = arr.length;
  if (len < 2) return arr;
  // 确保每次都会把 pivot 从当前数组中去掉，否则数组长度永远不会变化一直遍历，最后会内存溢出
  let pivot = arr.splice(len / 2, 1)[0];
  let leftArr = [],
        rightArr = [];
    
  arr.forEach((val) => {
    if (val < pivot) leftArr.push(val);
    else rightArr.push(val);
  });
  return quickSort(leftArr).concat([pivot], quickSort(rightArr));
};

const arr = [13, 10, 45, 6, 78, 2, 9, 21, 15, 11];

console.log(quickSort(arr));
