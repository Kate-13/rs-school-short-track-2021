/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const index = [];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      index.push(i);
    } else {
      result.push(arr[i]);
    }
  }

  result.sort((a, b) => a - b); //sort(function(a, b) {return a - b;});

  for (let j = 0; j < index.length; j++) {
    result.splice(index[j], 0, -1);
  }
  return result;
}

module.exports = sortByHeight;
