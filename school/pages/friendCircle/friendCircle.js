var app = getApp();
Page({
  data: {
    isHidden:true,
    isHidden2:false,
    focus:false
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
      url: '../approveDetail/approveDetail'
    });
  },
  zpTap:function(){
    var that = this;
    // console.log(that.data.isHidden)
    if(that.data.isHidden){
      that.setData({
        isHidden:false
      });
    }else{
      that.setData({
        isHidden:true
      });
    }
    
  },
  pinglunTap:function(){
    var that = this;
    that.setData({
      
        focus:true
      });
    
    // console.log(that.data.isHidden)
    if(that.data.isHidden){
      that.setData({
      
        
      });
    }else{
      that.setData({
        isHidden:true,
        isHidden2:true
        
      });
    }
    console.log(that.data.focus);
    
  },
  zanTap:function(){
    var that = this;
    console.log(that.data.isHidden)
    if(that.data.isHidden){
      that.setData({
      
        
      });
    }else{
      that.setData({
        isHidden:true
      });
    }
    
  },
  bindconfirmTap:function(ev){
    console.log(ev);
    //点击发送评论
    var that = this;

    
      that.setData({
        isHidden2:false
      });
    
  },
  addTap:function(){
     wx.navigateTo({
      url: '../addCircle/addCircle'
    });
  },
   onPullDownRefresh: function(){
    this.onLoad();
     
  },

  
})