function fn(n) {
  if (n == 1) return 1
  return n * fn(n-1)
}
console.log(fn(5))
// 多维数组变成一维数组
// 递归方法
let arr = [1,3,[4,5],6,[7,9],0]
function newArr(arr) {
  let result = []
  for(var i = 0; i < arr.length;i++){
    if(Array.isArray(arr[i])) {
      result = result.concat(newArr(arr[i]))
    }else {
      result.push(arr[i])
    }
  }
  return result
}
console.log(newArr(arr))
// toString方法
let arr1 = [1,2,4,[4,5,5,[6,7]]]
function fn1(arr) {
  return arr.toString().split(',')
}
console.log(fn1(arr1));
function fn2(n) {
  if(n<2) {
    return n
  }
  return fn2(n-1)+fn2(n-2)
}
console.log(fn2(8));
function fn3(n) {
  if(n <= 2) {
    return n
  }
  let i = 2
  let pre = 1
  let current = 2
  let res = 0
  while(i++ < n) {
    console.log(i);
    
    res = pre + current
    pre = current
    current = res
  }
  return res
}
console.log(fn3(3));
let i = 0
while( i++ < 3) {
  console.log(i)
}
while(++i < 3) {
  console.log(i)
}