//index.js
//获取应用实例
var app = getApp();
Page({
  data: {
     imgUrlsBannre: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    // 校长端-------------------------------------------------------------------------------------------
    iconList1:[
      {
        name:'学生考勤',
        imageUrl:'../../images/tb-1.png',
        id:0
      },
      {
        name:'教师考勤',
        imageUrl:'../../images/tb-2.png',
        id:1
      },
      {
        name:'最新动态',
        imageUrl:'../../images/tb-3.png',
        id:2
      },
      {
        name:'工作汇报',
        imageUrl:'../../images/gzhb.png',
        id:3
      }
    ],
    iconList2:[
      {
        name:'请假审批',
        imageUrl:'../../images/tb-5.png',
        id:4
      },
      {
        name:'公文审批',
        imageUrl:'../../images/tb-6.png',
        id:5
      },
      {
        name:'应收查询',
        imageUrl:'../../images/tb-7.png',
        id:6
      },
      {
        name:'今日食谱',
        imageUrl:'../../images/tb-8.png',
        id:7
      }
    ],
    iconList3:[
      {
        name:'收支查询',
        imageUrl:'../../images/tb-9.png',
        id:8
      },
      {
        name:'通讯录',
        imageUrl:'../../images/txl.png',
        id:9
      },
      {
        name:'院长信箱',
        imageUrl:'../../images/yzxx.png',
        id:10
      },
      {
        name:'园所通知',
        imageUrl:'../../images/ystz.png',
        id:11
      }
    ],
    // 老师端-------------------------------------------------------------------------------------------------------
     iconList4:[
      {
        name:'健康管理',
        imageUrl:'../../images/jkgl.png',
        id:0
      },
      {
        name:'今日菜谱',
        imageUrl:'../../images/jrsp.png',
        id:1
      },
      {
        name:'接送管理',
        imageUrl:'../../images/jsgl.png',
        id:2
      },
      {
        name:'工作审批',
        imageUrl:'../../images/gzsp.png',
        id:3
      },
      {
        name:'学生请假',
        imageUrl:'../../images/xsqj.png',
        id:4
      }

    ],
    iconList5:[
      
      {
        name:'报名入口',
        imageUrl:'../../images/xkxc.png',
        id:5
      },
      {
        name:'精彩班级',
        imageUrl:'../../images/jcbj.png',
        id:6
      },
      {
        name:'接送记录',
        imageUrl:'../../images/jsjl.png',
        id:7
      },
      {
        name:'教师请假',
        imageUrl:'../../images/jsqj.png',
        id:8
      },
      {
        name:'视频',
        imageUrl:'../../images/sp.png',
        id:9
      }
    ],
    iconList6:[
      
      {
        name:'通讯录',
        imageUrl:'../../images/txl.png',
        id:10
      },
      {
        name:'工作汇报',
        imageUrl:'../../images/gzhb.png',
        id:11
      },
      {
        name:'我的通知',
        imageUrl:'../../images/wdtz.png',
        id:12
      },
      {
        name:'',
        imageUrl:'',
        id:13
      },
      {
        name:'',
        imageUrl:'',
        id:14
      },
    ],
    // 家长端-------------------------------------------------------------------------------------------------------
    iconList7:[
      {
        name:'健康管理',
        imageUrl:'../../images/jkgl.png',
        id:0
      },
      {
        name:'今日菜谱',
        imageUrl:'../../images/jrsp.png',
        id:1
      },
      {
        name:'园所通知',
        imageUrl:'../../images/ystz.png',
        id:2
      },
      {
        name:'院长信箱',
        imageUrl:'../../images/hjjk.png',
        id:3
      },
       {
        name:'课程设置',
        imageUrl:'../../images/kcsz.png',
        id:4
      }
    ],
    iconList8:[
      {
        name:'费用查询',
        imageUrl:'../../images/fycx.png',
        id:5
      },
      {
        name:'精彩班级',
        imageUrl:'../../images/jcbj.png',
        id:6
      },
      {
        name:'宝宝请假',
        imageUrl:'../../images/czrj.png',
        id:7
      },
      {
        name:'报名入口',
        imageUrl:'../../images/xkxc.png',
        id:8
      },
      {
        name:'园所视频',
        imageUrl:'../../images/sp.png',
        id:9
      }
    ],
    iconList9:[
      {
        name:'接送记录',
        imageUrl:'../../images/jsgl.png',
        id:10
      },
      {
        name:'作业',
        imageUrl:'../../images/jmgt.png',
        id:11
      },
      {
        name:'',
        imageUrl:'',
        id:12
      },
      {
        name:'',
        imageUrl:''
      },
      {
        name:'',
        imageUrl:''
      }
    ],
  },
  // 校长端按钮点击事件------------------------------------------------------------------------------------------------------------
  iconButtonTap: function(ev){
    console.log(ev);
    switch (ev.currentTarget.dataset.indexid){
              case 0:
                 wx.navigateTo({
                    url: '../childHere/childHere'
                  });
                break;
              case 1:
                   wx.navigateTo({
                    url: '../teacherHere/teacherHere'
                  });
                break;
              case 2:
                  wx.navigateTo({
                    url: '../friendCircle/friendCircle'
                  });
                break;
              case 3:
                   wx.navigateTo({
                    url: '../workApprove/workApprove'
                  });
                break;
              case 4:
                 wx.navigateTo({
                    url: '../teacherLeave/teacherLeave'
                  });
                break;
              case 5:
                 wx.navigateTo({
                    url: '../gwApprove/gwApprove'
                  });
                break;
              case 6:
                wx.navigateTo({
                    url: '../yscx/yscx'
                  });
                break;
              case 7:
                 wx.navigateTo({
                    url: '../todayMeal/todayMeal'
                  });
                break;
              case 8:
                  wx.navigateTo({
                    url: '../szcx/szcx'
                  });
                break;
              case 9:
                  wx.navigateTo({
                    url: '../addressList/addressList'
                  });
                break;
              case 10:
                  wx.navigateTo({
                    url: '../yzxx/yzxx'
                  });
                break;
              case 11:
                  wx.navigateTo({
                    url: '../ystz/ystz'
                  });
                break;
             

            }
  },
  // 老师端按钮点击事件------------------------------------------------------------------------------------------------------------
  iconButtonTap2: function(ev){
    console.log(ev);
    switch (ev.currentTarget.dataset.indexid){
              case 0:
                wx.navigateTo({
                    url: '../healthManage/healthManage'
                });
                break;
              case 1:
                wx.navigateTo({
                    url: '../todayMeal/todayMeal'
                });
                break;
              case 2:
                  wx.navigateTo({
                    url: '../jsManage/jsManage'
                });
                break;
              case 3:
                wx.navigateTo({
                    url: '../gzspT/gzspT'
                });
                break;
              case 4:
                wx.navigateTo({
                    url: '../xsqj/xsqj'
                });
                break;
              case 5:
                wx.navigateTo({
                    url: '../bmrkT/bmrkT'
                });
                break;
              case 6:
                wx.navigateTo({
                    url: '../friendCircle/friendCircle'
                });
                break;
              case 7:
                 wx.navigateTo({
                    url: '../jsjl/jsjl'
                });
                break;
              case 8:
                wx.navigateTo({
                    url: '../teacherAddLeave/teacherAddLeave'
                });
                break;
              case 9:
                 wx.navigateTo({
                    url: '../video/video'
                });
                break;
              case 10:
                 wx.navigateTo({
                    url: '../addressList/addressList'
                  });
                break;
              case 11:
                 wx.navigateTo({
                    url: '../workApproveT/workApproveT'
                  });
                break;
               case 12:
                  wx.navigateTo({
                    url: '../wdtz/wdtz'
                  });
                break;
            }
  },
    // 家长端按钮点击事件------------------------------------------------------------------------------------------------------------
  iconButtonTap3: function(ev){
    console.log(ev);
    switch (ev.currentTarget.dataset.indexid){
              case 0:
                wx.navigateTo({
                    url: '../healthManageP/healthManageP'
                });
                break;
              case 1:
                wx.navigateTo({
                    url: '../todayMeal/todayMeal'
                });
                break;
              case 2:
                 
                break;
              case 3:
                
                break;
              case 4:
                wx.navigateTo({
                    url: '../schedule/schedule'
                });
                break;
              case 5:
               
                break;
              case 6:
               
                break;
              case 7:
                
                break;
              case 8:
                
                break;
              case 9:
              
                break;
              case 10:
              
                break;
              case 11:
                wx.navigateTo({
                    url: '../homeworkP/homeworkP'
                });
                break;

            }
  },
  //事件处理函数
  onLoad: function () {
    var that = this;
    var power = app.globalData.userPower;
    var schoolCode = app.globalData.schoolCode;
    // power = 2;
    console.log(power)

    //  wx.request({
    //   url: 'https://api.jiahe365.com/buyer/v1/index.index', //仅为示例，并非真实的接口地址
    //   data: {
    //      city_id:1372,
    //      page_no:1
         
    //   },
    //   header: {
    //       'content-type': 'application/json'
    //   },
    //   dataType:'json',
    //   method:"POST",
    //   success: function(res) {
       
    //     console.log(res);
        
        
    //   }
    // });
      // 请求温度湿度接口
    var xml = '<Order><a1>s06</a1><a2>'+schoolCode+'</a2><a3></a3><a4></a4></Order>';
    wx.request({
      url: app.globalData.requestUrl, //仅为示例，并非真实的接口地址
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
       
        console.log(res);
        that.setData({
          sd:res.data[0].sd,
          wd:res.data[0].wd
        });
        
      }
    });



    // 家长
    if(power==1){
     that.setData({
      presidentShow:false,
      teacherShow:false,
      parentShow:true
     });
    
    

      // 老师

    }else if(power==2){
      that.setData({
        presidentShow:false,
        teacherShow:true,
        parentShow:false
       });
      var classCode = wx.getStorageSync('classCode');
      var time = app.getNowTime();
      var xml1 = '<Order><a1>t18</a1><a2>'+time+'</a2><a3>'+schoolCode+'</a3><a4>'+classCode+'</a4></Order>';
      wx.request({
        url: 'http://www.qdsyzyy.com/erfw/wl.aspx', //仅为示例，并非真实的接口地址
        data: {
           lcdata: xml1,
           dbname:'erdata'
           
        },
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        dataType:'json',
        method:"POST",
        success: function(res) {
          console.log(res);
          that.setData({
            aqty:res.data.aqty,
            wqty:res.data.wqty,
            yqty:res.data.yqty
          });
          
        }
      });

      // 校长
    }else if(power==3){
      //请求全校人数据口

      var time = app.getNowTime();
      var xml1 = '<Order><a1>t18</a1><a2>'+time+'</a2><a3>'+schoolCode+'</a3><a4></a4></Order>';
      wx.request({
        url: 'http://www.qdsyzyy.com/erfw/wl.aspx', //仅为示例，并非真实的接口地址
        data: {
           lcdata: xml1,
           dbname:'erdata'
           
        },
        header: {
            'content-type': 'application/x-www-form-urlencoded'
        },
        dataType:'json',
        method:"POST",
        success: function(res) {
          console.log(res);
          that.setData({
            aqty:res.data.aqty,
            wqty:res.data.wqty,
            yqty:res.data.yqty
          });
          
        }
      });
      that.setData({
        presidentShow:true,
        teacherShow:false,
        parentShow:false
     });
    }
   
   wx.stopPullDownRefresh();
  },
  onPullDownRefresh: function(){
    this.onLoad();
    
  },
  onShow:function(){
    
  }
})
