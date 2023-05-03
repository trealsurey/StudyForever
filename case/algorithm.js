/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const len = s.length;
  if (len % 3 !== 0) return false;
  const str = "abc";
  if (s.indexOf(str) === -1) return false;
  else {
    let help = s;
    while (help.length !== 0) {
      let idx = help.indexOf(str);
      if (idx === -1) return false;
      console.log(help.split("").splice(idx, 3));
        help = help.split("").splice(idx, 3).join("");
      console.log(help);
    }
  }
  return true;
};

const s = "aabcbc"

console.log(isValid(s))