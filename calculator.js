/**
 * This function will take a decimal number and will return how many digits
 * are present on right side of the decimal
 * @param  {Number} value any real number
 * @return {Number}      It returns total number of digits present on right side of the decimal.
 * @example if we pass 3.4556 then it is goint to return 4
 */
const countDecimals = (value) =>{
  var text = value.toString();
  var index = text.indexOf(".");
  return index == -1 ? 0 : (text.length - index - 1);
}
/**
 * This function will accept two numbers and adds them
 * @param {Number} number1 The first number for  performing addition
 * @param {Number} number2 The second number for performing addition
 * @returns {Number} The sum of two numbers
 * @example if we pass 4 and 6 it will return 4 + 6 = 10
 */
function sum(a,b){
  var d1 = countDecimals(a);
  var d2 = countDecimals(b);
  max = d1 > d2 ? d1:d2;
  var c = a + b;
  return(Number(c.toFixed(max)));
}
/**
 *This function will accept two numbers and finds difference.
 * @param {Number} number1 The first number for  performing subtraction
 * @param {Number} number2 The second number for performing subtraction
 * @returns {Number} The difference of two numbers
 * @example if we pass 12 and 1 it will return 12 - 1 = 11
 */

 function sub(a,b){
   var d1 = countDecimals(a);
   var d2 = countDecimals(b);
   max = d1 > d2 ? d1:d2;
   var c = a - b;
   return(Number(c.toFixed(max)));
 }

/**
 * This function is used to perform calculation either addition or subtraction by user's choice
 * @param {Number} number1 The first input number
 * @param {Number} number2 The second input number
 * @param {string} operator what operation ('+' or '-') the user want's to perform
 * @returns {Number} The final result after performing either addition or subtraction
 * @example if we pass 2 , 4 and '+' it is going to return 2 + 4 = 6
 */
var calculate = (a,b,operator) => {
  if (operator == '+'){
      return sum(a,b);
  }
  else if(operator == '-'){
    return sub(a,b);
  }
}

console.log(calculate(123.2,245,'+'));
module.exports = sum;
module.exports = sub;
module.exports = calculate;
//module.exports = countDecimals;
