Page({

  /**
   * 页面的初始数据
   */
  data: {
    animationData: {},
    authorImg: null,
    progressWidth: 0,
    long: 0,
    lat: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取系统信息
    // wx.getSystemInfo({
    //   success (res) {
    //       console.log(res);
    //   }
    // })


    // wx.showNavigationBarLoading()
    // setTimeout(function() {
    //   wx.hideNavigationBarLoading()
    // }, 1000)


    wx.setNavigationBarTitle({
      title: '首页',
    })
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#ff0000',
      animation: {
        duration: 400,
        timingFunc: 'easeIn'
      }
    })
    // wx.setBackgroundTextStyle({
    //   textStyle: 'dark' // 下拉背景字体、loading 图的样式为dark
    // })
    // wx.setBackgroundColor({
    //   backgroundColorTop: '#ffffff', // 顶部窗口的背景色为白色
    //   backgroundColorBottom: '#ffffff', // 底部窗口的背景色为白色
    // })
    // wx.setTabBarStyle({
    //   color: '#FF0000',
    //   selectedColor: '#00FF00',
    //   backgroundColor: '#0000FF',
    //   borderStyle: 'white'
    // })

    wx.setStorage({
      key:"key",
      data:"value"
    })
   
  },
  btnClick: function() {
    // 路由跳转
      // wx.switchTab({
      //   url: '/pages/logs/logs',
      // })

      // wx.reLaunch({
      //   url: '/pages/logs/logs?id=1'
      // })


      // wx.navigateTo({
      //   url: '/pages/detail/detail?id=1',
      //   events: {
      //     // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
      //     btnClick: function(data) {
      //       console.log(data)
      //     }
      //   },
      //   success: function(res) {
      //     console.log(res);
      //     // 通过eventChannel向被打开页面传送数据
      //     EventChannel.emit('detailBtnClick', { data: 'test' })
      //   }
      // })


      // 页面交互

      // wx.showToast({
      //   title: '成功',
      //   icon: 'success',
      //   duration: 2000,
      //   // mask: true
      // })

      // wx.showModal({
      //   title: '提示',
      //   content: '这是一个模态弹窗',
      //   success (res) {
      //     if (res.confirm) {
      //       console.log('用户点击确定')
      //     } else if (res.cancel) {
      //       console.log('用户点击取消')
      //     }
      //   }
      // })


      // wx.showLoading({
      //   title: '加载中',
      // })
      // setTimeout(function () {
      //   wx.hideLoading()
      // }, 2000)

      // wx.showActionSheet({
      //   itemList: ['A', 'B', 'C'],
      //   success (res) {
      //     console.log(res.tapIndex)
      //   },
      //   fail (res) {
      //     console.log(res.errMsg)
      //   }
      // })
    

      // wx.request({
      //   url: 'http://www.baidu.com', //仅为示例，并非真实的接口地址
      //   data: {
      //     x: '',
      //     y: ''
      //   },
      //   header: {
      //     'content-type': 'application/json' // 默认值
      //   },
      //   success (res) {
      //     console.log(res.data)
      //   }
      // })

    //文件下载
    // var that = this

    //  const downloadTask = wx.downloadFile({
    //     url: 'http://localhost:3000/images/upload_cd74b3435de2ff5a35a6b1e6be6f6c26.jpeg', //仅为示例，并非真实的资源
    //     success (res) {
    //       // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
    //       if (res.statusCode === 200) {
    //        console.log(res);
    //        that.setData({
    //          authorImg: res.tempFilePath
    //        })
    //        // 保存图片
    //        wx.saveImageToPhotosAlbum({
    //          filePath: res.tempFilePath,
    //          success: function(res) {
    //            console.log(res);
    //          }
    //        })
    //       }
    //     }
    //   })
    //   downloadTask.onProgressUpdate(res => {
    //     console.log(res.progress);
    //       that.setData({
    //         progressWidth: res.progress
    //       })
    //   })
      

    // 文件上传
    // var that = this
    // wx.chooseImage({
    //   success (res) {
    //     console.log(res);
    //     const tempFilePaths = res.tempFilePaths
    //     wx.uploadFile({
    //       url: 'http://localhost:3000/upload', //仅为示例，非真实的接口地址
    //       filePath: tempFilePaths[0],
    //       name: 'file',
    //       formData: {
    //         'user': 'test'
    //       },
    //       success (res){
    //         const data = res.data
    //         console.log(data);
    //         // that.setData({
    //         //   authorImg: data
    //         // })
    //         //do something
    //       }
    //     })
    //   }
    // })


    // 数据缓存
    // wx.getStorage({
    //   key: 'key',
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
    // wx.removeStorage({
    //   key: 'key',
    //   success: function(res) {
    //     console.log(res);
    //   }
    // })
    wx.getStorageInfo({
      success (res) {
        console.log(res);
      }
    })


  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('myMap')
  },
    getCenterLocation: function () {
      var that = this
      this.mapCtx.getCenterLocation({
        success: function(res){
          console.log(res.longitude)
          console.log(res.latitude)
        }
      })
    },
    moveToLocation: function () {
      this.mapCtx.moveToLocation()
    },
    translateMarker: function() {
      this.mapCtx.translateMarker({
        markerId: 0,
        autoRotate: true,
        duration: 1000,
        destination: {
          latitude:23.10229,
          longitude:113.3345211,
        },
        animationEnd() {
          console.log('animation end')
        }
      })
    },
    includePoints: function() {
      this.mapCtx.includePoints({
        padding: [10],
        points: [{
          latitude:23.10229,
          longitude:113.3345211,
        }, {
          latitude:23.00229,
          longitude:113.3345211,
        }]
      })
    },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
      var animation = wx.createAnimation({
        duration: 1000,
        timingFunction: 'ease',
      })

      this.animation = animation

      animation.scale(2,2).rotate(45).step()

      this.setData({
        animationData:animation.export()
      })

      setTimeout(function() {
        animation.translate(30).step()
        this.setData({
          animationData:animation.export()
        })
      }.bind(this), 1000)
  },
  rotateAndScale: function () {
    console.log(123);
    // 旋转同时放大
    this.animation.rotate(45).scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateThenScale: function () {
    console.log(123);
    // 先旋转后放大
    this.animation.rotate(45).step()
    this.animation.scale(2, 2).step()
    this.setData({
      animationData: this.animation.export()
    })
  },
  rotateAndScaleThenTranslate: function () {
    // 先旋转同时放大，然后平移
    this.animation.rotate(45).scale(2, 2).step()
    this.animation.translate(100, 100).step({ duration: 1000 })
    this.setData({
      animationData: this.animation.export()
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})
