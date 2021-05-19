interface obj {
    aa: number,
    b: string
}
let obj: obj = {
    aa: 1,
    b: 'we'
}
// let obj1: {a:number, b:string} = {
//     a: 1,
//     b: 'we'
// }
// 对象的解构
let {a, b} = obj
console.log(a+ "------" + b);

