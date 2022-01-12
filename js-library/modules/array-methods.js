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

//todo
export class MyChain {
  constructor(collection) {
    this.result = collection;
  }
  myFilter(callback) {
    const newArr = this.result;
    for (let index = 0; index < this.length; index++) {
      if (callback(this[index], index, this)) {
        newArr.push(this[index]);
      }
      return newArr;
    }
  }

  myMap(callback) {
    const resultArray = this.result;
    for (let index = 0; index < this.length; index++) {
      resultArray.push(callback(this[index], index, this));
    }
    return this.result;
  }

  myReduce(callback) {
    let accumulator = this.result;
    for (let index = 0; index < this.length; index++) {
      accumulator = callback(accumulator, this[index]);
    }
    return this.result;
  }
}
