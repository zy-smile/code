//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    list: [
      {name: 'zs', age: 12},
      {name: 'ls', age: 23}
    ],
    num: 3,
    obj: {
      id: 3,
      time: 2020
    }
  },
 checkHandle(e) {
   console.log(e);
 },
 onPullDownRefresh() {
  console.log(e);
 }
})
