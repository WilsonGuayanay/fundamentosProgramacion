import { 
    addTwoNumbers, 
    divideTwoNumbers, 
    substractTwonumbers, 
    timesTwoNumbers 
} from '../helpers/math-helpers';

// Funciones
let num1: number = 10;
let num2: number = 20;

let addition: number = addTwoNumbers(num1, num2);
let subtraction: number = substractTwonumbers(num1, num2);
let multiplication: number = timesTwoNumbers(num1, num2);
let division: number = divideTwoNumbers(num1, num2);

console.log('add ', addition);
console.log('substract: ', subtraction);
console.log('Times: ', multiplication);
console.log('Divide: ', division);
