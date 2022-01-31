const numbers2 = [1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 9, 525, -525, 10, 0];

const myFilter = (collection, callback) => {
  const result = [];
  console.log(collection, callback);
  for (let index = 0; index < collection.length; index++) {
    if (callback(collection[index], index, collection)) {
      result.push(collection[index]);
    }
  }
  return result;
};

const myMap = (collection, callback) => {
  const resultArray = [];
  for (let index = 0; index < collection.length; index++) {
    resultArray.push(callback(collection[index], index, collection));
  }
  return resultArray;
};

const myReduce = (collection, callback, initialVal) => {
  let accumulator = initialVal === undefined ? 0 : initialVal;
  for (let index = 0; index < collection.length; index++) {
    accumulator = callback(accumulator, collection[index]);
  }
  return accumulator;
};

class PowerArray extends Array {
  constructor(collection) {
    super();
    this.result = collection;
  }

  myFilter(callback) {
    return myFilter(this.result, callback);
  }

  myMap(callback) {
    return myMap(this.result, callback);
  }

  myReduce(callback, initialVal) {
    return myReduce(this.result, callback, initialVal);
  }
}

const myArr = new PowerArray(numbers2);

const asChain = myArr => {
  
}


