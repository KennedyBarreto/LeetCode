/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
  var temps = [];
  temps.push(celsius + 273.15);
  temps.push(celsius * 1.8 + 32);
  return temps;
};
