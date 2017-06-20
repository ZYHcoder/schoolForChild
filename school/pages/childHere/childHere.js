var app = getApp();
Page({
  data: {
   
  },
  onLoad:function(options){
    var myDate = new Date();
    var time = myDate.toLocaleDateString();
    var xml = '<Order><a1>t18</a1><a2>2017-05-12</a2><a3>1004</a3><a4>10040001</a4></Order>';
    wx.request({
      url: app.globalData.requestUrl, //仅为示例，并非真实的接口地址
      data: {
         lcdata: xml
         
      },
      header: {
          'content-type': 'application/x-www-form-urlencoded'
      },
      dataType:'json',
      method:"POST",
      success: function(res) {
       
        console.log(res);
       
        
      }
    });
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
  childHereDetailTap:function(){
     wx.navigateTo({
      url: '../childHereDetail/childHereDetail'
    });
  },
  onPullDownRefresh: function(){
    this.onLoad();
    
  },

  
})