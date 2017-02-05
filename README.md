# Tutorial Node DI

## Require (Plain)
Slim dependency injection with Node's built-in **require**.

### Run it

```
cd require-plain
npm install
npm test
```

## Proxyquire
Using **proxyquire** (see [proxyquire on Github](https://github.com/thlorenz/proxyquire)) to override Node's **require**.

### Run it

```
cd require-plain
npm install
npm test
```

### Module Argument
**Proxyquire**'s first argument is the **module** identifier. It must exactly  match the **module** passed to **require**.

```js
// user.js
var coffee = require('./coffee')();

// spec/user-spec.js
var user = proxyquire('../user', { './coffee': /* ... */  });       // works
var user = proxyquire('../user', { 'coffee': /* ... */  });         // fails
var user = proxyquire('../user', { './coffee.js': /* ... */  });    // fails

```

### Stub Argument
**Proxyquire**'s second argument is the **stub** object. It can either be an object or a function.
