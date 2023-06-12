import { getListObject, addElementToList } from './3-list.js';
import Immutable, { List } from 'immutable';




const array = [1, 2, 3, 4, 5];
const immutableList = getListObject(array);
console.log(immutableList);



const myList = List(['apple', 'banana']);
const modifiedList = addElementToList(myList, 'orange');
console.log(modifiedList);
