<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## asyncify

<a id="asyncify"></a>
Take a sync function and make it async. This is useful for plugging sync functions into a [`waterfall`](#waterfall), [`series`](#series), or other async functions.

[![](https://img.shields.io/npm/v/apr-asyncify.svg?style=flat-square)](https://www.npmjs.com/package/apr-asyncify) [![](https://img.shields.io/npm/l/apr-asyncify.svg?style=flat-square)](https://www.npmjs.com/package/apr-asyncify)

**Parameters**

-   `function` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** 

**Examples**

```javascript
import awaitify from 'apr-awaitify';
import asyncify from 'apr-asyncify';
import waterfall from 'apr-waterfall';
import apply from 'apr-apply';

const readFile = awaitify(require('fs').readFile);
const pkgPath = path.join(__dirname, './package.json');

const pkg = await waterfall([
  apply(readFile, pkgPath, 'utf8'),
  asyncify(JSON.parse)
]);
```

Returns **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** 
