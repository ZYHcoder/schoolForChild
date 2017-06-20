var app = getApp();
var time = app.getNowTime();
Page({
  data: {
    array: ["请选择类型",'采购申请', '出差申请', '报销申请','活动申请'],
    colorarray:["#e0e0e0","#000","#000","#000","#000"],
    objectArray: [
      {
        id: 0,
        name: '请选择类型',
        color:"#e0e0e0"
      },
      {
        id: 1,
        name: '采购申请'
      },
      {
        id: 2,
        name: '出差申请'
      },
      {
        id: 3,
        name: '报销申请'
      },
      {
        id: 4,
        name: '活动申请'
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