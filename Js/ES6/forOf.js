let obj = {
    a: 1,
    b: 2,
    c: 3
}
let arr = ['a','b','c']
for(let key in obj) {
    console.log(key);
}
for(let key of arr) {
    console.log();
}
let str = 'abcd'
// for(let i = 0; i<str.length; i++) {
//     console.log(str[i]);
// }
for(let key of str) {
    console.log(key);
}