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
  return Math.max(...array);
};

// find the minimum value.
export const getMinNumber = (array) => {
  return Math.min(...array);
};

export const carry = (fn, arg, isFirst = true) => {
  if (isFirst == true) {
    return (...args) => fn(arg, ...args);
  } else {
    return (...args) => fn(...args, arg);
  }
};

// export const asChain = (array) => {
//   const result = array
//     .filter((item) => {
//       if (item % 2 === 0) {
//         return item;
//       }
//     })
//     .map((item) => {
//       return item * 2;
//     })
//     .reduce((acc, item) => {
//       return acc + item;
//     });

//   return result;
// };

// export const myMemo = (func, ...args) => {
//   let prevArgs;
//   let prevValue;
//   if (args === prevArgs) return prevValue;
//   prevValue = func(...args);
//   return prevValue;
// };
