Page({
  data: {
   date:null,
   list:[
    {
      "name":"王同学",
      "tiwen":"已到校",
      "zt":"正常"
    }
   ],
   style1:'width: 142rpx; height: 45rpx; border:1px solid #fff; border-radius: 15rpx;background-color: #ccc;line-height: 50rpx;color: #fff;',
   style2:'width: 142rpx; height: 45rpx; border:1px solid #fff; border-radius: 15rpx;background-color: #9cd1d7;line-height: 50rpx;color: #fff;'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    var myDate = new Date();   
    var date1 = myDate.toLocaleDateString();
    that.setData({
      date:date1
    });
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
 

  
})