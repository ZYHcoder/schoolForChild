var app = getApp();
Page({
  data: {
   
  },
  onLoad:function(options){
    console.log(options);
    switch (options.class){
              case '0':
                wx.setNavigationBarTitle({
                  title: '日报'
                });
                break;
              case '1':
                 wx.setNavigationBarTitle({
                  title: '周报'
                });
                break;
              case '2':
                  wx.setNavigationBarTitle({
                  title: '月报'
                });
                break;
              case '3':
                 wx.setNavigationBarTitle({
                  title: '年报'
                });
                break;

            }
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
   onPullDownRefresh: function(){
    this.onLoad();
    
  },

  
})