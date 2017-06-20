var app = getApp();
var time = app.getNowTime();
Page({
  data: {
    status2:0
  },
  onLoad:function(options){
    
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
  xxTap:function(){
    wx.navigateTo({
      url: '../xxDetail/xxDetail'
    });
  }
 

  
})