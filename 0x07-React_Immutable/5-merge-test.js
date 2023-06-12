import { concatElements, mergeElements } from './5-merge.js';

const page1 = [1, 2, 3];
const page2 = [4, 5, 6];

const result1 = concatElements(page1, page2);
console.log('Concatenated List:', result1.toJS());

const page3 = { id: 1, title: 'Page 1' };
const page4 = { id: 2, title: 'Page 2' };

const result2 = mergeElements(page3, page4);
console.log('Merged Map:', result2.toJS());

