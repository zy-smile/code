let obj1 = {
    a: 1,
    b: 2
}
let obj2 = Object.create(obj1)
// obj1是obj2的原型
console.log(obj2.a);