var app = getApp();

Page({
  data: {
    imageUrl:null,
    name:null
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // wx.clearStorage();
    var that =this;
    var ftpUrl = wx.getStorageSync('ftpUrl');
    var userCode = wx.getStorageSync('userCode');
    var userName = wx.getStorageSync('userName');
    console.log(userName)
    that.setData({
      imageUrl:"http://"+ftpUrl+"/pho/"+userCode+".jpg",
      name:userName
    })
    console.log(that.data)
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
  logOutTap:function(){
     wx.clearStorage();
      wx.reLaunch({
        url: '../logs/logs'
      });
  }

  
})