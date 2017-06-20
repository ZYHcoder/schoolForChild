var app = getApp();
var time = app.getNowTime();
Page({
  data: {
   orderunmber:null,
    date:'2017-01-01',
    date2:time
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
  addTap:function(){
    var that = this;
    var classCode = wx.getStorageSync('classCode');
    var xml = '<Order><a1>t21</a1><a2>03-外出</a2><a3>'+classCode+'</a3><a4></a4><a5>2017-05-23</a5><a6>2017-05-23</a6><a7>0004</a7><a8>1004</a8></Order>';
    wx.request({
      url: app.globalData.requestUrl, //仅为示例，并非真实的接口地址
      data: {
         lcdata: xml,
         dbname:'erdata'
         
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

    //微信支付
  
  },
  pay:function(){
    var that = this;

  }

  
})