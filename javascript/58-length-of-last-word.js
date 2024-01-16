/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  var palavras = s.trim().split(" ");

  if (palavras[palavras.length - 1] !== "") {
    return palavras[palavras.length - 1].length;
  } else {
    var i = 1;
    while (palavras[palavras.length - i] === "") {
      i++;
    }
    return palavras[palavras.length - i].length;
  }
};
