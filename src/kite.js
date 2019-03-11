const curry = require('fantasy-helpers').curry


//# kite :: a -> b -> b
//.
//. ```js
//. > kite('bird')('cat')
//. 'cat'
//. ```
const kite = curry((x, y) => y)

module.exports = kite
