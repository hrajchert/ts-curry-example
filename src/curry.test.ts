import {assert} from 'chai';
import 'mocha';
import {curry} from './curry';

const add = (a: number, b: number) => a + b;
const addC = curry(add);
const print4 = curry(
    (a: number, b: string, c: boolean, d: number[]) => `a: ${a} b: ${b} c: ${c} d: ${d}`
);

const allEqual = <T>(values: T[]) => values.every(val => val === values[0]);

describe('curry:', () => {
    it('curry 2 arguments', () => {
        assert.isTrue(
            allEqual([
                add(1, 1),
                addC(1, 1),
                addC(1)(1)
            ])
        );
    });
    it('curry 4 arguments', () => {
        assert.isTrue(
            allEqual([
                print4(1, 'hello', true, [1, 2]),
                print4(1)('hello', true, [1, 2]),
                print4(1)('hello', true)([1, 2]),
                print4(1)('hello')(true, [1, 2]),
                print4(1, 'hello')(true, [1, 2]),
                print4(1, 'hello', true)([1, 2]),
                print4(1, 'hello', true)([1, 2]),
            ])
        );
    });

});
