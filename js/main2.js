// hoisting

// undefined


console.log('a:', a)
var a = 1;  // undefined
console.log('a:', a)

// for(var i = 0; i < 6; i++) {
//   setTimeout(function(){
//     console.log('var', i)
//   }, 0)
// }

// for(let k = 0; k < 6; k++) {
//   setTimeout(function(){
//     console.log('let', k)
//   }, 0)
// }

// String
// '', ""

let str = 'Hello Andrew\'shome!!!'
console.log('String', str)

let num = 2
let num2 = 2.34
let num3 = .456
let num4 = 6.456e6
console.table('Numbers', num, num2, num3, num4)

let bool = true
let bool2 = false

console.log('Boolean:', bool, bool2)

let nul = null
let undef = undefined
let nan = NaN

console.log( NaN == (9 / 'hello'))
console.log( NaN == NaN)

let arr = [1, 2, 3, 4, 5, 6]
// let arr2 = new Array() // not suggested

let obj = {}  // object
let obj2 = obj
console.log(obj == obj2)

let aa = 1
let ba = 1
console.log(aa == ba)

console.log('Number', typeof ba)
console.log('Object', typeof obj)
console.log('Array', typeof arr)
console.log('Undefined', typeof undefined)
console.log('NaN', typeof NaN)
console.log('Null', typeof null)
console.log('Boolean', typeof false)