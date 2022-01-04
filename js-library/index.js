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

const clients = [
  { id: 2, name: "Alex", age: 12, scores: 101 },
  { id: 3, name: "Peter", age: 18, scores: 105 },
  { id: 4, name: "Mike", age: 22, scores: 99 },
  { id: 5, name: "Nick", age: 19, scores: 100 },
];

const str = "Hello World";

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