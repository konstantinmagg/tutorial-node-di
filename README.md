[![Build Status](https://travis-ci.org/konstantinmagg/tutorial-node-di.svg?branch=master)](https://travis-ci.org/konstantinmagg/tutorial-node-di)

# Tutorial Node DI

## Initial example
Initial code example without dependency injection.

## Require (Plain)
Slim dependency injection with Node's built-in **require**.

```
cd require-plain
npm install
npm test
```

## Proxyquire
Using **proxyquire** (see [proxyquire on Github](https://github.com/thlorenz/proxyquire)) to override Node's **require**.

```
cd proxyquire
npm install
npm test
```

### Module Argument
The **module identifier** in the object (property name) passed to **proxyquire** must exactly  match the argument passed to **require**.

```js
// user.js
var coffee = require('./coffee')();

// spec/user-spec.js
var user = proxyquire('../user', { './coffee': /* ... */  });       // works
var user = proxyquire('../user', { 'coffee': /* ... */  });         // fails
var user = proxyquire('../user', { './coffee.js': /* ... */  });    // fails

```

### Stub Argument
The **stub** in the object (property value) passed to **proxyquire** can either be an object or a function.
