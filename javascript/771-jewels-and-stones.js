/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  var regexPattern = new RegExp("[" + jewels + "]", "g");

  var count = (stones.match(regexPattern) || []).length;

  return count;
};
