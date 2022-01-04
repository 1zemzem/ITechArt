const arrayMethods = {
  // for - get values by key.
  getValue: function (array, key) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
      res.push(array[i][key]);
    }
    return res;
  },

  // forEach - get the key/value pair of all elements of the array.
  getElement: function (array) {
    const copy = [];
    array.forEach(function (item) {
      copy.push(item);
    });
    return copy;
  },

  // map - change the case of each character to the opposite.
  changeRegister: function (str) {
    const arr = str.split("");
    const newArr = arr.map((item) => {
      if (item.toUpperCase() === item) {
        return item.toLowerCase();
      } else {
        return item.toUpperCase();
      }
    });
    return newArr.join("");
  },

  // reduce - count all elements in the array.
  getSum: function (array) {
    let total = array.reduce(function (previousValue, item) {
      return item + previousValue;
    });
    0;
    return total;
  },

  // find - find at least one client who has less than 100 scores.
  getScores: function (array) {
    let getClientMinScores = array.find((item) => item.scores < 100);
    return getClientMinScores;
  },

  // filter - find all clients who have more than 100 points.
  getScoresMoreThan: function (array) {
    let getClientScores = array.filter((item) => item.scores >= 100);
    return getClientScores;
  },

  // indexOf - return the array element index.
  getIndex: function (array, value) {
    return array.indexOf(value);
  },

  // find the first element in the array.
  getFirstElement: function (array) {
    return array[0];
  },

  // find the last element in the array.
  getLastElement: function (array) {
    return array[array.length - 1];
  },

  // find the maximum value.
  getMaxNumber: function (array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[0]) {
        array[0] = array[i];
      }
    }
    return array[0];
  },

  // find the minimum value.
  getMinNumber: function (array) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] < array[0]) {
        array[0] = array[i];
      }
    }
    return array[0];
  },

  // make a chain with the condition: find all the even numbers double them and then find their sum.
  asChain: function (array) {
    let result = array
      .filter((item) => {
        if (item % 2 === 0) {
          return item;
        }
      })
      .map((item) => {
        return item * 2;
      })
      .reduce((acc, item) => {
        return acc + item;
      });

    return result;
  },
};

export const getValue = arrayMethods.getValue;
export const getElement = arrayMethods.getElement;
export const changeRegister = arrayMethods.changeRegister;
export const getScores = arrayMethods.getScores;
export const getScoresMoreThan = arrayMethods.getScoresMoreThan;
export const getSum = arrayMethods.getSum;
export const getIndex = arrayMethods.getIndex;
export const getFirstElement = arrayMethods.getFirstElement;
export const getLastElement = arrayMethods.getLastElement;
export const getMaxNumber = arrayMethods.getMaxNumber;
export const getMinNumber = arrayMethods.getMinNumber;
export const asChain = arrayMethods.asChain;
