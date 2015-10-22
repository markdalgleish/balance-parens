import { assert } from 'chai';
import balance from '../src';

const testData = [
  { input: ')()(()(', expected: '()()(()())' },
  { input: ')))', expected: '((()))' },
  { input: '()(())()', expected: '()(())()' },
  { input: ')()()(()(()))))(', expected: '((()()()(()(()))))()' },
  { input: ')))())()))(', expected: '(((((()))())()))()' }
];

testData.forEach(test => it(`should balance "${test.input}" as "${test.expected}"`, () => {
  assert.equal(balance(test.input), test.expected);
}));
