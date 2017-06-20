Page({
  data: {
    picList:null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  lianxi:function(){
    wx.navigateTo({
      url: '../logins/login'
    });
  },
  onReady:function(){
    // 页面渲染完成


  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  locationTap:function(){
    wx.chooseLocation({
      success:function(res){
        console.log(res)
      },
      fail:function(res){
        console.log(res)
      }
    })
  },
  addPicTap:function(){
    var that = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        console.log(res)
        var tempFilePaths = res.tempFilePaths;
        that.setData({
          picList:res.tempFilePaths
        })
      }
    });
  },
  viewPicTap:function(ev){
    var that = this;
    wx.previewImage({
      current: ev.target.dataset.url, // 当前显示图片的http链接
      urls:that.data.picList // 需要预览的图片http链接列表
    })
  }

  
})