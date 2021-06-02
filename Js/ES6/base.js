let [a,b] = [1,2]
console.log(a+'--'+b); //数组解构

let [cc, dd, ...arr] = [1, 3, 4, 5]
console.log(cc);
console.log(dd);
console.log(arr);

let {foo:o,fcc: c} = {foo:1,fcc:2}
console.log(o+'---'+c);
let {aa,bb} = {aa:1,bb:2}
console.log(aa+'---'+bb); // 对象解构

let {...obj} = {name: 'hello',age: 12}
console.log(obj);

// 函数参数解构
function f(mm,...vals) {
    console.log(vals);
}
f(11,22,33)