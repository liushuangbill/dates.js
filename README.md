# tools.js
[![Coverage Status](https://coveralls.io/repos/github/liushuangbill/dates.js/badge.svg?branch=master)](https://coveralls.io/github/liushuangbill/dates.js?branch=master)
[![Build Status](https://travis-ci.org/liushuangbill/tools.js.svg?branch=master)](https://travis-ci.org/liushuangbill/tools.js)

## Installation
In a browser:
```js
<script src="tools.js"></script>

use: tools.xxx()
```

Using npm:
```npm
npm i -S tools.js
```

In Node.js:
```js
const tools = require('tools.js')
```

ES2015+:
```
import { xxx } from 'tools.js'
or
import * as tools from 'tools.js'
```

## API

### fromNow(date[, options])
calculating readable time differences from now and past or future dates.
```js
  Arguments:
    date: timestamp or FormatDateTime
    options: timestamp or FormatDateTime

  Returns:
    (String): "1秒以前 or 1分钟以前 or 1小时以前 or 1天以前 ..."

  Example:
    fromNow('2018/01/01');
    // 2018/01/01 => new Date()

    forNow('2018/01/01', '2018/01/02')
    // 2018/01/01 => 2018/01/02
```

### isNumber(num)
Returns true if the value is a number or string number. 
```js
  Arguments: num: any

  Returns: Boolean
  
  Example:
    isNumber('') //false
    isNumber(Infinity) //false
    isNumber('123') // true
```
