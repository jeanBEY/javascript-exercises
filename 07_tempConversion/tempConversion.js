const convertToCelsius = function(num) {

  let finalNum;

  finalNum = (num - 32) / (9/5); 
  finalNum.toFixed(1);

  return finalNum;
};

const convertToFahrenheit = function() {

  let finalNum;

  finalNum = (num) * (9/5) + 32; 
  finalNum.toFixed(1);

  return finalNum;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
