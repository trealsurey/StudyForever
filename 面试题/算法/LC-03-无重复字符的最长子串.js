// https://leetcode.cn/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const len = s.length;
  let res = 0;
  let i = (j = 0);
  let set = new Set();
  while (i < len && j < len && i <= j) {
    if (set.has(s[j])) {
      set.delete(s[i++]);
    } else {
      res = Math.max(res, j - i + 1);
      set.add(s[j++]);
    }
  }
  return res;
};git

const s = "abcabcbb";
console.log(lengthOfLongestSubstring(s));
