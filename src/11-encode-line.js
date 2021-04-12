/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const result = {};
  let s = '';
  const keys = Object.keys(result);
  for (let i = 0; i < str.length; i++) {
    result[str[i]] = 0;
  }
  for (let i = 0; i < str.length; i++) {
    keys.forEach((key) => {
      if (key === str[i]) {
        result[key] += 1;
      }
    });
  }
  keys.forEach((key) => {
    if (result[key] !== 1) {
      s += `${result[key]}${key}`;
    } else {
      s += `${key}`;
    }
  });
  return s;
}

module.exports = encodeLine;
