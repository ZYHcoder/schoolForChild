var app = getApp();
Page({
  data: {
   titleNumber:0,
   dataDetail:null
  },
  onLoad:function(options){
     
    var xml = '<Order><a1>t24</a1><a2>'+app.globalData.schoolCode+'</a2><a3>'+app.globalData.userCode+'</a3></Order>';
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
       
        console.log(res);
       that.setData({
        dataDetail:res.data
       });
        
      }
    });
    wx.stopPullDownRefresh()
  },
  
  onReady:function(){
    // 页面渲染完成


  },
  onShow:function(){
    // 页面显示
    this.onPullDownRefresh();
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
  teacherLeaveTap:function(ev){
    console.log(ev)
    wx.navigateTo({
      url: '../leaveRequest/leaveRequest?id='+ev.currentTarget.dataset.id
    });
  },
  onPullDownRefresh: function(){
    this.onLoad();
    
  }
  
})