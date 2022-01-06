export const myForEach = (array, callback) => {
  for (let counter = 0; counter < array.length; counter++) {
    callback(array[counter], counter, array);
  }
};

export const myMap = (collection, callback) => {
  const result = [];
  for (const item of collection) {
    const newItem = callback(item);
    result.push(newItem);
  }
  return result;
};

export const myReduce = (collection, callback, init) => {
  let acc = init;
  for (const item of collection) {
    acc = callback(acc, item);
  }
  return acc;
};

export const finder = (collection, callback) => {
  for (const item of collection) {
    if (callback(item)) {
      return item;
    }
  }
};

export const myFilter = (collection, callback) => {
  const result = [];
  for (const item of collection) {
    if (callback(item)) {
      result.push(item);
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
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[0]) {
      array[0] = array[i];
    }
  }
  return array[0];
};

// find the minimum value.
export const getMinNumber = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] < array[0]) {
      array[0] = array[i];
    }
  }
  return array[0];
};

// // make a chain with the condition: find all the even numbers double them and then find their sum.
export const asChain = (array) => {
  const result = array
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
}
