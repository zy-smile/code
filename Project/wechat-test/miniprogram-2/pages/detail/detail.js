Page({
    onLoad: function(option){
      console.log(option.id)
    //   const eventChannel = this.btnClick()
    //   eventChannel.emit('acceptDataFromOpenedPage', {data: 'test'});
    //   eventChannel.emit('someEvent', {data: 'test'});
      // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
      eventChannel.on('detailBtnClick', function(data) {
        console.log(data)
      })
    },
    detailBtnClick: function() {
        wx.navigateBack({
            delta: 1
          })
    }
  })