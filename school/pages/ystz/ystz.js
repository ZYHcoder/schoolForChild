var app = getApp();
var time = app.getNowTime();
Page({
  data: {
    status:1,
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
  pxtzTap:function(){
    var that = this;
    if(that.data.status==0){
      that.setData({
        status:1
      })
    }else{
      that.setData({
        status:0
      })
    }
    
  }
 

  
})