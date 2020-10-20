//Declare a number as a variable

var num1 = 100;
console.log(num1)

console.log(typeof(num1))

//Declare a number as a object

var number1 = new Number(1000);
var number2 = new Number(1000);
var number3=number1;

console.log(number1==number2); // these are two diff object has diff memory object (flase)
console.log(number1===number2);
console.log(number3==number1); //true same value same refrence
console.log(number3===number1); // true to check for value,type and refrences
