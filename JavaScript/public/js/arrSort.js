let arr = [3,4,2,5,8,6,1]
function Sort(arr, flag) {
   for(var i = 0; i < arr.length; i++) {
     for(var j = i + 1; j < arr.length; j++) {
      if(flag == 'a-b') {
        if(arr[i]>arr[j]) {
          var temp = null
          temp = arr[i]
          arr[i] = arr[j]
          arr[j] =temp
        }
      }else if(flag == 'b-a') {
        if(arr[i] < arr[j]) {
          var temp = null
          temp = arr[i]
          arr[i] = arr[j]
          arr[j] =temp
        }
      }
     }
   }
   return arr
}
console.log(Sort(arr,'b-a'))
let arr2 = [1,2,42,4,2,6,7,1,5]
function setArr(arr) {
  // 双重for循环方法
  // for(var i = 0; i<arr.length; i++) {
  //   for(var j = i+ 1; j<arr.length; j++) {
  //       if(arr[i] == arr[j]) {
  //         arr.splice(j,1)
  //       }
  //   }
  // }
  // return arr
  // 查询索引方法
  // let result = []
  // for(var i = 0; i<arr.length; i++) {
  //   if(result.indexOf(arr[i]) == -1) {
  //     result.push(arr[i])
  //   }
  // }
  // return result
  // set去重
  return Array.from(new Set(arr))
}
console.log(setArr(arr2));