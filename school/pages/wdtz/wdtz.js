var app = getApp();

Page({
  data: {
   titleNumber:0,
   dataDetail:null,
   status:1,
   status2:0
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // wx.clearStorage();
  
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
  titleTap:function(ev){
    var that = this;
    console.log(ev)
    if(ev.target.dataset.titleclass=="0"){
      ev.target.dataset.titleclass=0;
    }else{
      ev.target.dataset.titleclass=1;
    }
    that.setData({
      titleNumber:ev.target.dataset.titleclass
    });
    console.log(that.data.titleNumber)
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
    
  },
  fbtzTap:function(){
      wx.navigateTo({
        url: '../fbtzT/fbtzT'
      });
  }
  
})