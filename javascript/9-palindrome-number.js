/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let num = x.toString();
  let newString = "";
  for (var i = num.length - 1; i >= 0; i--) {
    newString += num[i];
  }

  if (x == Number(newString)) return true;
  else return false;
};
