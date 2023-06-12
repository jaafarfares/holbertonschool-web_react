import accessImmutableObject from './2-nested.js';

const myObject = {
  name: 'Jeff',
  age: 21,
  city: 'New York'
};

const path = ['name']; 
const value = accessImmutableObject(myObject, path);
console.log(value); // should output aany value key you provide in the path 
