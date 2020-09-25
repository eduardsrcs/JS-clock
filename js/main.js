console.log('Hello world!')

console.log(document.getElementById('user'))

document.getElementById('user').innerHTML = '<h1>Hello world</h1>'
document.write('Document')

window.onload = () => {

  // document.write('Document')
}

// window.alert('Hello from alert!')

console.warn('Warning')
console.error('Error')
console.info('Info')

var a
let b
const C = 'hello'

function hello(a, b) {
  console.log(a + b)
}

hello(2, 3)
hello(5, 8)
hello(2, 8)

a = 2
b = 'b'
c = {}

// OOP
class Hello {
  constructor(name) {
    this.name = name
  }
  sayName(){
    console.log('sayName is called')
  }
}

class Hello2 extends Hello {
  constructor(name) {
    super(name)
  }
}

const user = new Hello('John')
const user2 = new Hello('Jane')
const user3 = new Hello2('Helen')

console.log (user.name)
// console.log (user2.name)


user2.sayName()

// hoisting
