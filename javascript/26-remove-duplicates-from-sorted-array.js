/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // Verifica se o array tem menos de 2 elementos (não há duplicatas)
  if (nums.length < 2) {
    return nums.length;
  }

  // Inicializa dois ponteiros, um para a posição atual e outro para a próxima posição única
  var uniquePointer = 0;

  // Percorre o array começando do segundo elemento
  for (var i = 1; i < nums.length; i++) {
    // Se o elemento atual não for igual ao elemento único anterior
    if (nums[i] !== nums[uniquePointer]) {
      // Incrementa o ponteiro único
      uniquePointer++;
      // Move o elemento para a próxima posição única
      nums[uniquePointer] = nums[i];
    }
  }

  // O array agora contém apenas elementos únicos até a posição uniquePointer
  // Incrementando uniquePointer em 1, obtemos o comprimento do array sem duplicatas
  return uniquePointer + 1;
};
