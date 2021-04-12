/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const dig = n.toString().split('');
  let sum = 0;
  let sum1 = 0;
  for (let i = 0; i < dig.length; i++) {
    sum += Number(dig[i]);
  }
  if (sum > 9) {
    const num = sum.toString().split('');
    for (let j = 0; j < num.length; j++) {
      sum1 += Number(num[j]);
    }
    sum = sum1;
  }
  return sum;
}

module.exports = getSumOfDigits;
