import {getValue, getElement} from "./modules/array-methods.js";


const clients = [ 
    { id: 2, name: "Alex" },
    { id: 3, name: "Peter" },
    { id: 4, name: "Mike" },
    { id: 5, name: "Nick" },
];
    

console.log(getValue(clients, 'name'));
console.log(getElement(clients, 'name'));

