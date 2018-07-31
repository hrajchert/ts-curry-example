import {curry} from './curry';

const add = curry((a: number, b: number) => a + b);

const inc = add(1);

console.log('1 + 1 = ', inc(1));
