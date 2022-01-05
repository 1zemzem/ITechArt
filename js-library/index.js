import {
  getValue,
  getElement,
  changeRegister,
  getScores,
  getScoresMoreThan,
  getSum,
  getIndex,
  getLastElement,
  getFirstElement,
  getMaxNumber,
  getMinNumber,
  asChain,
} from "./modules/array-methods.js";
import { objIsNumber, objIsString, objIsObject, objIsNull, isUndefined, objIsFunction, objIsBoolean, objIsNaN } from "./modules/data-types-functions.js";


const clients = [
  { id: 2, name: "Alex", age: 12, scores: 101 },
  { id: 3, name: "Peter", age: 18, scores: 105 },
  { id: 4, name: "Mike", age: 22, scores: 99 },
  { id: 5, name: "Nick", age: 19, scores: 100 },
];

const str = "Hello World";

let undef;

function foo() {};

let nameFieldChecked = true;

const numbers = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 525, -525, 10];

console.log(getValue(clients, "name"));
console.log(getElement(clients, "name"));
console.log(changeRegister(str));
console.log(getScores(clients));
console.log(getScoresMoreThan(clients));
console.log(getSum(numbers));
console.log(getIndex(numbers, 7));
console.log(getFirstElement(numbers))
console.log(getLastElement(numbers));
console.log(getMaxNumber(numbers));
console.log(getMinNumber(numbers));
console.log(asChain(numbers));

console.log(isUndefined(undef));
console.log(isUndefined(numbers));
console.log(objIsNumber(5));
console.log(objIsNumber("55"));
console.log(objIsString("5"));
console.log(objIsString(55));
console.log(objIsObject({ 5: 10, 10:100 }));
console.log(objIsObject("object"));
console.log(objIsNull(null));
console.log(objIsNull(""));
console.log(objIsFunction(foo));
console.log(objIsFunction(numbers));
console.log(objIsNaN("foo"));
console.log(objIsNaN(5));
console.log(objIsBoolean(nameFieldChecked));
console.log(objIsBoolean(5));