const carry = (fn, arg, isFirst = true) => {
    if (isFirst == true) {
      return (...args) => fn(arg, ...args);
    } else {
      return (...args) => fn(...args, arg);
    }
  };
  
  const myForEach = (array, callback) => {
    for (let counter = 0; counter < array.length; counter++) {
      callback(array[counter], counter, array);
    }
  };
  
  const numbers = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 525, -525, 10];
  
  const carriedForEach = carry(myForEach, numbers);
  console.log(
    carriedForEach((item, index, array) =>
      console.log(item + ':' + index + ',' + array),
    ),
  );