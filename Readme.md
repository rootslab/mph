### Mph

[![NPM VERSION](http://img.shields.io/npm/v/mph.svg?style=flat)](https://www.npmjs.org/package/mph)
[![CODACY BADGE](https://img.shields.io/codacy/b18ed7d95b0a4707a0ff7b88b30d3def.svg?style=flat)](https://www.codacy.com/public/44gatti/mph)
[![CODECLIMATE](http://img.shields.io/codeclimate/github/rootslab/mph.svg?style=flat)](https://codeclimate.com/github/rootslab/mph)
[![CODECLIMATE-TEST-COVERAGE](https://img.shields.io/codeclimate/coverage/github/rootslab/mph.svg?style=flat)](https://codeclimate.com/github/rootslab/mph)
[![LICENSE](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://github.com/rootslab/mph#mit-license)

[![TRAVIS CI BUILD](http://img.shields.io/travis/rootslab/mph.svg?style=flat)](http://travis-ci.org/rootslab/mph)
[![BUILD STATUS](http://img.shields.io/david/rootslab/mph.svg?style=flat)](https://david-dm.org/rootslab/mph)
[![DEVDEPENDENCY STATUS](http://img.shields.io/david/dev/rootslab/mph.svg?style=flat)](https://david-dm.org/rootslab/mph#info=devDependencies)
[![NPM DOWNLOADS](http://img.shields.io/npm/dm/mph.svg?style=flat)](http://npm-stat.com/charts.html?package=mph)

[![NPM GRAPH1](https://nodei.co/npm-dl/mph.png)](https://nodei.co/npm/mph/)

[![NPM GRAPH2](https://nodei.co/npm/mph.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/mph/)

[![status](https://sourcegraph.com/api/repos/github.com/rootslab/mph/.badges/status.png)](https://sourcegraph.com/github.com/rootslab/mph)
[![views](https://sourcegraph.com/api/repos/github.com/rootslab/mph/.counters/views.png)](https://sourcegraph.com/github.com/rootslab/mph)
[![views 24h](https://sourcegraph.com/api/repos/github.com/rootslab/mph/.counters/views-24h.png)](https://sourcegraph.com/github.com/rootslab/mph)

> __Mph__.

###Install

```bash
$ npm install mph [-g]
```

> __require__:

```javascript
var Mph  = require( 'mph' );
```
###Run Tests

> __to run all test files, install devDependecies:__

```bash
 $ cd mph/
 # install or update devDependecies
 $ npm install
 # run tests
 $ npm test
```
> __to execute a single test file simply do__:

```bash
 $ node test/file-name.js
```

###Constructor

```javascript
Mph( [ Object opt ] )
// or
new Mph( [ Object opt ] )
```

####Options

> Default options are listed.

```javascript
opt = {
}
```

###Properties

```javascript
 /*
  * Instance configuration object.
  */
 Mph.options : Object

```

###Methods

> Arguments within [ ] are optional.

```javascript
/*
 */
Mph#do : function () : Mph

```

### MIT License

> Copyright (c) 2015 &lt; Guglielmo Ferri : 44gatti@gmail.com &gt;

> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> 'Software'), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:

> __The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.__

> THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[![GA](https://ga-beacon.appspot.com/UA-53998692-1/mph/Readme?pixel)](https://github.com/igrigorik/ga-beacon)