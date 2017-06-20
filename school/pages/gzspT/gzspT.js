var app = getApp();
var time = app.getNowTime();
Page({
  data: {
    date:'2017-01-01',
    date2:time
  },
  onLoad:function(options){
     wx.stopPullDownRefresh();
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
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  onPullDownRefresh: function(){
    this.onLoad();
    
  },
  addTap:function(){
     wx.navigateTo({
        url: '../addGzspT/addGzspT'
      });
  },

  
})