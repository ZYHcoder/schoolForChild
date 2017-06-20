Page({
  data: {
   
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
  listDetailTap:function(){
    wx.navigateTo({
      url: '../studentAddLeave/studentAddLeave'
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