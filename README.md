[![Build Status](https://img.shields.io/travis/markdalgleish/balance-parens/master.svg?style=flat-square)](http://travis-ci.org/markdalgleish/balance-parens) [![npm](https://img.shields.io/npm/v/balance-parens.svg?style=flat-square)](https://www.npmjs.com/package/balance-parens)

# balance-parens

Balance a string of parentheses.

## Why?

[@moroshko](https://github.com/moroshko) made me do it.

## Usage

```js
import balance from 'balance-parens';

balance(')()(()('); // => ()()(()())
```

## License

[MIT License](http://markdalgleish.mit-license.org/)
