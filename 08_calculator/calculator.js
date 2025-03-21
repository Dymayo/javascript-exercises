const add = function(num1,num2) {
	return (num1+num2) ;
};

const subtract = function(num1,num2) {
	return (num1-num2) ;
};

const sum = function(numbers) {
  return numbers.reduce((total, currentItem) => total + currentItem, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, currentItem) => total * currentItem, 1);
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
	let product = 1;
  for(let i = a; i > 0 ; i--){
    product *= i ;
  }
  return product ;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
