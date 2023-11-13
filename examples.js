var toRegex = require('./');
console.log(toRegex('foo'))
//=> /^(?:foo)$/

console.log(toRegex('foo', {negate: true}))
//=> /^(?:(?:(?!^(?:foo)$).)*)$/

console.log(toRegex('foo', {contains: true}))
//=> /(?:foo)/

console.log(toRegex(['foo', 'bar'], {negate: true}))
//=> /^(?:(?:(?!^(?:(?:foo)|(?:bar))$).)*)$/

console.log(toRegex(['foo', 'bar'], {negate: true, contains: true}))
//=> /^(?:(?:(?!(?:(?:foo)|(?:bar))).)*)$/
