//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var that = this;
    var isLoged = wx.getStorageSync('isLoged');
    var userPower = wx.getStorageSync('userPower');
    var code = wx.getStorageSync('schoolCode');
    var userCode = wx.getStorageSync('userCode');
    if(isLoged){
      that.globalData.schoolCode = code; 
      that.globalData.userPower = userPower; 
      that.globalData.userCode = userCode;
      // wx.switchTab({
      //   url: 'pages/index/index'
      // })
    }else{

    }
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData:{
    userPower:null,
    schoolCode:null,
    requestUrl:'http://api.qdsyzyy.com/erfw/wl.aspx'
  },
  getNowTime:function(){
        var date = new Date();
        var seperator1 = "-";
        
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
               
        return currentdate;
  },
  onShow:function(){
    wx.onNetworkStatusChange(function(res) {
      if(!res.isConnected){
        wx.showModal({
          title: '提示',
          content: '当前无网络连接，请稍后重试',
          success: function(res) {
            if (res.confirm) {
              console.log('用户点击确定')
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      }else{

      }
      console.log(res.isConnected)
      console.log(res.networkType)
    });
  }
})