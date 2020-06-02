// 注册小程序页面
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'初始化测试数据',
    userInfo:{

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getUserInfo({
     success:(res)=>{
        console.log(res.userInfo)
        // 更新数据
       this.setData({
          userInfo:res.userInfo
        })
     },
     fail:()=>{
       console.log('获取用户信息失败')
     }
    })
  },
  // 获取用户信息的回调
  handleGetUserInfo(data) {
    // console.log('handleGetUserInfo')
    console.log(data)
  if(data.detail.userInfo){
    this.setData({
      userInfo:data.detail.userInfo
    })
  }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady:function() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
   
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})