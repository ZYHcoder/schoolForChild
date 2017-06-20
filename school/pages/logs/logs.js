//logs.js
var util = require('../../utils/util.js');
var app = getApp();
Page({
  data: {
    // logs: []
    array: ["请选择身份",'家长', '老师', '校长'],
    colorarray:["#e0e0e0","#000","#000","#000"],
    objectArray: [
      {
        id: 0,
        name: '请选择身份',
        color:"#e0e0e0"
      },
      {
        id: 1,
        name: '家长'
      },
      {
        id: 2,
        name: '老师'
      },
      {
        id: 3,
        name: '校长'
      }
       
    ],
    index: 0
  },
  onLoad: function () {
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(function (log) {
    //     return util.formatTime(new Date(log))
    //   })
    // })
    var isLoged = wx.getStorageSync('isLoged');
    if(isLoged){
     
      wx.switchTab({
        url: '../index/index'
      })
    }else{

    }
  },
  // scanTap:function(){
  //   wx.scanCode({
  //     success: (res) => {
  //       console.log(res);
  //     }
  //   });
  // },
  formSubmit: function(e) {
    // var that = this;
    // console.log(that.data.index)
    // var powerCode = that.data.index-0+1;
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    var xml = '<Order><a1>s01</a1><a2>'+e.detail.value.username+'</a2><a3>'+e.detail.value.password+'</a3><a4>'+e.detail.value.gangwei+'</a4><a5>'+e.detail.value.school+'</a5></Order>';
    // wx.showToast({
    //   title: '登录中',
    //   icon: 'loading' 
    // });
    wx.request({
      url: 'http://www.qdsyzyy.com/erfw/wl.aspx', //仅为示例，并非真实的接口地址
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
        wx.hideToast();
        console.log(res);
        if(res.data==0){
          wx.showToast({
            title: '账号密码或编号错误',
            icon: 'fail',
            duration: 2000
          });
        }else{
          app.globalData.userPower = e.detail.value.gangwei;
          app.globalData.schoolCode = e.detail.value.school;
           wx.setStorage({
              key:"isLoged",
              data:"true"
            });
           wx.setStorage({
              key:"userPower",
              data:e.detail.value.gangwei
            });
           wx.setStorage({
              key:"schoolCode",
              data:e.detail.value.school
            });
            wx.setStorage({
              key:"userCode",
              data:res.data.code
            });
            wx.setStorage({
              key:"classCode",
              data:res.data.class
            });
             wx.setStorage({
              key:"ftpUrl",
              data:res.data.tfserver
            });
              wx.setStorage({
              key:"userName",
              data:res.data.name
            });
           wx.switchTab({
            url: '../index/index'
          });
        }
      }
    })
    
    
    
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }
})








