import { map, map2 } from './4-mutations.js';

console.log('Original map:');
console.log(map.toJS());

// MODIFIE THE OBJECT AND DISPLAY IT AGIAN 
console.log('Modified map2:');
console.log(map2.toJS());
