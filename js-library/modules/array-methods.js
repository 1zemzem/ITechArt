const arrayMethods = {
  getValue: function (array, key) {
    let res = [];
    for (let i = 0; i < array.length; i++) {
        res.push(array[i][key]);
    }
    return res;
},
 
getElement: function (array) {
  const copy = []
  array.forEach(function(item){
       copy.push(item)
     })
     return copy;
},

// const items = ['item1', 'item2', 'item3']
// const copy = []

// // до
// for (let i = 0; i < items.length; i++) {
//   copy.push(items[i])
// }

// // после
// items.forEach(function(item){
//   copy.push(item)
// })
  
}

export const getValue = arrayMethods.getValue;
export const getElement = arrayMethods.getElement;

