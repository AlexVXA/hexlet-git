import { strict as assert } from 'node:assert';
import capitalize from '../src/capitalize.js';

assert.equal(capitalize('word'), 'Word');

assert.equal(capitalize(''), '');

console.log('Все тесты пройдены!');
