/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs === null || strs.length === 0) return "";

  // Inicializa o prefixo como o primeiro elemento da matriz de strings.
  let prefix = strs[0];

  // Itera sobre os elementos restantes da matriz de strings.
  for (let i = 1; i < strs.length; i++) {
    // Enquanto o prefixo não for um prefixo da string atual, reduza o prefixo em um caractere.
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      // Se o prefixo se tornar vazio, não há prefixo comum, então retorne uma string vazia.
      if (prefix === "") return "";
    }
  }

  // Retorna o prefixo comum mais longo.
  return prefix;
};
