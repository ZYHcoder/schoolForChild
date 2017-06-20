var app = getApp();
var time = app.getNowTime();
Page({
  data: {
    array: ["请选择类型",'日报', '周报', '月报','年报'],
    colorarray:["#e0e0e0","#000","#000","#000","#000"],
    objectArray: [
      {
        id: 0,
        name: '请选择身份',
        color:"#e0e0e0"
      },
      {
        id: 1,
        name: '日报'
      },
      {
        id: 2,
        name: '月报'
      },
      {
        id: 3,
        name: '周报'
      },
      {
        id: 4,
        name: '年报'
      }
       
    ],
    index: 0
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
   bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  }

  
})