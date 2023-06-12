import { getImmutableObject } from './1-map.js';

const object1 = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};
const immutableMap1 = getImmutableObject(object1);
console.log(immutableMap1);

const object2 = {
  name: 'Jeff',
  age: 21,
  city: 'New York'
};
const immutableMap2 = getImmutableObject(object2);
console.log(immutableMap2);
