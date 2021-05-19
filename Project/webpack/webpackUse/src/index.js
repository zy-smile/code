console.log('this is index js1')
var that
class Student {
  constructor(name) {
    this.name = name
    console.log(this)
    that = this
  }
  sayHi() {
    console.log(1234);
  }
  eat() {
    this.sayHi()
  }
}
var s = new Student('zs')
s.sayHi()
s.eat()