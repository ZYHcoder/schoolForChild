var app = getApp();
Page({
  data: {
   
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
  leaveDetail:function(){
    wx.navigateTo({
      url: '../gwDetail/gwDetail'
    });
  },
  approveListTap:function(ev){
    console.log(ev)
    wx.navigateTo({
      url: '../gwList/gwList?class='+ev.currentTarget.dataset.number
    });
  },
  onPullDownRefresh: function(){
    this.onLoad();
    
  },

  
})