// loop through each element of the array
export const myForEach = (collection, callback) => {
  for (let index = 0; index < collection.length; index++) {
    callback(collection[index], index, collection);
  }
};

// map function implementation
export const myMap = function (collection, callback) {
  const resultArray = [];
  for (let index = 0; index < collection.length; index++) {
    resultArray.push(callback(collection[index], index, collection));
  }
  return resultArray;
};

// function with the accumulator parameter
export const myReduce = (collection, callback, initialVal) => {
  let accumulator = initialVal === undefined ? 0 : initialVal;
  for (let index = 0; index < collection.length; index++) {
    accumulator = callback(accumulator, collection[index]);
  }
  return accumulator;
};

// find an element in the array
export const finder = (collection, callback) => {
  for (let index = 0; index < collection.length; index++) {
    if (index === -1) {
      return undefined;
    }
    return collection[index];
  }
};

// filter the array
export const myFilter = (collection, callback) => {
  const result = [];
  for (let index = 0; index < collection.length; index++) {
    if (callback(collection[index], index, collection)) {
      result.push(collection[index]);
    }
  }
  return result;
};

// indexOf - return the array element index.
export const getIndex = (array, value) => array.indexOf(value);

// find the first element in the array.
export const getFirstElement = (array) => array[0];

// find the last element in the array.
export const getLastElement = (array) => array[array.length - 1];

// find the maximum value.
export const getMaxNumber = (array) => {
  return Math.max(...array);
};

// find the minimum value.
export const getMinNumber = (array) => {
  return Math.min(...array);
};

// function that implements the concept of currying
export const carry = (fn, arg, isFirst = true) => {
  if (isFirst == true) {
    return (...args) => fn(arg, ...args);
  } else {
    return (...args) => fn(...args, arg);
  }
};

// function that implements the concept of memorization
export const myMemo = (func, ...args) => {
  let prevArgs;
  let prevValue;
  if (args === prevArgs) return prevValue;
  prevValue = func(...args);
  return prevValue;
};

// export class MyChain {
//   constructor() {
//     this.result = 0;

//     this.myFilter = function (collection, callback) {
//       for (const item of collection) {
//         if (callback(item)) {
//           result.push(item);
//         }
//       }
//       return this;
//     };

//     this.myMap = function (collection, callback) {
//       for (const item of collection) {
//         const newItem = callback(item);
//         result.push(newItem);
//       }
//       return this;
//     };

//     this.myReduce = function (collection, callback, init) {
//       let acc = init;
//       for (const item of collection) {
//         acc = callback(acc, item);
//       }
//       return acc;
//     };
//   }}
