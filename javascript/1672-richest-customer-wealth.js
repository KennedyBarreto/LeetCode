/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let maxWealth = 0;

  // Itera sobre cada cliente (linha da matriz)
  for (let i = 0; i < accounts.length; i++) {
    // Calcula a soma dos valores na linha atual (conta do cliente)
    let wealth = accounts[i].reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );

    // Atualiza o máximo se a riqueza atual for maior
    maxWealth = Math.max(maxWealth, wealth);
  }

  return maxWealth;
};
