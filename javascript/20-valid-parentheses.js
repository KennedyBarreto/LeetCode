let pilha = [];
const correspondentes = {
  "(": ")",
  "{": "}",
  "[": "]",
};

for (let i = 0; i < s.length; i++) {
  let char = s[i];

  if (correspondentes[char]) {
    pilha.push(char); // Empilhar caracteres de abertura
  } else {
    // Se for um caractere de fechamento
    if (pilha.length === 0 || correspondentes[pilha.pop()] !== char) {
      return false; // Verificar correspondência com o topo da pilha
    }
  }
}

return pilha.length === 0; // Verificar se a pilha está vazia no final
