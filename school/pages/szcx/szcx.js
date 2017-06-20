var app = getApp();
var time = app.getNowTime();
Page({
  data: {
    date:'2017-01-01',
    date2:time,
    moneyArr:null
  },
  onLoad:function(options){
    var that = this;
    
    var aaa = {"erdata":"[{'fcode':'w17','branchid':'1004','code':'8000014'}]","dbname":"erdata","erkey":"97f9b0e314be6c5aa09d299129db752a"}
      wx.request({
        url: 'http://139.129.19.110/erweb/web.aspx', //仅为示例，并非真实的接口地址
        data: aaa,
        header: {
            'content-type': 'application/json'
        },
        dataType:'json',
        method:"POST",
        success: function(res) {
          console.log(res);
          that.setData({
            moneyArr:res.data.retData.webdata
          })
          
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
  leaveDetail:function(){
    wx.navigateTo({
      url: '../approveDetail/approveDetail'
    });
  },
  approveListTap:function(ev){
    console.log(ev)
    wx.navigateTo({
      url: '../approveList/approveList?class='+ev.currentTarget.dataset.number
    });
  },
  bindDateChange: function(e) {
    console.log(e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },

  
})