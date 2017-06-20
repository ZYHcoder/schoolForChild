var app = getApp();
Page({
  data: {
    leaveData:null,
    option:null
  },
  onLoad:function(options){
    var that = this;
    console.log(options);
    that.setData({
      option:options
    });
    var xml = '<Order><a1>t23</a1><a2>'+options.id+'</a2><a3>'+app.globalData.userCode+'</a3></Order>';
   
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
       that.setData({
        leaveData:res.data
       });
        
      }
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
  yesTap:function(){
    var that = this;
    console.log(that.data)
    var xml = '<Order><a1>t25</a1><a2>'+app.globalData.schoolCode+'</a2><a3>'+app.globalData.userCode+'</a3><a4>'+that.data.option.id+'</a4><a5></a5></Order>';
    var that = this;
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
       
       console.log(res)
       if(res.data=="ok"){
        wx.showToast({
          title: '成功',
          icon: 'success',
          duration: 1000
        });
        wx.navigateBack({
          delta: 1
        });
       }else{
         wx.showToast({
          title: '失败',
          icon: 'fail',
          duration: 1000
        });
       }
        
      }
    });
  }
  
})