/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const result = [];
  let s3 = s2;
  for (let i = 0; i < s1.length; i++) {
    if (!s3.includes(s1[i])) {
      i++;
    } else if (s3.includes(s1[i])) {
      const ind = s3.indexOf(s1[i]);
      s3 = s3.slice(0, ind) + s3.slice(ind + 1, s3.length);
      result.push(s1[i]);
    }
  }
  const number = result.length;
  return number;
}

module.exports = getCommonCharacterCount;
