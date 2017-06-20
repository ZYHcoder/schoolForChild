Page({
  data: {
    list:[
      {
        icon:"../images/my1.png",
        word:"园办",
        triangle:"../images/sanjiao.jpg",
        unique:"unique_0",
        show:'false',
        dataList:[
          {name:'aaa',number:"1111111111"},
          {name:'bbb',number:"2222222222"},
          {name:'ccc',number:"3333333333"}
        ]
      },
      {
        icon:"../images/my1.png",
        word:"老师",
        triangle:"../images/sanjiao.jpg",
        unique:"unique_0",
        show:'false',
        dataList:[
          {name:'aaa',number:"1111111111"},
          {name:'bbb',number:"2222222222"},
          {name:'ccc',number:"3333333333"}
        ]
      }
    ],
    number:-1
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var xml = "<Order><a1>c05</a1><a2>"+1004+"</a2></Order>"
     wx.request({
      url: 'http://www.qdsyzyy.com/erfw/wl.aspx', //仅为示例，并非真实的接口地址
      data: {
         lcdata: xml,
         dbdata:'wltest'
         
      },
      header: {
          'content-type': 'application/x-www-form-urlencoded'
      },
      dataType:'json',
      method:"POST",
      success: function(res) {
       console.log(res)
        
      }
    });
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
  groupNameTap:function(ev){
    var that = this;
    console.log(ev)
    var isShow = ev.currentTarget.dataset.show;
    var indexNumber = ev.currentTarget.dataset.indexnumber;
    console.log(indexNumber);
    var number = that.data.number;
    if(number==indexNumber){
      that.setData({
        number: -1
      });
    }else{
      that.setData({
        number: indexNumber
      });
    }
    
    console.log(that.data)
  },
   onPullDownRefresh: function(){
    this.onLoad();
    
  },

  
})