// //index.js
// //获取应用实例
const app = getApp()
//  page用来定义页面对象
Page({
  data: {
    username: 'admin',
    password: '123'
  },
  //  第一种方法
  // inputNameChange: function(e) {
  //   console.log(e)
  //  this.setData({
  //    username: e.detail.value,
  //  })
   
  // },
  // inputPassChange: function(e) {
  //   this.setData({
  //     password: e.detail.value,
  //   })
  //   console.log(this.data)
  // }
  //  封装的函数   第二种方法
  // inputChange: function(e) {
  //   var prop = e.target.dataset.name
  //   var obj = {}
  //   obj[prop] = e.detail.value
  //   this.setData(obj)
  // },
  // loginHandle: function() {
  //   console.log(this.data)
  // }
  //  第三种方法
  handleSubmit: function(e) {
    console.log(e)
  }

})