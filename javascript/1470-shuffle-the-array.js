/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const primeiroArray = nums.slice(0, n);
  const segundoArray = nums.slice(n);
  const arrayFinal = [];
  for (let i = 0; i < primeiroArray.length; i++) {
    arrayFinal.push(primeiroArray[i]);
    arrayFinal.push(segundoArray[i]);
  }
  return arrayFinal;
};
