/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  const result = [];

  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = digits[i] + carry;
    result.push(sum % 10);
    carry = Math.floor(sum / 10);
  }

  if (carry > 0) {
    result.push(carry);
  }

  return result.reverse();
};
