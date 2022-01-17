import {
  myForEach,
  myMap,
  myReduce,
  myFilter,
  finder,
  getIndex,
  getLastElement,
  getFirstElement,
  getMaxNumber,
  getMinNumber,
  carry,
  myMemo,
  // MyChain,
} from "./modules/array-methods.js";
import {
  objIsNumber,
  objIsString,
  objIsObject,
  objIsNull,
  isUndefined,
  objIsFunction,
  objIsBoolean,
  objIsNaN,
} from "./modules/data-types-functions.js";

const clients = [
  { id: 2, name: "Alex", age: 12, scores: 101 },
  { id: 3, name: "Peter", age: 18, scores: 105 },
  { id: 4, name: "Mike", age: 22, scores: 99 },
  { id: 5, name: "Nick", age: 19, scores: 100 },
];

const str = "Hello World";

let undef;

function foo() {}

let nameFieldChecked = true;

const numbers = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 525, 10];

const numbers2 = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 525, -525, 10, 0];

function multiply(a, b) {
  return a * b;
}

const getAllItems = myForEach(numbers2, (item, index, array) =>
  console.log(item + ":" + index + "," + array)
);

const dobleNumbers = myMap(numbers2, (item) => item * 2);
console.log(dobleNumbers);

const sum = myReduce(numbers2, (item, acc) => item + acc);
console.log(sum);

const filteredClients = myFilter(clients, (user) => user.age >= 18);
console.log(filteredClients);

const findUser = finder(clients, (item) => item.scores >= 100);
console.log(findUser);

console.log(getIndex(numbers, 7));
console.log(getFirstElement(numbers2));
console.log(getLastElement(numbers2));
console.log(getMaxNumber(numbers2));
console.log(getMinNumber(numbers2));

const multiplyByTwo = carry(multiply, 2);
console.log(multiplyByTwo(12));
const carriedForEach = carry(myForEach, numbers2);
console.log(
  carriedForEach((item, index, array) =>
    console.log(item + ":" + index + "," + array)
  )
);

console.log(isUndefined(undef));
console.log(isUndefined(numbers));
console.log(objIsNumber(5));
console.log(objIsNumber("55"));
console.log(objIsString("5"));
console.log(objIsString(55));
console.log(objIsObject({ 5: 10, 10: 100 }));
console.log(objIsObject("object"));
console.log(objIsNull(null));
console.log(objIsNull(""));
console.log(objIsFunction(foo));
console.log(objIsFunction(numbers));
console.log(objIsNaN("foo"));
console.log(objIsNaN(5));
console.log(objIsBoolean(nameFieldChecked));
console.log(objIsBoolean(5));

function fibonacci(n) {
  if (n <= 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));

const memo = myMemo(fibonacci, 9);
console.log(memo);

class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHi() {
    return `Hi, ${this.firstName} ${this.lastName}`;
  }
}
class Pupil extends User {
  constructor(firstName, lastName, isAnswerForLastQuestionKnown) {
    super(firstName, lastName);
    this.marks = [];
    this.isAnswerForLastQuestionKnown = isAnswerForLastQuestionKnown;
  }
  answerQuestion() {
    if (this.isAnswerForLastQuestionKnown == "yes") {
      return true;
    } else {
      return false;
    }
  }
}
class Teacher extends User {
  constructor(firstName, lastName) {
    super(firstName, lastName);
    this.lastSetMark;
  }
  askQuestion(pupil) {
    if (pupil.answerQuestion() == true) {
      this.setMarks = function (pupil) {
        this.lastSetMark = 10;
        pupil.marks.push(this.lastSetMark);
        return pupil.marks;
      };
    } else {
      this.lastSetMark = 0;
      pupil.marks.push(this.lastSetMark);
      return pupil.marks;
    }
  }
}

let pupil = new Pupil("Max", "Moser", "yes");
let teacher = new Teacher("Alex", "Rasca");

console.log(pupil.sayHi());
console.log(teacher.sayHi());
console.log(pupil.answerQuestion());
console.log(teacher.askQuestion(pupil));
console.log(teacher.setMarks(pupil));

function User2(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHi = function() {    
      return `Hi, ${this.firstName} ${this.lastName}`;
    }
};

function Pupil2(firstName, lastName, isAnswerForLastQuestionKnown) {
  User2.call(this, firstName, lastName);
  this.marks = [];
  this.isAnswerForLastQuestionKnown = isAnswerForLastQuestionKnown;
  this.answerQuestion = function() {
    if (this.isAnswerForLastQuestionKnown == "yes") {
      return true;
    } else {
      return false;
    }
  }  
}

function Teacher2(firstName, lastName) {
  User2.call(this, firstName, lastName);
  this.lastSetMark;
  this.askQuestion = function(pupil2) {
    if (pupil2.answerQuestion() == true) {
      this.setMarks = function (pupil2) {
        this.lastSetMark = 10;
        pupil2.marks.push(this.lastSetMark);
        return pupil2.marks;
      };
    } else {
      this.lastSetMark = 0;
      pupil2.marks.push(this.lastSetMark);
      return pupil2.marks;
    }
  }
}

let pupil2 = new Pupil2("Max", "Moser", "yes");
let teacher2 = new Teacher2("Alex", "Rasca");

console.log(pupil2.sayHi());
console.log(teacher2.sayHi());
console.log(pupil2.answerQuestion());
console.log(teacher2.askQuestion(pupil2));
console.log(teacher2.setMarks(pupil2));



// const chain = new MyChain(numbers2);

// console.log(
//   chain
//     .myFilter((item) => item < 5)
//     .myMap((item) => item * 2)
//     .myReduce((item, acc) => item + acc, 0)
// );

// function promisify(f) {
//   return function (...args) {
//     args.push(callback); // добавляем колбэк в конец аргументов f
//     f.call(this, ...args); // вызываем оригинальную функцию
//   };
// };

// const Cchaining = function (collection) {
//   function (callback) {

//   };
// };

// function chain(value) {
//     return {
//       callback: (func, ...args) => chain(func(value, ...args)),
//       value: () => value,
//     };
//   };

//   console.log(chain([1,2,3])
//   .map((item) => item * 2))
